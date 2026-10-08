param(
    [string]$Message
)

$ErrorActionPreference = "Continue"
Set-Location (Split-Path -Parent $PSScriptRoot)
$project = (Get-Location).Path

if ([string]::IsNullOrWhiteSpace($Message)) {
    $default = "Actualizacion del sitio"
    $input = Read-Host "Mensaje del commit (Enter para '$default')"
    $Message = if ([string]::IsNullOrWhiteSpace($input)) { $default } else { $input.Trim() }
}
Write-Host "Mensaje del commit: $Message" -ForegroundColor Yellow

function Run([string]$Label, [scriptblock]$Command) {
    Write-Host "`n==> $Label" -ForegroundColor Cyan
    & $Command
    if ($LASTEXITCODE -ne 0) { throw "Fallo: $Label" }
}

function Step([string]$Label, [scriptblock]$Command) {
    & $Command 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) { throw "Fallo: $Label" }
}

if ((git branch --show-current) -ne "main") {
    throw "Tenés que estar en la rama main (estás en '$(git branch --show-current)')."
}

Run "Build (npm run build)" { npm run build }

Write-Host "`n==> Commit en main" -ForegroundColor Cyan
git add -A
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -q -m $Message -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
    if ($LASTEXITCODE -ne 0) { throw "Fallo el commit" }
} else {
    Write-Host "Sin cambios para commitear."
}

Run "Push main" { git push origin main }
Run "Push develop (igual que main)" { git push origin main:develop }
git branch -f develop main 2>$null | Out-Null

$wt = Join-Path $env:TEMP "dominus-deploy-wt"
if (Test-Path $wt) { git worktree remove $wt --force 2>&1 | Out-Null; Remove-Item $wt -Recurse -Force -ErrorAction SilentlyContinue }
git worktree prune

try {
    Run "Traer deploy desde GitHub" { git fetch origin deploy }
    Run "Preparar worktree para deploy" { git worktree add --detach $wt origin/deploy }
    Push-Location $wt
    Get-ChildItem -Force | Where-Object Name -ne ".git" | Remove-Item -Recurse -Force
    robocopy (Join-Path $project "out") $wt /E /NFL /NDL /NJH /NJS /NP | Out-Null
    New-Item -ItemType File -Path (Join-Path $wt ".nojekyll") -Force | Out-Null
    Step "Agregar archivos" { git add -A }
    git diff --cached --quiet
    if ($LASTEXITCODE -ne 0) {
        git commit -q -m $Message -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
        if ($LASTEXITCODE -ne 0) { throw "Fallo el commit de deploy" }
        Run "Push deploy (solo contenido de out)" { git push origin HEAD:deploy }
    } else {
        Write-Host "deploy ya estaba al dia (sin cambios en out)."
    }
}
finally {
    Set-Location $project
    if (Test-Path $wt) { git worktree remove $wt --force 2>&1 | Out-Null }
}

git fetch origin deploy 2>&1 | Out-Null
git branch -f deploy origin/deploy 2>&1 | Out-Null

Write-Host "`nListo: main, develop y deploy actualizadas en GitHub." -ForegroundColor Green
