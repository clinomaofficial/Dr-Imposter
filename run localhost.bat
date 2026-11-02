@echo off
echo Starting Local Host Development Server for Dr Imposter...
if exist "D:\antigravity\My Apps\node-portable\node-v20.18.0-win-x64" (
    set PATH=D:\antigravity\My Apps\node-portable\node-v20.18.0-win-x64;%PATH%
)
cd /d "%~dp0"
npm run dev
pause
