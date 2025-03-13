@echo off
cd /d "C:\Users\ascal\Desktop\game-guides"
start "" http://localhost:8000
python -m http.server 8000
pause