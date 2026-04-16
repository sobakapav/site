@echo off
setlocal enabledelayedexpansion

set old="src/img/"
set new="/images/cheatsheets/"

for /r %%f in (*) do (
    rem Skip binary files by checking file type (quick & dirty: only .txt, .html, .css, .js, .md, etc.)
    for %%e in (txt html htm css js md json xml csv) do (
        if /i "%%~xf"==".%%e" (
            set "file=%%f"
            powershell -NoProfile -Command ^
                "(Get-Content -Raw '!file!') -replace [regex]::Escape('%old%'), '%new%' | Set-Content '!file!'"
            echo Updated: %%f
        )
    )
)

endlocal
pause
