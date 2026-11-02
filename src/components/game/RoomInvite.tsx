import React, { useState } from 'react';
import { Copy, Share2 } from 'lucide-react';
import type { Language } from '../../types';
import { roomInvitation } from '../../lib/mobileGame';
import { BigBtn, Disclosure } from './ui';

export function RoomInvite({ code, language, onError }: { code: string; language: Language; onError: (message: string) => void }) {
  const [copied, setCopied] = useState<'code' | 'invite' | null>(null);
  const ar = language === 'Arabic';
  const t = (a: string, b: string) => ar ? a : b;
  const invitation = roomInvitation(code, ar, window.location.href);
  const copy = async (kind: 'code' | 'invite') => {
    try {
      await navigator.clipboard.writeText(kind === 'code' ? code : invitation);
      setCopied(kind);
    } catch {
      onError(t(`تعذر النسخ. شارك هذا الكود: ${code}`, `Could not copy. Share this code: ${code}`));
    }
  };
  return <section className="panel p-4 space-y-3 text-center">
    <p className="text-sm text-white/75">{t('كود الغرفة', 'Room code')}</p>
    <p className="font-display text-3xl font-bold tracking-[0.12em] select-all" dir="ltr">{code}</p>
    <BigBtn variant="dark" onClick={() => copy('code')}><Copy size={18} />{copied === 'code' ? t('تم نسخ الكود', 'Code copied') : t('نسخ الكود', 'Copy code')}</BigBtn>
    <Disclosure title={t('مشاركة الدعوة', 'Share invitation')}>
      <div className="space-y-2">
        <button type="button" onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(invitation)}`, '_blank', 'noopener,noreferrer')}
          className="w-full min-h-[48px] px-3 py-2 rounded-2xl border border-mint/30 bg-mint/10 text-mint font-bold flex items-center justify-center gap-2">
          <Share2 size={18} />{t('واتساب', 'WhatsApp')}
        </button>
        <button type="button" onClick={() => copy('invite')} className="w-full min-h-[48px] px-3 py-2 rounded-2xl bg-ink-3 border border-ink-4 font-bold">
          {copied === 'invite' ? t('تم نسخ الدعوة', 'Invitation copied') : t('نسخ الدعوة', 'Copy invitation')}
        </button>
      </div>
    </Disclosure>
  </section>;
}
