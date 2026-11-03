import React from 'react';
import { Check, Crown, Trophy } from 'lucide-react';
import type { AppUser, Language } from '../../types';
import { BigBtn, Disclosure } from './ui';

export function AccountDetails({ user, language, name, onNameChange, saving, saved, onSave, onEditProfile, onAdmin }: {
  user: AppUser; language: Language; name: string; onNameChange: (value: string) => void;
  saving: boolean; saved: boolean; onSave: () => void; onEditProfile: () => void; onAdmin?: () => void;
}) {
  const ar = language === 'Arabic';
  const t = (a: string, e: string) => ar ? a : e;
  const levels: Record<string, string> = { Student: t('طالب طب', 'Student'), Intern: t('امتياز', 'Intern'), Resident: t('مقيم', 'Resident'), Specialist: t('أخصائي', 'Specialist'), GP: t('ممارس عام', 'GP') };
  return <div className="space-y-4">
    <div className="space-y-2">
      <label htmlFor="account-display-name" className="block text-sm font-bold text-white/80">{t('الاسم', 'Display name')}</label>
      <div className="flex gap-2">
        <input id="account-display-name" type="text" autoComplete="nickname" value={name} onChange={e => onNameChange(e.target.value)}
          placeholder={t('اكتب اسمك', 'Your name')}
          className="flex-1 min-w-0 min-h-12 bg-ink-3 border border-ink-4 rounded-2xl px-4 text-base font-bold text-white placeholder-white/60 outline-none focus:border-mint" />
        <button type="button" aria-label={t('حفظ الاسم', 'Save name')} onClick={onSave}
          disabled={saving || !name.trim() || name.trim() === (user.displayName || user.email.split('@')[0])}
          className="min-h-12 min-w-12 shrink-0 px-4 rounded-2xl bg-mint text-emerald-950 font-bold disabled:opacity-40">
          {saving ? <span role="status">{t('جارٍ الحفظ…', 'Saving…')}</span> : <Check aria-hidden size={20} />}
        </button>
      </div>
      {saved && <p role="status" className="text-mint text-sm">{t('تم حفظ الاسم', 'Name saved')}</p>}
    </div>
    <div className="panel p-4 flex items-center gap-3">
      <Trophy aria-hidden className="text-gold shrink-0" size={24} />
      <span className="text-sm text-white/80 flex-1">{t('إجمالي النقاط', 'Total score')}</span>
      <strong className="text-2xl text-gold">{user.detectiveScore ?? 0}</strong>
    </div>
    <Disclosure title={t('الملف الطبي', 'Medical profile')}>
      <dl className="space-y-3 text-sm">
        <Detail label={t('المستوى', 'Level')} value={levels[user.academicLevel || ''] || user.academicLevel || '—'} />
        {user.academicLevel === 'Student' && <Detail label={t('السنة', 'Year')} value={user.academicYear?.replace('Year', t('سنة', 'Year')) || '—'} />}
        <Detail label={t('الجامعة', 'University')} value={user.university || '—'} />
      </dl>
      <BigBtn variant="dark" onClick={onEditProfile}>{t('تعديل الملف', 'Edit profile')}</BigBtn>
    </Disclosure>
    <Disclosure title={t('تفاصيل الحساب', 'Account details')}>
      <dl className="space-y-3 text-sm">
        <Detail label={t('نوع الحساب', 'Account type')} value={user.role === 'super_admin' ? t('مشرف عام', 'Super Admin') : t('لاعب', 'Player')} />
        <Detail label={t('اللعب', 'Access')} value={t('مجاني بدون اشتراك', 'Free, no subscription')} />
      </dl>
    </Disclosure>
    {onAdmin && <BigBtn variant="gold" onClick={onAdmin}><Crown aria-hidden size={18} />{t('إدارة المنصة', 'Manage platform')}</BigBtn>}
  </div>;
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-white/70">{label}</dt><dd className="font-bold break-words mt-1">{value}</dd></div>;
}
