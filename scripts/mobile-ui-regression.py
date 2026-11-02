"""Browser regressions against the real local game. Cloud traffic is blocked.
Serve .shots/mobile-build on port 4000 after building with mobile-ui-test.vite.ts.
Uses disposable browser storage, never a user login.
"""
from pathlib import Path
from datetime import datetime, timezone
import hashlib, json, re, sys
from playwright.sync_api import sync_playwright, expect

sys.stdout.reconfigure(encoding='utf-8')
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '.shots' / 'mobile-2026-11-01'
OUT.mkdir(parents=True, exist_ok=True)
results = []
runtime_errors = []
sources = [ROOT/'index.html', ROOT/'tsconfig.json', ROOT/'src/index.css', *ROOT.glob('src/**/*.tsx'), *ROOT.glob('src/lib/mobileGame.ts')]
source_hashes = {str(path.relative_to(ROOT)):hashlib.sha256(path.read_bytes()).hexdigest() for path in sources}
build_hash = hashlib.sha256((ROOT/'.shots/mobile-build/index.html').read_bytes()).hexdigest()

def note(name, data=None):
    results.append({'check': name, 'status': 'pass', 'details': data})
    print('PASS', name, flush=True)

def screenshot(page, name):
    page.wait_for_timeout(350)
    page.wait_for_function('''() => { let el=document.querySelector('[role="dialog"]:not([inert]) h3') || document.querySelector('main h2'); while(el){if(Number(getComputedStyle(el).opacity)<.999)return false; el=el.parentElement;} return true; }''', timeout=10000)
    page.screenshot(path=str(OUT / (name + '.png')), full_page=False)

def new_page(context):
    page = context.new_page()
    page.on('pageerror', lambda error: runtime_errors.append(str(error)))
    return page

def check_layout(page, name):
    page.wait_for_function('''() => (document.querySelector('main') || document.body).getAnimations({subtree:true}).every(a => a.playState === 'finished' || a.effect.getTiming().iterations === Infinity)''', timeout=10000)
    page.wait_for_timeout(200)
    defects = page.evaluate('''() => {
      const failures = [];
       const scope = document.querySelector('[role="dialog"]:not([inert])') || document.querySelector('.game-shell') || document.body;
       for (const el of scope?.querySelectorAll('button,summary,input,select,[role="button"]') || []) {
         const folded = el.closest('details:not([open])');
         if (folded && !folded.querySelector(':scope > summary')?.contains(el)) continue;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height || getComputedStyle(el).visibility === 'hidden') continue;
        if ((el.matches('button,summary,[role="button"]')) && (r.width < 47.5 || r.height < 47.5)) failures.push({kind:'target', text:el.textContent.trim().slice(0,50),w:r.width,h:r.height});
        if (el.matches('button') && !(el.innerText.trim() || el.getAttribute('aria-label') || el.getAttribute('title'))) failures.push({kind:'unnamed-button'});
         if (el.matches('select') && !(el.labels?.length || el.getAttribute('aria-label'))) failures.push({kind:'unnamed-select'});
        if (r.left < -1 || r.right > innerWidth + 1) failures.push({kind:'overflow',text:el.textContent.trim().slice(0,50),left:r.left,right:r.right});
      }
      if (document.documentElement.scrollWidth > innerWidth + 1) failures.push({kind:'page-overflow'});
      return failures;
    }''')
    assert not defects, (name, defects)
    note(name)

def start(page, lang='English', roster=3, deterministic=False):
    page.add_init_script('''localStorage.setItem('app_language', %s);
      localStorage.setItem('medical_cup_offline_player_names', JSON.stringify(%s));
      localStorage.setItem('dr_imposter_guest_score','100');
      %s''' % (json.dumps(lang), json.dumps(['Doctor '+str(i+1) for i in range(roster)]), 'Math.random = () => 0.173;' if deterministic else ''))
    # Read-only Firestore listeners also stay local; no production analytics writes.
    page.route(re.compile(r'https://(?:(?:firestore|identitytoolkit|securetoken|firebaseinstallations)\.googleapis\.com|[^/]*firebaseio\.com)/'), lambda route: route.abort())
    page.goto('http://127.0.0.1:4000', wait_until='domcontentloaded', timeout=60000)
    try: page.wait_for_load_state('networkidle', timeout=15000)
    except Exception: pass
    expect(page.get_by_role('button', name='Guess', exact=True)).to_be_visible(timeout=30000)

def choose_local(page, battle=False):
    page.get_by_role('button', name='1 vs 1 Battle' if battle else 'Dr. Imposter', exact=True).click()
    check_layout(page,'mode-menu-'+('duel' if battle else 'party'))
    screenshot(page,'mode-menu-'+('duel' if battle else 'party'))
    page.get_by_role('button', name=re.compile(r'^Pass & play|^على جهاز واحد')).click()
    expect(page.get_by_role('button', name=re.compile(r"Let's go|يلا بينا"))).to_be_visible()

def reveal_cards(page, count, arabic=False):
    page.get_by_role('button', name=re.compile(r"Let's go|يلا بينا")).click()
    if count>=3:
        check_layout(page,'party-config'); screenshot(page,'party-config')
        page.get_by_text('Advanced settings',exact=True).click()
        check_layout(page,'party-advanced-config')
        page.get_by_text('Advanced settings',exact=True).click()
    page.get_by_role('button', name=re.compile(r'Deal the cards|وزّع الكروت')).click()
    for i in range(count):
        action = page.get_by_role('button', name=re.compile(r'Hide card & pass phone|أخفِ الكرت|Start Discussion|بدء النقاش'))
        expect(action).to_be_disabled()
        page.get_by_role('button', name=re.compile(r'Reveal my card|اعرض كرتي')).click()
        expect(action).to_be_enabled()
        screenshot(page, f'card-{count}-{i}')
        action.click()
    note(f'privacy-gates-{count}')

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--disable-dev-shm-usage','--renderer-process-limit=2'])
    print('Headless browser ready',flush=True)
    try:
        for lang in ['English','Arabic']:
            for w,h in [(320,568),(360,640),(390,844),(740,360)]:
                context = browser.new_context(viewport={'width':w,'height':h}, device_scale_factor=1, reduced_motion='reduce', is_mobile=True, has_touch=True)
                page = new_page(context); start(page,lang)
                key=f'{lang}-{w}x{h}'
                check_layout(page,'hub-'+key); screenshot(page,'hub-'+key)
                page.get_by_role('button',name='Guess',exact=True).click()
                expect(page.get_by_role('button',name=re.compile(r'Start Round|ابدأ الجولة'))).to_be_visible()
                check_layout(page,'solo-setup-'+key); screenshot(page,'solo-setup-'+key)
                page.get_by_role('button',name=re.compile(r'Start Round|ابدأ الجولة')).click()
                expect(page.get_by_role('button',name=re.compile(r'Next clue|تلميح إضافي'))).to_be_visible()
                check_layout(page,'solo-playing-'+key); screenshot(page,'solo-playing-'+key)
                context.close()
        context=browser.new_context(viewport={'width':360,'height':640},reduced_motion='reduce')
        page=new_page(context); start(page)
        choose_local(page,True)
        expect(page.get_by_role('textbox',name=re.compile('Player name'))).to_have_count(2)
        expect(page.get_by_role('button',name='Add player',exact=True)).to_have_count(0)
        check_layout(page,'duel-roster-from-three'); screenshot(page,'duel-roster')
        reveal_cards(page,2)
        page.get_by_role('button',name=re.compile(r'I am .*Continue')).click()
        expect(page.get_by_role('heading',name='Clinical duel',exact=True)).to_be_visible()
        check_layout(page,'duel-questions'); screenshot(page,'duel-questions')
        expect(page.locator('details')).to_have_count(1)
        expect(page.get_by_role('button',name='Guess their card',exact=True)).to_be_in_viewport()
        questions=page.locator('main button').filter(has=page.locator('p'))
        questions.first.click()
        expect(page.get_by_role('button',name=re.compile(r'I am .*Continue'))).to_be_visible()
        expect(page.get_by_text('True for your card',exact=True)).to_have_count(0)
        page.get_by_role('button',name=re.compile(r'I am .*Continue')).click()
        check_layout(page,'duel-answer'); screenshot(page,'duel-answer')
        note('duel-private-handoff')
        context.close()
        context=browser.new_context(viewport={'width':320,'height':568},reduced_motion='reduce')
        page=new_page(context); start(page)
        page.get_by_role('button',name='More options',exact=True).click()
        dialog=page.get_by_role('dialog',name='Options & Settings',exact=True)
        expect(dialog).to_be_visible()
        assert page.locator('#root').evaluate('(el)=>el.inert')
        page.keyboard.press('Shift+Tab')
        assert dialog.evaluate('(el)=>el.contains(document.activeElement)')
        page.keyboard.press('Escape'); expect(dialog).to_have_count(0)
        expect(page.get_by_role('button',name='More options',exact=True)).to_be_focused()
        note('modal-focus-escape-restore')
        page.get_by_role('button',name='More options',exact=True).click()
        page.get_by_role('switch',name=re.compile('Larger text')).click()
        check_layout(page,'large-text-options'); screenshot(page,'large-text-options')
        page.keyboard.press('Escape')
        page.get_by_role('button',name='Guess',exact=True).click()
        expect(page.get_by_role('button',name='Start Round',exact=True)).to_be_visible()
        check_layout(page,'large-text-solo-setup'); screenshot(page,'large-text-solo-setup')
        page.get_by_role('button',name='More options',exact=True).click()
        page.get_by_role('button',name=re.compile('How to Play & Rules')).click()
        help_dialog=page.get_by_role('dialog',name='How to Play & Rules',exact=True)
        expect(help_dialog.get_by_role('button',name='Guess',exact=True)).to_have_attribute('aria-pressed','true')
        help_dialog.get_by_role('button',name='1 vs 1',exact=True).click()
        expect(help_dialog.get_by_text('Take turns asking about your opponent’s card.',exact=True)).to_be_visible()
        help_dialog.get_by_role('button',name='Imposter',exact=True).click()
        expect(help_dialog.get_by_text('Vote for the imposter, then allow their final guess.',exact=True)).to_be_visible()
        note('help-tabs-with-large-text')
        check_layout(page,'large-text-help'); screenshot(page,'large-text-help')
        page.keyboard.press('Escape')
        context.close()
        # Point feedback matches the actual bank, with and without a penalty.
        context=browser.new_context(viewport={'width':360,'height':640},reduced_motion='reduce')
        page=new_page(context); start(page,deterministic=True)
        page.get_by_role('button',name='Guess',exact=True).click()
        page.get_by_role('button',name=re.compile('Additional Options')).click()
        page.get_by_role('switch',name='Emergency Rush Timer (45s)',exact=True).click()
        page.get_by_role('button',name='Start Round',exact=True).click()
        found_correct=False
        for candidate in range(5):
            page.get_by_role('button',name=re.compile('Next clue')).click()
            expect(page.get_by_text('30 pts',exact=True)).to_be_visible()
            before=int(page.get_by_label('Total score',exact=True).inner_text().strip())
            page.get_by_role('button',name=re.compile(r'^[A-E]\s')).nth(candidate).click()
            expect(page.get_by_role('button',name='Case Flashcard',exact=True)).to_be_visible()
            after=int(page.get_by_label('Total score',exact=True).inner_text().strip())
            if after > before:
                assert after-before == 30
                expect(page.get_by_text('Correct diagnosis (+30)',exact=True)).to_be_visible()
                screenshot(page,'solo-correct-30'); found_correct=True; break
            assert after-before == -10
            page.get_by_role('button',name='Next Case ➔',exact=True).click()
        assert found_correct, 'Did not reach a correct second-clue diagnosis'
        note('actual-round-reward')
        page.get_by_role('button',name='Case Flashcard',exact=True).click()
        expect(page.get_by_role('dialog',name='Case review',exact=True)).to_be_visible()
        check_layout(page,'solo-case-review'); screenshot(page,'solo-case-review')
        page.keyboard.press('Escape')
        page.get_by_role('button',name='Next Case ➔',exact=True).click()
        before=int(page.get_by_label('Total score',exact=True).inner_text().strip())
        page.get_by_role('button',name='Give up (-20 pts)',exact=True).click()
        expect(page.get_by_text('Gave up (-20)',exact=True)).to_be_visible()
        assert before-int(page.get_by_label('Total score',exact=True).inner_text().strip()) == 20
        note('actual-giveup-penalty')
        page.get_by_role('button',name='Home',exact=True).click()
        expect(page.get_by_role('button',name='Guess',exact=True)).to_be_visible()
        assert page.get_by_label('Total score',exact=True).inner_text().strip() == str(before-20)
        note('hub-score-synchronizes')
        context.close()
        # The shared parent overlays really pause a timed solo round.
        context=browser.new_context(viewport={'width':360,'height':640},reduced_motion='reduce')
        page=new_page(context); start(page)
        page.get_by_role('button',name='Guess',exact=True).click()
        page.get_by_role('button',name='Start Round',exact=True).click()
        page.get_by_role('button',name='More options',exact=True).click()
        timer=page.get_by_text(re.compile(r'^\d+s$')).first
        paused=timer.inner_text()
        page.wait_for_timeout(2100)
        assert timer.inner_text()==paused
        page.keyboard.press('Escape')
        note('options-pause-solo-timer')
        context.close()
        context=browser.new_context(viewport={'width':360,'height':640},reduced_motion='reduce')
        page=new_page(context); start(page)
        choose_local(page)
        check_layout(page,'party-roster')
        page.get_by_role('button',name='Change avatar for Doctor 1',exact=True).click()
        check_layout(page,'avatar-picker'); screenshot(page,'avatar-picker')
        page.get_by_role('button',name='Avatar 1',exact=True).click()
        reveal_cards(page,3)
        expect(page.get_by_role('heading',name='Discussion',exact=True)).to_be_visible()
        check_layout(page,'party-discussion'); screenshot(page,'party-discussion')
        page.get_by_role('button',name='Start voting ➔',exact=True).click()
        for i in range(1,4):
            page.get_by_role('button',name=f'Doctor {i}',exact=True).click()
            page.get_by_role('button',name=f'I am Doctor {i} — vote',exact=True).click()
            target='Doctor 2' if i==1 else 'Doctor 1'
            page.get_by_role('button',name=target,exact=True).click()
            check_layout(page,f'party-vote-{i}')
            page.get_by_role('button',name='Confirm vote',exact=True).click()
        page.get_by_role('button',name='Imposter final guess',exact=True).click()
        expect(page.get_by_role('heading',name='Last chance',exact=True)).to_be_visible()
        check_layout(page,'party-final-guess')
        page.get_by_role('button',name="Skip (Don't know the word) ➔",exact=True).click()
        expect(page.get_by_role('heading',name='Results',exact=True)).to_be_visible()
        check_layout(page,'party-results'); screenshot(page,'party-results')
        context.close()
        context=browser.new_context(viewport={'width':320,'height':568},reduced_motion='reduce')
        page=new_page(context); start(page)
        page.get_by_role('button',name='Dr. Imposter',exact=True).click()
        page.get_by_role('button',name=re.compile(r'^Clinical images')).click()
        page.get_by_role('button',name="Let's go",exact=True).click()
        page.get_by_role('button',name='Deal the cards',exact=True).click()
        for index in range(3):
            expect(page.locator('main img')).to_have_count(0)
            page.get_by_role('button',name='Reveal my card',exact=True).click()
            check_layout(page,f'image-card-{index}')
            if page.locator('main img').count():
                expect(page.locator('main img')).to_be_visible()
                page.wait_for_function("document.querySelector('main img')?.naturalWidth > 0")
                screenshot(page,'clinical-image-card')
            page.get_by_role('button',name=re.compile(r'Hide card & pass phone|Start Discussion')).click()
        note('clinical-image-privacy')
        context.close()
        for battle in [False,True]:
            context=browser.new_context(viewport={'width':320,'height':568},reduced_motion='reduce')
            page=new_page(context); start(page)
            page.get_by_role('button',name='1 vs 1 Battle' if battle else 'Dr. Imposter',exact=True).click()
            page.get_by_role('button',name=re.compile(r'^Online duel|^Online room')).click()
            page.get_by_role('textbox',name='Your name',exact=True).fill('Test Doctor')
            page.get_by_role('button',name='Create',exact=True).click()
            if battle:
                expect(page.get_by_role('button',name='Increase players',exact=True)).to_have_count(0)
                expect(page.get_by_text('2 players',exact=True)).to_be_visible()
            else:
                expect(page.locator('output')).to_have_text('4')
                page.get_by_role('button',name='Decrease players',exact=True).click()
                expect(page.locator('output')).to_have_text('3')
                expect(page.get_by_role('button',name='Decrease players',exact=True)).to_be_disabled()
            check_layout(page,f'room-create-{battle}'); screenshot(page,f'room-create-{battle}')
            page.get_by_role('button',name='Back',exact=True).click()
            page.get_by_role('button',name='Join Code',exact=True).click()
            page.get_by_role('textbox',name='Room code',exact=True).fill('DRIMPZ')
            check_layout(page,f'room-join-{battle}'); screenshot(page,f'room-join-{battle}')
            context.close()
        # Secondary controls remain reachable with short landscape height.
        context=browser.new_context(viewport={'width':320,'height':568},reduced_motion='reduce')
        page=new_page(context); start(page)
        page.get_by_role('button',name='Guess',exact=True).click()
        page.get_by_role('button',name=re.compile(r'^All specialties')).click()
        check_layout(page,'specialty-picker'); screenshot(page,'specialty-picker')
        page.get_by_role('button',name=re.compile('Advanced custom filter')).click()
        page.get_by_role('button',name='Balanced mix',exact=True).click()
        check_layout(page,'advanced-filter'); screenshot(page,'advanced-filter')
        page.set_viewport_size({'width':740,'height':360})
        expect(page.get_by_role('button',name='Apply filter',exact=True)).to_be_in_viewport()
        check_layout(page,'advanced-filter-landscape'); screenshot(page,'advanced-filter-landscape')
        page.get_by_role('button',name='Apply filter',exact=True).click()
        page.get_by_role('button',name='Start Round',exact=True).click()
        page.get_by_role('button',name='Lifelines',exact=True).click()
        check_layout(page,'lifelines-landscape'); screenshot(page,'lifelines-landscape')
        page.get_by_role('button',name='Eliminate 2',exact=True).click()
        expect(page.get_by_role('dialog',name='Lifelines',exact=True)).to_have_count(0)
        page.get_by_role('button',name='Exit game',exact=True).click()
        check_layout(page,'exit-confirm-landscape'); screenshot(page,'exit-confirm-landscape')
        page.get_by_role('button',name='Quit',exact=True).click()
        expect(page.get_by_role('button',name='Guess',exact=True)).to_be_visible()
        note('exit-returns-to-hub')
        context.close()
        # Standalone fixtures cover signed-in and sponsor UI without any real account.
        for lang in ['en','ar']:
            for view in ['profile','account','ad','error','nested','invite','outcome']:
                context=browser.new_context(viewport={'width':320,'height':568},reduced_motion='reduce')
                page=new_page(context)
                page.route(re.compile(r'https://(?:(?:firestore|identitytoolkit|securetoken)\.googleapis\.com|[^/]*firebaseio\.com)/'),lambda route: route.abort())
                page.goto(f'http://127.0.0.1:4000/scripts/mobile-ui-fixtures.html?view={view}&lang={lang}',wait_until='networkidle')
                if view=='profile':
                    page.get_by_role('button',name='طالب طب' if lang=='ar' else 'Student',exact=True).click()
                    page.get_by_role('button',name='سنة 2' if lang=='ar' else 'Year 2',exact=True).click()
                    page.get_by_role('button',name='اختر جامعتك' if lang=='ar' else 'Choose your university',exact=True).click()
                    page.get_by_role('searchbox',name='بحث الجامعات' if lang=='ar' else 'Search universities',exact=True).fill('Cairo')
                    page.get_by_role('button',name='جامعة القاهرة (قصر العيني)' if lang=='ar' else 'Cairo University (Kasr Al-Ainy)',exact=True).click()
                    check_layout(page,f'profile-{lang}'); screenshot(page,f'profile-{lang}')
                    save=page.get_by_role('button',name='يلا نبدأ' if lang=='ar' else "Let's start",exact=True)
                    expect(save).to_be_in_viewport(); save.click()
                    expect(page.get_by_role('status')).to_have_text('تم الحفظ محليًا' if lang=='ar' else 'Saved locally')
                elif view=='account':
                    page.get_by_role('textbox',name='الاسم' if lang=='ar' else 'Display name',exact=True).fill('Updated Doctor')
                    page.get_by_text('الملف الطبي' if lang=='ar' else 'Medical profile',exact=True).click()
                    expect(page.get_by_text('Cairo University (Kasr Al-Ainy)',exact=True)).to_be_visible()
                    check_layout(page,f'account-{lang}'); screenshot(page,f'account-{lang}')
                    page.get_by_role('button',name='حفظ الاسم' if lang=='ar' else 'Save name',exact=True).click()
                    expect(page.get_by_role('status')).to_be_visible()
                elif view=='ad':
                    skip=page.get_by_role('button',name='تخطي' if lang=='ar' else 'Skip',exact=True)
                    expect(skip).to_be_visible(timeout=10000)
                    check_layout(page,f'ad-{lang}'); screenshot(page,f'ad-{lang}')
                    skip.click(); expect(page.get_by_role('status')).to_be_visible()
                elif view=='error':
                    colors=page.get_by_role('button',name='إعادة المحاولة' if lang=='ar' else 'Retry',exact=True).evaluate('(el)=>[getComputedStyle(el).color,getComputedStyle(el).backgroundColor]')
                    assert colors == ['rgb(17, 17, 17)','rgb(255, 255, 255)'], colors
                    check_layout(page,f'error-{lang}'); screenshot(page,f'error-{lang}')
                    page.get_by_role('button',name='إعادة المحاولة' if lang=='ar' else 'Retry',exact=True).click()
                    expect(page.get_by_role('status')).to_be_visible()
                elif view=='invite':
                    check_layout(page,f'invite-{lang}'); screenshot(page,f'invite-{lang}')
                    page.get_by_text('مشاركة الدعوة' if lang=='ar' else 'Share invitation',exact=True).click()
                    expect(page.get_by_role('button',name='واتساب' if lang=='ar' else 'WhatsApp',exact=True)).to_be_visible()
                    check_layout(page,f'invite-expanded-{lang}')
                elif view=='outcome':
                    expect(page.get_by_role('heading',name='تعادل · كلا التشخيصين صحيحان' if lang=='ar' else 'Tie · both diagnoses correct',exact=True)).to_be_visible()
                    check_layout(page,f'outcome-{lang}'); screenshot(page,f'outcome-{lang}')
                else:
                    page.get_by_role('button',name='Open nested sheet',exact=True).click()
                    expect(page.get_by_role('dialog',name='Inner sheet',exact=True)).to_be_visible()
                    expect(page.get_by_role('dialog',name='Outer sheet',exact=True)).to_have_count(0)
                    page.keyboard.press('Escape')
                    expect(page.get_by_role('dialog',name='Outer sheet',exact=True)).to_be_visible()
                    assert page.locator('#root').evaluate('(el)=>el.inert')
                    page.keyboard.press('Escape'); assert not page.locator('#root').evaluate('(el)=>el.inert')
                    note('nested-modal-stack-'+lang)
                context.close()
        assert not runtime_errors, runtime_errors
        note('no-uncaught-runtime-errors')
    finally:
        if sys.exc_info()[0] is not None:
            try:
                screenshot(page,'last-failure')
                (OUT/'last-failure.txt').write_text(page.locator('body').inner_text(),encoding='utf-8')
            except Exception: pass
        (OUT/'checks.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
        assert source_hashes == {str(path.relative_to(ROOT)):hashlib.sha256(path.read_bytes()).hexdigest() for path in sources}, 'Source changed during verification'
        manifest = {'completed_utc':datetime.now(timezone.utc).isoformat(), 'passed':len(results), 'completed':sys.exc_info()[0] is None,
          'browser':browser.version, 'sources':source_hashes, 'build_index_sha256':build_hash}
        (OUT/'verification.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
        browser.close()
print('Completed',len(results),'checks',flush=True)
