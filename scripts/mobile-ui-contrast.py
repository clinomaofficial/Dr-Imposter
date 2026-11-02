"""Check key mobile theme pairs, including all three button gradients.
This is a palette regression, not a WCAG certification for every rendered pixel.
"""
from pathlib import Path
import json,re
ROOT=Path(__file__).resolve().parents[1]
css=(ROOT/'src/index.css').read_text(encoding='utf-8')
def rgb(value): return tuple(int(value[i:i+2],16)/255 for i in (1,3,5))
def luminance(channels):
    return sum(c*k for c,k in zip([x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in channels],[.2126,.7152,.0722]))
def contrast(a,b):
    x,y=sorted([luminance(a),luminance(b)])
    return (y+.05)/(x+.05)
checks=[]
def check(name,foreground,background,alpha=1):
    f,b=rgb(foreground),rgb(background)
    blended=tuple(x*alpha+y*(1-alpha) for x,y in zip(f,b))
    ratio=contrast(blended,b)
    checks.append({'pair':name,'foreground':foreground,'background':background,'alpha':alpha,'ratio':round(ratio,2)})
    assert ratio>=4.5, checks[-1]
for kind in ['primary','coral','gold']:
    block=re.search(r'\.btn-game-'+kind+r'\s*\{([^}]+)',css)[1]
    stops=re.findall(r'#[0-9a-fA-F]{6}',re.search(r'background:([^;]+)',block)[1])
    color=re.search(r'\n\s*color:\s*(#[0-9a-fA-F]{6})',block)[1]
    for i in range(101):
        a,b=rgb(stops[0]),rgb(stops[-1]); t=i/100
        bg='#'+''.join(f'{round((x*(1-t)+y*t)*255):02x}' for x,y in zip(a,b))
        check(f'{kind} gradient {i}%',color,bg)
for bg in ['#071120','#0B1B30','#12283F','#1B3A57']:
    check('secondary text','#FFFFFF',bg,.7)
    check('placeholder','#FFFFFF',bg,.6)
for color in ['#2FE6A7','#FF5470','#FFC53D','#38BDF8','#A78BFA']:
    check('accent on panel',color,'#0B1B30')
check('retry','#111111','#FFFFFF')
out=ROOT/'.shots/mobile-2026-11-01/contrast.json'
out.parent.mkdir(parents=True,exist_ok=True)
out.write_text(json.dumps(checks,indent=2),encoding='utf-8')
print(f'{len(checks)} palette checks passed; minimum ratio {min(x["ratio"] for x in checks)}:1')
