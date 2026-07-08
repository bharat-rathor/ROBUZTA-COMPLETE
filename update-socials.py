import os
import re

directory = r"f:/project/repaire"

# The regex should match the div containing the social icons. It usually follows the paragraph about "Premium electronics repair services".
# Let's match from <div class="flex gap-4"> down to the closing </div> that wraps the social links.
social_regex = re.compile(r'<div class="flex gap-4">\s*<a href="[^"]*"\s+class="w-10 h-10[^>]*><i class="fa-brands fa-twitter"></i></a>.*?</div>', re.DOTALL)

new_socials = """<div class="flex gap-4">
                        <a href="https://www.facebook.com/robuztatechlabs/" target="_blank" class="w-10 h-10 rounded-full bg-dark border border-slate-200 flex items-center justify-center text-slate-900/70 hover:text-slate-900 hover:border-primary transition-colors"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/robuztatechlabs/" target="_blank" class="w-10 h-10 rounded-full bg-dark border border-slate-200 flex items-center justify-center text-slate-900/70 hover:text-slate-900 hover:border-primary transition-colors"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://in.linkedin.com/company/robuzta-techlabs" target="_blank" class="w-10 h-10 rounded-full bg-dark border border-slate-200 flex items-center justify-center text-slate-900/70 hover:text-slate-900 hover:border-primary transition-colors"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/@robuztatechlabs" target="_blank" class="w-10 h-10 rounded-full bg-dark border border-slate-200 flex items-center justify-center text-slate-900/70 hover:text-slate-900 hover:border-primary transition-colors"><i class="fa-brands fa-youtube"></i></a>
                    </div>"""

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # If the specific twitter-based block is found, replace it
        if social_regex.search(content):
            content = social_regex.sub(new_socials, content)
        else:
            # Fallback regex in case it was already modified or twitter was missing
            # Let's try matching the general flex gap-4 block containing fa-brands
            fallback_regex = re.compile(r'<div class="flex gap-4">\s*(?:<a [^>]*><i class="fa-brands [^>]*></i></a>\s*)+</div>', re.DOTALL)
            content = fallback_regex.sub(new_socials, content)
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filename}")
