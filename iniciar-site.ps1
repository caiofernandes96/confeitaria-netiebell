# Script para instalar dependências e iniciar o site da Doceria
Set-Location $PSScriptRoot

Write-Host "Instalando dependencias (pode demorar na primeira vez)..." -ForegroundColor Cyan
npm i
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro ao instalar. Verifique sua conexao e tente novamente." -ForegroundColor Red
    pause
    exit 1
}

Write-Host "`nIniciando o servidor em http://localhost:3000 ..." -ForegroundColor Green
Write-Host "No Cursor: Ctrl+Shift+P -> 'Simple Browser: Show' -> digite http://localhost:3000`n" -ForegroundColor Yellow
npm run dev
