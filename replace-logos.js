const fs = require('fs');
const path = require('path');

const dir = 'f:/project/repaire';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const headerRegex = /<a href="[^"]*"\s+class="flex items-center gap-2 group">[\s\S]*?<img src="assets\/logo\.png"[\s\S]*?<\/a>/g;
const footerRegex = /<a href="[^"]*"\s+class="flex items-center gap-2 mb-6">[\s\S]*?<img src="assets\/logo\.png"[\s\S]*?<\/a>/g;

const newHeader = `<a href="index.html" class="flex flex-col items-start justify-center group cursor-pointer hover:opacity-90 transition-opacity scale-90 origin-left">
                <div class="text-[32px] font-black tracking-[-0.05em] leading-none uppercase font-heading text-slate-900 flex items-center">
                    REPAI<span class="text-primary relative mx-[1px] inline-block">
                        R
                        <span class="absolute top-[8px] left-0 w-full h-[2.5px] bg-white z-10"></span>
                        <span class="absolute bottom-[10px] left-0 w-full h-[2.5px] bg-white z-10"></span>
                    </span>E
                </div>
                <div class="flex mt-0.5 ml-1 -skew-x-[15deg] text-[9px] font-bold tracking-[0.15em] uppercase overflow-hidden shadow-sm">
                    <div class="bg-primary text-white px-2 py-0.5 pl-2.5">TECH</div>
                    <div class="bg-slate-900 text-white px-2 py-0.5 pr-2.5">LABS</div>
                </div>
            </a>`;

const newFooter = `<a href="index.html" class="flex flex-col items-start justify-center group cursor-pointer hover:opacity-90 transition-opacity scale-75 origin-left mb-6">
                        <div class="text-[32px] font-black tracking-[-0.05em] leading-none uppercase font-heading text-slate-900 flex items-center">
                            REPAI<span class="text-primary relative mx-[1px] inline-block">
                                R
                                <span class="absolute top-[8px] left-0 w-full h-[2.5px] bg-card z-10"></span>
                                <span class="absolute bottom-[10px] left-0 w-full h-[2.5px] bg-card z-10"></span>
                            </span>E
                        </div>
                        <div class="flex mt-0.5 ml-1 -skew-x-[15deg] text-[9px] font-bold tracking-[0.15em] uppercase overflow-hidden shadow-sm">
                            <div class="bg-primary text-white px-2 py-0.5 pl-2.5">TECH</div>
                            <div class="bg-slate-900 text-white px-2 py-0.5 pr-2.5">LABS</div>
                        </div>
                    </a>`;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let changed = false;
    
    if (headerRegex.test(content)) {
        content = content.replace(headerRegex, newHeader);
        changed = true;
    }
    
    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, newFooter);
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(filePath, content);
        console.log(\`Updated \${file}\`);
    }
});
