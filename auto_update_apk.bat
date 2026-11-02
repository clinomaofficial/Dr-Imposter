@echo off
title Clinoma Games - Continuous Live APK Auto-Updater
echo ========================================================
echo   Clinoma Games - Continuous APK Auto-Updater
echo   Watching files for any modification...
echo ========================================================

if exist "D:\antigravity\My Apps\node-portable\node-v20.18.0-win-x64" (
    set "PATH=D:\antigravity\My Apps\node-portable\node-v20.18.0-win-x64;%PATH%"
)

set "JAVA_HOME=D:\Programs\jdk-21"
set "ANDROID_HOME=D:\Programs\android-sdk"
set "PATH=D:\Programs\jdk-21\bin;D:\Programs\android-sdk\platform-tools;%PATH%"

cd /d "%~dp0"
node scripts\watch-apk.cjs

echo.
pause
