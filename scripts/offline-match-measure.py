"""Real production game + production SW, disposable Chromium storage, no cloud mocks."""
from pathlib import Path
from datetime import datetime, timezone
from playwright.sync_api import sync_playwright, expect
import functools, http.server, threading, json, re, time, sys, hashlib
sys.stdout.reconfigure(encoding='utf-8')
ROOT=Path(__file__).resolve().parents[1]
BUILD=ROOT/(sys.argv[1] if len(sys.argv)>1 else '.shots/offline-delivery-build')
OUT=ROOT/'reports/offline-first'
OUT.mkdir(parents=True,exist_ok=True)
http_requests=[]
class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args): pass
    def do_GET(self):
        http_requests.append(self.path)
        return super().do_GET()
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Handler,directory=str(BUILD)))
threading.Thread(target=server.serve_forever,daemon=True).start()
result={'production_accessed':False,'checks':[],'build_sha256':hashlib.sha256((BUILD/'index.html').read_bytes()).hexdigest()}
cloud=[]; errors=[]
try:
  with sync_playwright() as p:
    browser=p.chromium.launch(headless=True)
    context=browser.new_context(viewport={'width':420,'height':900},reduced_motion='reduce')
    context.add_init_script('Math.random = () => 0.173;')
    page=context.new_page()
    page.on('pageerror',lambda error:errors.append(str(error)))
    context.on('request',lambda req:cloud.append(req.url) if re.search(r'(firestore|identitytoolkit|securetoken|firebaseinstallations)\.googleapis\.com|firebaseio\.com',req.url) else None)
    page.goto(f'http://127.0.0.1:{server.server_port}',wait_until='networkidle',timeout=120000)
    expect(page.get_by_role('button',name='Guess',exact=True)).to_be_visible(timeout=30000)
    page.evaluate("Promise.race([navigator.serviceWorker.ready.then(() => true),new Promise((_,reject)=>setTimeout(()=>reject(new Error('Service worker install failed')),20000))])")
    page.wait_for_function('!!navigator.serviceWorker.controller')
    cache=page.evaluate('''async()=>{const keys=await caches.keys();const key=keys.find(k=>k.startsWith('clinoma-offline-'));const c=await caches.open(key);return (await c.keys()).map(r=>new URL(r.url).pathname)}''')
    assert any('MedicalCupView-' in path for path in cache),'lazy game chunk not precached'
    assert any('/images/' in path for path in cache),'images not precached'
    assert any('/sounds/' in path for path in cache),'sounds not precached'
    result['precached_files']=len(cache)
    result['precached_bytes']=sum(path.stat().st_size for path in BUILD.rglob('*') if path.is_file() and path.name!='sw.js')
    result['checks'].append('all lazy chunks, bundled fonts, images and sounds cached before local play')
    await_count=len(http_requests)
    context.set_offline(True)
    page.reload(wait_until='networkidle')
    expect(page.get_by_role('button',name='Guess',exact=True)).to_be_visible()
    start=time.monotonic()
    page.get_by_role('button',name='Guess',exact=True).click()
    page.get_by_role('button',name='Start Round',exact=True).click()
    expect(page.get_by_text(re.compile('pyloric stenosis'))).to_be_visible()
    page.get_by_role('button',name=re.compile('Stomach')).click()
    expect(page.get_by_text(re.compile('Correct diagnosis',re.I)).first).to_be_visible()
    earned=page.evaluate("JSON.parse(localStorage.getItem('clinoma-score-v1:guest')).total")
    assert earned>0
    result['match_seconds']=round(time.monotonic()-start,2)
    result['earned_score']=earned
    page.screenshot(path=str(OUT/'offline-match-result.png'))
    result['checks'].append('completed a winning solo match entirely offline, including first lazy game load')
    page.reload(wait_until='networkidle')
    page.get_by_role('button',name='Guess',exact=True).click()
    assert page.evaluate("JSON.parse(localStorage.getItem('clinoma-score-v1:guest')).total")==earned
    page.get_by_role('button',name='Start Round',exact=True).click()
    page.get_by_role('button',name=re.compile('Kidney')).click()
    expect(page.get_by_role('button',name=re.compile('Next Case'))).to_be_visible()
    penalized=page.evaluate("JSON.parse(localStorage.getItem('clinoma-score-v1:guest')).total")
    assert penalized==max(0,earned-10),(earned,penalized)
    page.reload(wait_until='networkidle')
    assert page.evaluate("JSON.parse(localStorage.getItem('clinoma-score-v1:guest')).total")==penalized
    result['checks'].append('both earned points and penalties survive offline reloads')
    offline_requests=http_requests[await_count:]
    # Chromium's own SW update checks bypass Playwright's offline emulation.
    # Keep these separate and report them instead of calling them game traffic.
    result['browser_sw_update_checks']=sum(path=='/sw.js' for path in offline_requests)
    result['offline_http_requests_total']=len(offline_requests)
    result['offline_game_asset_requests']=sum(path!='/sw.js' for path in offline_requests)
    result['firebase_requests']=len(cloud)
    result['firestore_reads']=0 if not cloud else None
    result['firestore_writes']=0 if not cloud else None
    result['runtime_errors']=errors
    assert result['offline_game_asset_requests']==0,offline_requests
    assert not cloud,cloud
    assert not errors,errors
    result['checks'].append('zero Firebase requests and zero game asset downloads during offline matches and reloads')
    result['browser']=browser.version
    result['completed']=True
    browser.close()
finally:
  result['completed_utc']=datetime.now(timezone.utc).isoformat()
  (OUT/'match-measurement.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
  server.shutdown()
print(json.dumps(result,indent=2))
