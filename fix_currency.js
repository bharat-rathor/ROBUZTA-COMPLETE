const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    if (filePath.endsWith('.html')) {
        // Fix "From ?999" -> "From &#8377;999"
        content = content.replace(/From \?(\d+)/g, 'From &#8377;$1');
        // Fix "?2999.00" -> "&#8377;2999.00"
        content = content.replace(/\?(\d+\.\d\d)/g, '&#8377;$1');
        // Fix corrupted UTF-8 variants
        content = content.replace(/â‚¹/g, '&#8377;');
        content = content.replace(/₹/g, '&#8377;');
        content = content.replace(/â‚Ή/g, '&#8377;');
    } else if (filePath.endsWith('.js')) {
        content = content.replace(/Γé╣/g, '\\u20B9');
        content = content.replace(/â‚¹/g, '\\u20B9');
        content = content.replace(/₹/g, '\\u20B9');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed ${filePath}`);
    }
}

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!fullPath.includes('.git')) {
                scanDir(fullPath);
            }
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
            replaceInFile(fullPath);
        }
    }
}

scanDir('.');
console.log('Done');
