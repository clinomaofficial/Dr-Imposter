@echo off
title Clinoma Games - Build APK
echo ========================================================
echo   Clinoma Games - Building APK and Updating Folder
echo ========================================================

if exist "D:\antigravity\My Apps\node-portable\node-v20.18.0-win-x64" (
    set "PATH=D:\antigravity\My Apps\node-portable\node-v20.18.0-win-x64;%PATH%"
)

set "JAVA_HOME=D:\Programs\jdk-21"
set "ANDROID_HOME=D:\Programs\android-sdk"
set "PATH=D:\Programs\jdk-21\bin;D:\Programs\android-sdk\platform-tools;%PATH%"

cd /d "%~dp0"
node scripts\build-apk.cjs

echo.
pause
