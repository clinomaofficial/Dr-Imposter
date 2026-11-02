const fs = require('fs');
const path = require('path');
const { buildApk } = require('./build-apk.cjs');

const rootDir = path.resolve(__dirname, '..');
const watchDirs = [
  path.join(rootDir, 'src'),
  path.join(rootDir, 'public')
];
const watchFiles = [
  path.join(rootDir, 'index.html')
];

let buildInProgress = false;
let queuedBuild = false;
let debounceTimer = null;

function triggerBuild(triggerInfo) {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  debounceTimer = setTimeout(async () => {
    if (buildInProgress) {
      console.log(`⏳ Build in progress. Queued next build for after completion...`);
      queuedBuild = true;
      return;
    }

    buildInProgress = true;
    console.log(`\n🔔 Change detected (${triggerInfo}). Triggering APK rebuild...`);

    try {
      buildApk();
    } catch (err) {
      console.error(`❌ Build failed:`, err.message);
    } finally {
      buildInProgress = false;
      if (queuedBuild) {
        queuedBuild = false;
        triggerBuild('queued changes');
      }
    }
  }, 2500); // 2.5s debounce
}

console.log(`=============================================================`);
console.log(`👀 Clinoma Games Live APK Auto-Updater Started!`);
console.log(`📁 Watching: src/, public/, index.html`);
console.log(`⚡ Any file modification will automatically build and update:`);
console.log(`   ${path.join(rootDir, 'Clinoma-Games.apk')}`);
console.log(`=============================================================\n`);

// Watch directories
watchDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.watch(dir, { recursive: true }, (eventType, filename) => {
      if (filename) {
        // Ignore temporary or git files
        if (filename.includes('.git') || filename.includes('node_modules') || filename.endsWith('~')) return;
        triggerBuild(`${eventType}: ${filename}`);
      }
    });
  }
});

// Watch individual files
watchFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fs.watch(file, (eventType) => {
      triggerBuild(`${eventType}: ${path.basename(file)}`);
    });
  }
});

// Do initial build if APK does not exist
const targetApk = path.join(rootDir, 'Dr-Imposter.apk');
if (!fs.existsSync(targetApk)) {
  console.log(`📌 Dr-Imposter.apk not found. Running initial build now...`);
  triggerBuild('Initial Start');
}
