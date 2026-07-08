import os
import re

directory = r"f:/project/repaire"

header_regex = re.compile(r'<a href="[^"]*"\s+class="flex items-center gap-2 group">.*?<img src="assets/logo\.png".*?</a>', re.DOTALL)
footer_regex = re.compile(r'<a href="[^"]*"\s+class="flex items-center gap-2 mb-6">.*?<img src="assets/logo\.png".*?</a>', re.DOTALL)

new_header = """<a href="index.html" class="flex flex-col items-start justify-center group cursor-pointer hover:opacity-90 transition-opacity scale-90 origin-left">
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
            </a>"""

new_footer = """<a href="index.html" class="flex flex-col items-start justify-center group cursor-pointer hover:opacity-90 transition-opacity scale-75 origin-left mb-6">
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
                    </a>"""

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = header_regex.sub(new_header, content)
        content = footer_regex.sub(new_footer, content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filename}")
