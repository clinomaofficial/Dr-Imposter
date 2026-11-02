"""Build production or isolated UI fixtures with bounded, process-local memory.
Usage: python scripts/mobile-ui-build.py [fixtures|online]
"""
from pathlib import Path
import os,subprocess,sys
root=Path(__file__).resolve().parents[1]
args=['node','--max-old-space-size=512','--max-semi-space-size=2','node_modules/vite/bin/vite.js','build']
if len(sys.argv)>1 and sys.argv[1]=='fixtures':
    args+=['--config','scripts/mobile-ui-test.vite.ts','--outDir','.shots/mobile-build']
elif len(sys.argv)>1 and sys.argv[1]=='online':
    args+=['--config','scripts/mobile-online-test.vite.ts','--outDir','.shots/mobile-online-build']
elif len(sys.argv)>1:
    raise SystemExit('Expected fixtures, online, or no argument for production')
result=subprocess.run(args,cwd=root,env={**os.environ,'GOMAXPROCS':'2','GOMEMLIMIT':'128MiB'})
raise SystemExit(result.returncode)
