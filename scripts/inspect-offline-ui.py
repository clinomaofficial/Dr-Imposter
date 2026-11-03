from playwright.sync_api import sync_playwright
from pathlib import Path
import sys
sys.stdout.reconfigure(encoding='utf-8')
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True)
    page=browser.new_page(viewport={'width':420,'height':900})
    page.goto('http://127.0.0.1:4011/',wait_until='domcontentloaded',timeout=120000)
    page.wait_for_load_state('networkidle',timeout=120000)
    page.wait_for_timeout(2000)
    print(page.locator('body').inner_text())
    print('BUTTONS',page.get_by_role('button').all_text_contents())
    page.get_by_role('button',name='Guess',exact=True).click()
    page.wait_for_timeout(1500)
    print('GUESS',page.locator('body').inner_text())
    Path('reports/offline-first').mkdir(parents=True,exist_ok=True)
    page.screenshot(path='reports/offline-first/home.png')
    browser.close()
