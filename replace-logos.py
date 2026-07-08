import os
import glob

old_logo = '''REPAI<span class="text-primary relative mx-[1px] inline-block">
                        R'''

new_logo = '''ROBU<span class="text-primary relative mx-[1px] inline-block">
                        Z'''

old_suffix = '''</span>E'''
new_suffix = '''</span>TA'''

for filepath in glob.glob('**/*.html', recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if old_logo in content:
        content = content.replace(old_logo, new_logo).replace(old_suffix, new_suffix)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated logo in {filepath}')
