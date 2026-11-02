// Isolated component fixtures, excluded from the normal application build.
// All mutations here are in-memory; the regression browser blocks cloud traffic.
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import { OnboardingView } from '../src/components/views/OnboardingView';
import { InterstitialAdModal } from '../src/components/ads/InterstitialAdModal';
import { Sheet, BigBtn } from '../src/components/game/ui';
import { GameLoadBoundary } from '../src/components/game/GameLoadBoundary';
import { RoomInvite } from '../src/components/game/RoomInvite';
import { RoundOutcome } from '../src/components/game/RoundOutcome';
import { AccountDetails } from '../src/components/game/AccountDetails';
import type { AppUser } from '../src/types';
import type { AdCampaign } from '../src/types/ads';
import '../src/index.css';

function Preview() {
  const query = new URLSearchParams(location.search);
  const language = query.get('lang') === 'ar' ? 'Arabic' : 'English';
  const ar = language === 'Arabic';
  document.documentElement.lang = ar ? 'ar' : 'en';
  document.documentElement.dir = ar ? 'rtl' : 'ltr';
  const [saved, setSaved] = useState(false);
  const [open, setOpen] = useState(true);
  const [nested, setNested] = useState(false);
  const [name, setName] = useState('Test Doctor');
  const user = { id: 'local-fixture', email: 'fixture@example.invalid', displayName: 'Test Doctor' } as AppUser;
  const ad: AdCampaign = { id: 'local-fixture', title: ar ? 'عنوان الإعلان التجريبي' : 'Preview advertisement', sponsorName: ar ? 'الراعي' : 'Sponsor',
    mediaType: 'image', mediaUrl: '/logo.jpg', ctaLink: 'https://example.invalid', ctaText: ar ? 'معرفة المزيد' : 'Learn more', placement: 'pre_round',
    durationSeconds: 1, frequencyGames: 1, priority: 1, isActive: true, impressionsCount: 0, clicksCount: 0, createdAt: 0 };
  if (saved) return <p role="status">{ar ? 'تم الحفظ محليًا' : 'Saved locally'}</p>;
  return <div className="game-shell h-[100dvh] flex flex-col text-white bg-ink" dir={ar ? 'rtl' : 'ltr'}>
    {query.get('view') === 'profile' ? <OnboardingView language={language} appUser={user} onLogout={() => setSaved(true)} onSave={async () => { setSaved(true); }} /> :
      query.get('view') === 'ad' ? <InterstitialAdModal ad={ad} language={language} isOpen={open} onClose={() => { setOpen(false); setSaved(true); }} headerTitle={ar ? 'إعلان' : 'Advertisement'} skipButtonText={ar ? 'تخطي' : 'Skip'} /> :
      query.get('view') === 'account' ? <Sheet open onClose={() => setSaved(true)} title={ar ? 'حسابي' : 'My Account'} dir={ar ? 'rtl' : 'ltr'}><AccountDetails user={{...user,detectiveScore:150,academicLevel:'Student',academicYear:'Year 2',university:'Cairo University (Kasr Al-Ainy)'}} language={language} name={name} onNameChange={setName} saving={false} saved={false} onSave={() => setSaved(true)} onEditProfile={() => setSaved(true)} /></Sheet> :
      query.get('view') === 'error' ? <GameLoadBoundary language={language} onRetry={() => setSaved(true)} onHome={() => setSaved(true)}><Broken /></GameLoadBoundary> :
      query.get('view') === 'invite' ? <div className="p-4"><RoomInvite code="DRIMPZ" language={language} onError={() => setSaved(true)} /></div> :
      query.get('view') === 'outcome' ? <div className="p-4"><RoundOutcome players={[{id:'1',name:'Ahmed',score:100},{id:'2',name:'Sara',score:50}]} initialScores={{'1':50,'2':0}} duel language={language} /></div> :
      <>
        <BigBtn onClick={() => setOpen(true)}>Open sheet</BigBtn>
        <Sheet open={open} onClose={() => setOpen(false)} title="Outer sheet"><BigBtn onClick={() => setNested(true)}>Open nested sheet</BigBtn></Sheet>
        <Sheet open={nested} onClose={() => setNested(false)} title="Inner sheet"><BigBtn onClick={() => setNested(false)}>Done</BigBtn></Sheet>
      </>}
  </div>;
}
function Broken(): React.ReactNode { throw new Error('Expected local fixture error'); }
createRoot(document.getElementById('root')!).render(<MotionConfig reducedMotion="user"><Preview /></MotionConfig>);
