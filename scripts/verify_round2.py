import os
import json
from playwright.sync_api import sync_playwright

out_dir = os.path.join(os.path.dirname(__file__), '..', '.shots', 'round2')
os.makedirs(out_dir, exist_ok=True)

viewports = [
    {'name': '320x568', 'width': 320, 'height': 568},
    {'name': '360x640', 'width': 360, 'height': 640},
    {'name': '390x844', 'width': 390, 'height': 844},
    {'name': 'landscape_844x390', 'width': 844, 'height': 390},
    {'name': 'desktop_1280x800', 'width': 1280, 'height': 800},
]

results = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    for lang in ['Arabic', 'English']:
        for vp in viewports:
            page = browser.new_page(viewport={'width': vp['width'], 'height': vp['height']})
            
            # Setup local storage before navigation
            page.add_init_script(f"""
                localStorage.setItem('app_language', '{lang}');
                localStorage.setItem('dr_imposter_missed_cases', JSON.stringify([
                    {{ id: 'asthma', count: 2, lastMissed: Date.now() }},
                    {{ id: 'appendicitis', count: 1, lastMissed: Date.now() }}
                ]));
            """)

            page.goto('http://127.0.0.1:3005', wait_until='domcontentloaded')
            page.wait_for_timeout(1600)  # wait for splash

            # Horizontal scroll check
            has_h_scroll = page.evaluate("""() => {
                return document.documentElement.scrollWidth > document.documentElement.clientWidth ||
                       document.body.scrollWidth > document.body.clientWidth;
            }""")

            shot_prefix = f"{lang.lower()}_{vp['name']}"
            page.screenshot(path=os.path.join(out_dir, f"{shot_prefix}_home.png"))

            results.append({
                'lang': lang,
                'viewport': vp['name'],
                'phase': 'HOME',
                'hasHScroll': has_h_scroll
            })

            # Click Solo card to enter SINGLE_SETUP
            solo_card = page.locator('button:has-text("اللعب الفردي"), button:has-text("Solo Challenge")').first
            if solo_card.is_visible():
                solo_card.click()
                page.wait_for_timeout(400)

                # Open Additional Options
                adv_btn = page.locator('button:has-text("خيارات إضافية"), button:has-text("Additional Options")').first
                if adv_btn.is_visible():
                    adv_btn.click()
                    page.wait_for_timeout(300)

                    # Toggle timer switch
                    timer_switch = page.locator('button[role="switch"]').first
                    if timer_switch.is_visible():
                        timer_switch.click()
                        page.wait_for_timeout(200)

                    # Toggle review switch
                    review_switch = page.locator('button[role="switch"]').nth(1)
                    if review_switch.is_visible():
                        review_switch.click()
                        page.wait_for_timeout(200)

                    if vp['name'] in ['320x568', '390x844']:
                        page.screenshot(path=os.path.join(out_dir, f"{shot_prefix}_solo_setup_open.png"))

                    # Close Additional Options to check collapsed summary chips
                    adv_btn.click()
                    page.wait_for_timeout(300)

                    if vp['name'] in ['320x568', '390x844']:
                        page.screenshot(path=os.path.join(out_dir, f"{shot_prefix}_solo_setup_collapsed_chips.png"))

                setup_h_scroll = page.evaluate("""() => {
                    return document.documentElement.scrollWidth > document.documentElement.clientWidth ||
                           document.body.scrollWidth > document.body.clientWidth;
                }""")

                results.append({
                    'lang': lang,
                    'viewport': vp['name'],
                    'phase': 'SOLO_SETUP',
                    'hasHScroll': setup_h_scroll
                })

                # Click Start Round
                start_btn = page.locator('button:has-text("ابدأ الجولة"), button:has-text("Start Round"), button:has-text("ابدأ المراجعة"), button:has-text("Start Review")').first
                if start_btn.is_visible():
                    start_btn.click()
                    page.wait_for_timeout(500)

                    playing_h_scroll = page.evaluate("""() => {
                        return document.documentElement.scrollWidth > document.documentElement.clientWidth ||
                               document.body.scrollWidth > document.body.clientWidth;
                    }""")

                    if vp['name'] in ['320x568', '390x844']:
                        page.screenshot(path=os.path.join(out_dir, f"{shot_prefix}_solo_playing.png"))

                    results.append({
                        'lang': lang,
                        'viewport': vp['name'],
                        'phase': 'SOLO_PLAYING',
                        'hasHScroll': playing_h_scroll
                    })

            page.close()

    # Image Challenge test
    img_page = browser.new_page(viewport={'width': 390, 'height': 844})
    img_page.add_init_script("localStorage.setItem('app_language', 'Arabic');")
    img_page.goto('http://127.0.0.1:3005', wait_until='domcontentloaded')
    img_page.wait_for_timeout(1600)
    img_card = img_page.locator('button:has-text("تحدي الصور الطبية")').first
    if img_card.is_visible():
        img_card.click()
        img_page.wait_for_timeout(500)
        img_page.screenshot(path=os.path.join(out_dir, 'image_challenge_playing.png'))
    img_page.close()

    browser.close()

print('AUTOMATED_RESULTS_START')
print(json.dumps(results, indent=2))
print('AUTOMATED_RESULTS_END')
