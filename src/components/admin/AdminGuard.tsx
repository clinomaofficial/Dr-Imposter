import React from 'react';
import { ShieldAlert, LogIn, ArrowLeft, Lock } from 'lucide-react';
import { isOwnerAdmin } from '../../lib/ownerAdminIdentity';
import { AppUser } from '../../types';

interface AdminGuardProps {
  user: AppUser | null;
  onGoogleLogin?: () => void;
  onBackToApp: () => void;
  children: React.ReactNode;
}

export function AdminGuard({ user, onGoogleLogin, onBackToApp, children }: AdminGuardProps) {
  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-ink-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-ink-2 border border-gold/30 rounded-3xl p-6 text-center shadow-2xl space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto text-gold">
            <Lock size={32} />
          </div>
          <div className="space-y-2">
            <h2 className="font-display font-bold text-2xl text-white">إدارة منصة د. إمبوستر</h2>
            <p className="text-white/60 text-sm">هذه البوابة مخصصة حصرياً لمالك المنصة المصرح له.</p>
          </div>
          {onGoogleLogin && (
            <button
              onClick={onGoogleLogin}
              className="w-full min-h-[48px] rounded-2xl bg-gold text-amber-950 font-display font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <LogIn size={18} />
              تسجيل الدخول بحساب الإدارة
            </button>
          )}
          <button
            onClick={onBackToApp}
            className="w-full min-h-[44px] rounded-2xl bg-ink-3 border border-ink-4 text-white/70 font-display font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <ArrowLeft size={16} />
            العودة للتطبيق
          </button>
        </div>
      </div>
    );
  }

  // Logged in but not authorized owner
  if (!isOwnerAdmin(user)) {
    return (
      <div className="min-h-screen bg-ink-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-ink-2 border border-coral/30 rounded-3xl p-6 text-center shadow-2xl space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-coral/15 border border-coral/30 flex items-center justify-center mx-auto text-coral">
            <ShieldAlert size={32} />
          </div>
          <div className="space-y-2">
            <h2 className="font-display font-bold text-2xl text-white">غير مصرح بالدخول</h2>
            <p className="text-white/60 text-sm">
              هذا الحساب لا يمتلك صلاحية الوصول إلى إدارة المنصة.
            </p>
          </div>
          <button
            onClick={onBackToApp}
            className="w-full min-h-[48px] rounded-2xl bg-ink-3 border border-ink-4 text-white font-display font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <ArrowLeft size={18} />
            العودة للعبة
          </button>
        </div>
      </div>
    );
  }

  // Authorized
  return <>{children}</>;
}
