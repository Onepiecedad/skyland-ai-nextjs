# Disable Next.js telemetry
$env:NEXT_TELEMETRY_DISABLED = "1"

# Set custom tsconfig path
$env:TS_NODE_PROJECT = "tsconfig.build.json"

Write-Host "Building Next.js app with type checking and linting disabled..."
npx next build --no-lint 