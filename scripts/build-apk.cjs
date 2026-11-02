const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const androidDir = path.join(rootDir, 'android');
const jdkPath = 'D:\\Programs\\jdk-21';
const sdkPath = 'D:\\Programs\\android-sdk';

// Setup environment for Gradle & Capacitor
const env = {
  ...process.env,
  JAVA_HOME: jdkPath,
  ANDROID_HOME: sdkPath,
  PATH: `${path.join(jdkPath, 'bin')};${path.join(sdkPath, 'platform-tools')};${process.env.PATH || ''}`
};

function runStep(name, command, cwd = rootDir) {
  console.log(`\n========================================`);
  console.log(`▶ [${name}]`);
  console.log(`  Running: ${command}`);
  console.log(`========================================`);
  execSync(command, { cwd, env, stdio: 'inherit' });
}

function buildApk() {
  const startTime = Date.now();
  console.log(`\n======================================================`);
  console.log(`🚀 Starting Clinoma Games APK Build & Auto-Sync...`);
  console.log(`📅 ${new Date().toLocaleString()}`);
  console.log(`======================================================`);

  // Step 1: Vite production build
  runStep('1/4 Vite Web Build', 'npm run build', rootDir);

  // Step 2: Capacitor Sync
  runStep('2/4 Capacitor Sync', 'npx cap sync android', rootDir);

  // Step 3: Gradle Assemble Release (shrunk, minified, debug-signed)
  const gradlewCmd = process.platform === 'win32' ? 'gradlew.bat assembleRelease --no-daemon' : './gradlew assembleRelease --no-daemon';
  runStep('3/4 Gradle Assemble Optimized APK', gradlewCmd, androidDir);

  // Step 4: Copy APK to root folder
  console.log(`\n========================================`);
  console.log(`▶ [4/4 Copy APK to Root Folder]`);
  console.log(`========================================`);

  const releaseApk = path.join(androidDir, 'app', 'build', 'outputs', 'apk', 'release', 'app-release.apk');
  const debugApk = path.join(androidDir, 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');
  const builtApkPath = fs.existsSync(releaseApk) ? releaseApk : debugApk;
  const targetApkPath = path.join(rootDir, 'Clinoma-Games.apk');

  if (!fs.existsSync(builtApkPath)) {
    throw new Error(`Build failed: Could not find built APK at: ${builtApkPath}`);
  }

  fs.copyFileSync(builtApkPath, targetApkPath);
  const now = new Date();
  try {
    fs.utimesSync(targetApkPath, now, now);
  } catch (e) {
    // ignore
  }
  const stats = fs.statSync(targetApkPath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  const totalSec = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log(`\n🎉 SUCCESS! Ultra-Optimized APK Generated!`);
  console.log(`📍 File Location : ${targetApkPath}`);
  console.log(`📦 File Size     : ${sizeMB} MB`);
  console.log(`⏱️ Total Time    : ${totalSec}s`);
  console.log(`📅 Timestamp     : ${new Date().toLocaleString()}`);
  console.log(`======================================================\n`);
  return targetApkPath;
}

if (require.main === module) {
  try {
    buildApk();
  } catch (err) {
    console.error(`\n❌ APK Build Error:`, err.message);
    process.exit(1);
  }
}

module.exports = { buildApk };
