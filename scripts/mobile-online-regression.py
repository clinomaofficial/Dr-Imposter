"""Actual game UI with a test-build-only, in-memory room transport.
Serve .shots/mobile-online-build on port 4001. No cloud rooms are accessed.
"""
from pathlib import Path
import json,re,sys,hashlib
from datetime import datetime,timezone
from playwright.sync_api import sync_playwright,expect
sys.stdout.reconfigure(encoding='utf-8')
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'.shots/mobile-2026-11-01'
checks=[]; errors=[]
sources=[ROOT/'src/index.css',*ROOT.glob('src/**/*.tsx'),*ROOT.glob('scripts/mobile-online*'),ROOT/'scripts/mobile-ui-room-store.ts']
source_hashes={str(p.relative_to(ROOT)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sources if p.is_file()}
def layout(page,key):
    page.wait_for_function('''() => (document.querySelector('main') || document.body).getAnimations({subtree:true}).every(a => a.playState === 'finished' || a.effect.getTiming().iterations === Infinity)''', timeout=10000)
    page.wait_for_timeout(350)
    page.wait_for_function('''() => { let el=document.querySelector('[role="dialog"]:not([inert]) h3') || document.querySelector('main h2'); while(el){if(Number(getComputedStyle(el).opacity)<.999)return false; el=el.parentElement;} return true; }''', timeout=10000)
    defects=page.evaluate('''() => {
      const scope=document.querySelector('[role=dialog]:not([inert])') || document.querySelector('main');
      const bad=[];
      for(const el of scope.querySelectorAll('button,input,summary,select')) {
        const folded=el.closest('details:not([open])');
        if(folded && !folded.querySelector(':scope > summary')?.contains(el)) continue;
        const r=el.getBoundingClientRect();
        if(!r.width || !r.height) continue;
        if(r.left < -1 || r.right > innerWidth+1) bad.push({kind:'overflow',text:el.textContent,left:r.left,right:r.right});
        if(el.matches('button,summary') && (r.width<47.5 || r.height<47.5)) bad.push({kind:'target',text:el.textContent,w:r.width,h:r.height});
      }
      if(document.documentElement.scrollWidth > innerWidth+1) bad.push({kind:'page-overflow'});
      return bad;
    }''')
    assert not defects,(key,defects)
    page.screenshot(path=str(OUT/(key+'.png')))
    checks.append(key); print('PASS',key,flush=True)
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=['--disable-dev-shm-usage','--renderer-process-limit=1'])
    try:
        for ar in [False,True]:
            for battle in [False,True]:
                if checks:
                    browser.close()
                    browser=p.chromium.launch(headless=True,args=['--disable-dev-shm-usage','--renderer-process-limit=1'])
                context=browser.new_context(viewport={'width':320,'height':568},reduced_motion='reduce')
                page=context.new_page(); page.on('pageerror',lambda e:errors.append(str(e)))
                page.route(re.compile(r'https://(?:(?:firestore|identitytoolkit|securetoken|firebaseinstallations)\.googleapis\.com|[^/]*firebaseio\.com)/'),lambda r:r.abort())
                key=f'online-{ "ar" if ar else "en" }-{ "duel" if battle else "party" }'
                page.goto(f'http://127.0.0.1:4001/scripts/mobile-online-fixtures.html?mode={"battle" if battle else "party"}&lang={"ar" if ar else "en"}',wait_until='networkidle')
                page.get_by_role('textbox').first.fill('Local Doctor')
                page.get_by_role('button',name='انضم بكود' if ar else 'Join Code',exact=True).click()
                page.get_by_role('textbox',name='كود الغرفة' if ar else 'Room code',exact=True).fill('UITEST')
                page.get_by_role('button',name=re.compile('الانضمام للغرفة|Join Room')).click()
                expect(page.get_by_role('heading',name='غرفة اللعب' if ar else 'Game Room',exact=True)).to_be_visible()
                layout(page,key+'-lobby-guest')
                page.evaluate("roomFixture.patch({hostId:roomFixture.localId()})")
                layout(page,key+'-lobby-host')
                page.evaluate("roomFixture.advance('PLAYING')")
                expect(page.get_by_role('heading',name='كرتك السري' if ar else 'Your secret card',exact=True)).to_be_visible()
                layout(page,key+'-card')
                if battle:
                    page.evaluate("roomFixture.advance('TWO_PLAYERS_GUESS')")
                    layout(page,key+'-questions')
                    page.locator('main button').filter(has=page.locator('p')).first.click()
                    layout(page,key+'-waiting-answer')
                    page.evaluate("roomFixture.patch({inquiry:{...roomFixture.get().inquiry,turnPlayerId:'host',targetPlayerId:roomFixture.localId()}})")
                    layout(page,key+'-answer')
                    page.evaluate("roomFixture.patch({inquiry:{...roomFixture.get().inquiry,turnPlayerId:roomFixture.localId(),targetPlayerId:'host',activeQuestion:null}})")
                    page.get_by_role('button',name=re.compile('خ.*كرت الخصم') if ar else 'Guess their card').click()
                    layout(page,key+'-guess-sheet')
                    page.keyboard.press('Escape')
                    page.evaluate("roomFixture.patch({players:roomFixture.get().players.map(p=>({...p,score:50})),status:'SCOREBOARD'})")
                else:
                    page.evaluate("roomFixture.advance('PLAYING_DISCUSSION')")
                    layout(page,key+'-discussion')
                    page.evaluate("roomFixture.advance('VOTING')")
                    layout(page,key+'-vote')
                    page.evaluate('roomFixture.failNextWrite()')
                    page.get_by_role('button',name='Host Doctor',exact=True).click()
                    expect(page.get_by_role('dialog',name='تنبيه' if ar else 'Notice',exact=True)).to_be_visible()
                    layout(page,key+'-vote-error')
                    page.keyboard.press('Escape')
                    page.get_by_role('button',name='Host Doctor',exact=True).click()
                    layout(page,key+'-vote-saved')
                    assert page.evaluate('!!roomFixture.get().votes[roomFixture.localId()]')
                    expect(page.get_by_text('بانتظار 2 أصوات' if ar else 'Waiting for 2 more votes',exact=True)).to_be_visible()
                    page.evaluate("roomFixture.patch({votedOutPlayerId:roomFixture.localId(),status:'REVEALED'})")
                    layout(page,key+'-reveal')
                    page.evaluate("roomFixture.advance('GUESSING')")
                    layout(page,key+'-final-guess')
                    page.get_by_role('button',name=re.compile("تخطي|Skip")).click()
                expect(page.get_by_role('heading',name='النتائج' if ar else 'Results',exact=True)).to_be_visible()
                layout(page,key+'-results')
                page.set_viewport_size({'width':740,'height':360}); layout(page,key+'-results-landscape')
                page.evaluate("roomFixture.patch({status:'LOBBY'})")
                expect(page.get_by_role('heading',name='غرفة اللعب' if ar else 'Game Room',exact=True)).to_be_visible()
                checks.append(key+'-remote-reset'); print('PASS',key+'-remote-reset',flush=True)
                context.close()
        assert not errors,errors
        assert source_hashes == {str(p.relative_to(ROOT)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sources if p.is_file()}, 'Sources changed during online UI verification'
    finally:
        failed=sys.exc_info()[0] is not None
        if failed:
            try:
                page.screenshot(path=str(OUT/'online-last-failure.png'))
                (OUT/'online-last-failure.txt').write_text(page.locator('body').inner_text(),encoding='utf-8')
            except Exception: pass
        (OUT/'online-checks.json').write_text(json.dumps({'completed':not failed,'checks':checks,'errors':errors,'browser':browser.version,'completed_utc':datetime.now(timezone.utc).isoformat(),'sources':source_hashes},ensure_ascii=False,indent=2),encoding='utf-8')
        browser.close()
print('Completed',len(checks),'local online UI checks')
