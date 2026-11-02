import React, { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalStack: { token: symbol; element: HTMLDivElement | null }[] = [];
let previousOverflow = '';
let previousInert = false;
const focusable = 'button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),a[href],[tabindex]:not([tabindex="-1"])';

/** One focus/scroll contract for sheets, privacy gates, confirmations and ads. */
export function ModalFrame({ open, onClose, title, children, className = '', dir, dismissable = true }: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  dir?: 'rtl' | 'ltr';
  dismissable?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const close = useRef(onClose);
  const mayDismiss = useRef(dismissable);
  const id = useId();
  close.current = onClose;
  mayDismiss.current = dismissable;
  useEffect(() => {
    if (!open) return;
    const token = Symbol('modal');
    const trigger = document.activeElement as HTMLElement | null;
    const root = document.getElementById('root');
    if (!modalStack.length) {
      previousOverflow = document.body.style.overflow;
      previousInert = root?.inert || false;
      document.body.style.overflow = 'hidden';
      if (root) root.inert = true;
    }
    const frame = ref.current;
    const previousModal = modalStack.at(-1)?.element;
    if (previousModal) { previousModal.inert = true; previousModal.setAttribute('aria-hidden', 'true'); }
    modalStack.push({ token, element: frame });
    modalStack.forEach((entry, index) => { if (entry.element) entry.element.style.zIndex = String(200 + index * 10); });
    if (frame) { frame.inert = false; frame.removeAttribute('aria-hidden'); }
    const focusFirst = () => {
      const target = frame?.querySelector<HTMLElement>('[data-autofocus]') || frame;
      target?.focus({ preventScroll: true });
    };
    focusFirst();
    const onKey = (event: KeyboardEvent) => {
      if (modalStack.at(-1)?.token !== token) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        if (mayDismiss.current) close.current();
      }
      if (event.key !== 'Tab' || !frame) return;
      const items = [...frame.querySelectorAll<HTMLElement>(focusable)].filter(el => el.getClientRects().length > 0 && !el.closest('[inert]'));
      const first = items[0];
      const last = items.at(-1);
      if (!first) { event.preventDefault(); frame.focus(); return; }
      if (event.shiftKey && (document.activeElement === first || document.activeElement === frame)) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === frame || !frame.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    };
    const onFocus = (event: FocusEvent) => {
      if (modalStack.at(-1)?.token === token && frame && !frame.contains(event.target as Node)) focusFirst();
    };
    document.addEventListener('keydown', onKey, true);
    document.addEventListener('focusin', onFocus);
    return () => {
      document.removeEventListener('keydown', onKey, true);
      document.removeEventListener('focusin', onFocus);
      const index = modalStack.findIndex(entry => entry.token === token);
      if (index !== -1) modalStack.splice(index, 1);
      modalStack.forEach((entry, index) => {
        if (entry.element) {
          entry.element.inert = index !== modalStack.length - 1;
          if (entry.element.inert) entry.element.setAttribute('aria-hidden', 'true'); else entry.element.removeAttribute('aria-hidden');
          entry.element.style.zIndex = String(200 + index * 10);
        }
      });
      if (!modalStack.length) {
        document.body.style.overflow = previousOverflow;
        if (root) root.inert = previousInert;
      }
      if (trigger?.isConnected && !trigger.closest('[inert]')) trigger.focus({ preventScroll: true });
    };
  }, [open]);
  if (!open) return null;
  return createPortal(
    <div ref={ref} role="dialog" aria-modal="true" aria-labelledby={id} tabIndex={-1} dir={dir}
      className={`game-modal fixed inset-0 z-[200] outline-none ${className}`}>
      <span id={id} className="sr-only">{title}</span>
      {children}
    </div>, document.body,
  );
}
