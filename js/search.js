// Global Search Overlay simulation
document.addEventListener('DOMContentLoaded', () => {
    // Inject Search Modal
    const searchModalHtml = `
        <div id="search-overlay" class="fixed inset-0 bg-white/40 backdrop-blur-xl z-40 flex flex-col justify-start pt-32 px-6 hidden shadow-2xl">
            <button id="search-close-btn" class="absolute top-6 right-6 text-slate-600 hover:text-slate-900 text-3xl"><i class="fa-solid fa-xmark"></i></button>
            <div class="max-w-2xl mx-auto w-full">
                <input type="text" id="global-search-input" placeholder="Search devices, issues, prices..." class="w-full bg-transparent border-b-2 border-slate-400 focus:border-primary text-2xl py-4 focus:outline-none text-slate-900 placeholder:text-slate-500 font-medium">
                <div class="mt-8 space-y-6">
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-wider text-primary mb-3">Popular Searches</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="search-tag px-3 py-1 bg-card border border-slate-200 rounded-full text-sm cursor-pointer hover:border-primary text-slate-700 transition-all">iPhone Screen Replacement</span>
                            <span class="search-tag px-3 py-1 bg-card border border-slate-200 rounded-full text-sm cursor-pointer hover:border-primary text-slate-700 transition-all">MacBook Battery</span>
                            <span class="search-tag px-3 py-1 bg-card border border-slate-200 rounded-full text-sm cursor-pointer hover:border-primary text-slate-700 transition-all">Data Recovery</span>
                        </div>
                    </div>
                    <div id="search-results" class="space-y-3">
                        <!-- Simulated search results go here -->
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', searchModalHtml);
    
    const overlay = document.getElementById('search-overlay');
    const closeBtn = document.getElementById('search-close-btn');
    const input = document.getElementById('global-search-input');
    const results = document.getElementById('search-results');
    
    // Find the header search toggle button
    const searchTrigger = document.querySelector('header button[aria-label="Toggle Search"]');
    
    if(searchTrigger) {
        searchTrigger.addEventListener('click', () => {
            overlay.classList.remove('hidden');
            input.focus();
        });
    }
    
    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });
    
    // Close on clicking outside the content
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
            overlay.classList.add('hidden');
        }
    });
    
    // Handle tags click
    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            input.value = tag.innerText;
            triggerSearch(tag.innerText);
        });
    });
    
    input.addEventListener('input', (e) => {
        triggerSearch(e.target.value);
    });
    
    function triggerSearch(query) {
        if(!query) {
            results.innerHTML = '';
            return;
        }
        
        // Mock data
        const database = [
            { title: "iPhone Screen Replacement", type: "Service", link: "services.html" },
            { title: "MacBook Battery Replacement", type: "Service", link: "services.html" },
            { title: "MacBook Pro Liquid Damage Recovery", type: "Service", link: "services.html" },
            { title: "iPad Screen Repair", type: "Service", link: "services.html" },
            { title: "Data Recovery & Backup", type: "Service", link: "services.html" },
            { title: "How to maximize battery life", type: "Blog", link: "blog.html" },
            { title: "Standard Diagnostic Pricing Plans", type: "Pricing", link: "pricing.html" }
        ];
        
        const filtered = database.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        
        results.innerHTML = '';
        if(filtered.length === 0) {
            results.innerHTML = '<div class="text-slate-500 text-sm">No results found for that query.</div>';
        } else {
            filtered.forEach(item => {
                const itemEl = document.createElement('a');
                itemEl.href = item.link;
                itemEl.className = 'block p-4 bg-card border border-slate-200 rounded-xl hover:border-primary/50 transition-all flex justify-between items-center';
                itemEl.innerHTML = `
                    <div>
                        <div class="font-bold text-sm text-slate-900">${item.title}</div>
                        <div class="text-[10px] text-slate-500 mt-1">${item.type}</div>
                    </div>
                    <i class="fa-solid fa-arrow-right text-xs text-slate-400"></i>
                `;
                itemEl.addEventListener('click', () => {
                    overlay.classList.add('hidden');
                });
                results.appendChild(itemEl);
            });
        }
    }
});
