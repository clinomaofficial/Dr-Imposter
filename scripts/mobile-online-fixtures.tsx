import React from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import { MedicalCupView } from '../src/components/views/MedicalCupView';
import '../src/index.css';
const query=new URLSearchParams(location.search);
const ar=query.get('lang')==='ar';
document.documentElement.lang=ar?'ar':'en';
document.documentElement.dir=ar?'rtl':'ltr';
createRoot(document.getElementById('root')!).render(<MotionConfig reducedMotion="user"><main className="game-shell bg-ink text-white h-[100dvh]">
  <MedicalCupView language={ar?'Arabic':'English'} initialAction="online" gameModeLock={query.get('mode')==='battle'?'BATTLE_1V1':'DR_IMPOSTER'} appUser={null} onSetView={()=>{}} onGoBack={()=>{}} />
</main></MotionConfig>);
