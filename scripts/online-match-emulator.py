"""Actual multiplayer UI using Auth/Firestore emulators; no mocked game state."""
from playwright.sync_api import sync_playwright, expect
from pathlib import Path
import re,json,sys,time
sys.stdout.reconfigure(encoding='utf-8')
expect.set_options(timeout=30000)
OUT=Path('reports/offline-first'); OUT.mkdir(parents=True,exist_ok=True)
errors=[]; production=[]; checks=[]
with sync_playwright() as p:
  browser=p.chromium.launch(headless=True)
  contexts=[]; pages=[]
  try:
    for name in ['Host Doctor','Alice Doctor','Bob Doctor']:
      context=browser.new_context(viewport={'width':420,'height':900},reduced_motion='reduce')
      context.route(re.compile(r'https://(?:firestore|identitytoolkit|securetoken|firebaseinstallations)\.googleapis\.com/'),lambda route:(production.append(route.request.url),route.abort()))
      page=context.new_page(); page.set_default_timeout(30000)
      page.on('pageerror',lambda error:errors.append(str(error)))
      page.goto('http://127.0.0.1:4010/',wait_until='networkidle',timeout=120000)
      page.get_by_role('button',name='Dr. Imposter',exact=True).click()
      page.get_by_role('button',name=re.compile('^Online room')).click()
      page.get_by_role('textbox',name='Your name',exact=True).fill(name)
      contexts.append(context); pages.append(page)
    host=pages[0]
    host.get_by_role('button',name='Create',exact=True).click()
    host.get_by_role('button',name='Decrease players',exact=True).click() if not host.get_by_role('button',name='Decrease players',exact=True).is_disabled() else None
    # Disable the question cycle to keep this a short, real three-player match.
    print('HOST_CREATE',host.locator('body').inner_text(),flush=True)
    host.get_by_role('button',name=re.compile('Create Room')).click()
    expect(host.get_by_role('heading',name='Game Room',exact=True)).to_be_visible()
    code=host.locator('section p').filter(has_text=re.compile('^[A-Z0-9]{6}$')).inner_text()
    for guest in pages[1:]:
      guest.get_by_role('button',name='Join Code',exact=True).click()
      guest.get_by_role('textbox',name='Room code',exact=True).fill(code)
    for guest in pages[1:]: guest.get_by_role('button',name=re.compile('Join Room')).click(no_wait_after=True)
    for guest in pages: expect(guest.get_by_role('heading',name='Game Room',exact=True)).to_be_visible()
    checks.append('three real browser identities create and join the same room')
    print('LOBBY',host.locator('body').inner_text(),flush=True)
    host.get_by_role('button',name=re.compile('Start|Deal')).last.click()
    for page in pages: expect(page.get_by_role('heading',name='Your secret card',exact=True)).to_be_visible()
    host.get_by_role('button',name=re.compile('Start discussion')).click()
    expect(host.get_by_role('heading',name='Your secret card',exact=True)).not_to_be_visible()
    print('DISCUSSION',host.locator('body').inner_text(),flush=True)
    for _ in range(40):
      vote=host.get_by_role('button',name=re.compile('Start voting'))
      if vote.count(): vote.click(); break
      next_turn=host.get_by_role('button',name=re.compile('Next question|Finish questions'))
      if next_turn.count(): next_turn.click(); host.wait_for_timeout(300)
      else: raise AssertionError('No discussion action: '+host.locator('body').inner_text())
    for i,page in enumerate(pages):
      page.get_by_role('button',name='Alice Doctor' if i==0 else 'Host Doctor',exact=True).click(no_wait_after=True)
    for page in pages: expect(page.get_by_role('heading',name='Vote Result',exact=True)).to_be_visible()
    checks.append('real votes synchronize and produce a shared result')
    host.get_by_role('button',name=re.compile('Guessing phase')).click()
    for page in pages: expect(page.get_by_role('heading',name='Last chance',exact=True)).to_be_visible()
    print('GUESS',host.locator('body').inner_text(),flush=True)
    skip=None
    for page in pages:
      button=page.get_by_role('button',name=re.compile('Skip'))
      if button.count(): skip=button; break
    assert skip is not None,'No final guess action'
    skip.click()
    for page in pages: expect(page.get_by_role('heading',name='Results',exact=True)).to_be_visible()
    checks.append('completed an actual three-player online match through results')
    host.screenshot(path=str(OUT/'online-emulator-result.png'))
    assert not production,production
    assert not errors,errors
    print('PASS',checks)
  finally:
    for i, state in enumerate(pages):
      try: (OUT/f'online-player-{i}.txt').write_text(state.locator('body').inner_text(),encoding='utf-8')
      except Exception: pass
    if pages:
      try:
        pages[0].screenshot(path=str(OUT/'online-last-state.png'))
        (OUT/'online-last-state.txt').write_text(pages[0].locator('body').inner_text(),encoding='utf-8')
      except Exception:pass
    (OUT/'online-ui-results.json').write_text(json.dumps({'checks':checks,'runtime_errors':errors,'production_requests':production,'completed':len(checks)==3},indent=2),encoding='utf-8')
    browser.close()
