import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MotionConfig } from 'motion/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user"><App /></MotionConfig>
  </StrictMode>,
);

// Register Service Worker for offline PWA support
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Re-registering on every reload forces an unnecessary worker download.
    // Existing installations work from cache; manual sync checks for updates.
    navigator.serviceWorker.getRegistration().then(existing => {
      if (existing) return existing;
      if (!navigator.onLine) return undefined;
      return navigator.serviceWorker.register('sw.js');
    })
      .then((registration) => {
        if (registration) console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

