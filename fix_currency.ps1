$htmlFiles = Get-ChildItem -Path . -Recurse -Filter *.html
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # Fix 'From ?999', 'From ?1499', etc.
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, 'From \?(\d+)', 'From &#8377;$1')
    
    # Fix '?2999.00' to '&#8377;2999.00'
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '\?(\d+\.\d\d)', '&#8377;$1')
    
    # Fix 'â‚¹' to '&#8377;'
    $content = $content -replace 'â‚¹', '&#8377;'
    
    # Fix literal ₹ if any
    $content = $content -replace '₹', '&#8377;'
    
    if ($content -cne $original) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Output "Fixed $($file.Name)"
    }
}

$jsFiles = Get-ChildItem -Path js -Recurse -Filter *.js
foreach ($file in $jsFiles) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # Fix corrupted Γé╣
    $content = $content -replace 'Γé╣', '\u20B9'
    
    # Fix corrupted â‚¹
    $content = $content -replace 'â‚¹', '\u20B9'
    
    # Fix literal ₹
    $content = $content -replace '₹', '\u20B9'
    
    if ($content -cne $original) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Output "Fixed $($file.Name)"
    }
}
Write-Output "Done"
