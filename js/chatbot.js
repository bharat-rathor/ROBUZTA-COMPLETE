// WhatsApp Support Widget Simulation
document.addEventListener('DOMContentLoaded', () => {
    // Inject WhatsApp Chat Widget HTML
    const whatsappWidgetHtml = `
        <div id="whatsapp-widget" class="fixed bottom-6 right-6 z-50 font-sans">
            <!-- Trigger Button (WhatsApp Green) -->
            <button id="whatsapp-trigger" class="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center text-white text-3xl shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 relative group">
                <i class="fa-brands fa-whatsapp"></i>
                <span class="absolute top-0 right-0 flex h-3.5 w-3.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white shadow-sm"></span>
                </span>
            </button>
            
            <!-- WhatsApp Chat Window -->
            <div id="whatsapp-window" class="hidden absolute bottom-20 right-0 w-80 md:w-96 bg-card border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-md">
                <div class="p-4 bg-[#25D366] flex items-center justify-between text-white">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl"><i class="fa-brands fa-whatsapp"></i></div>
                        <div>
                            <h4 class="font-bold text-sm">ROBUZTA Support</h4>
                            <span class="text-[10px] text-white/80">Typically replies instantly</span>
                        </div>
                    </div>
                    <button id="whatsapp-close" class="text-white hover:text-white/80"><i class="fa-solid fa-xmark text-lg"></i></button>
                </div>
                
                <!-- Messages Body -->
                <div class="p-4 space-y-3 text-sm text-slate-800 dark:text-white">
                    <div class="bg-slate-100 dark:bg-dark/50 border border-slate-200 dark:border-white/5 rounded-xl p-3 max-w-[85%] relative">
                        Hello! 👋 Need help with your mobile, laptop, or PC repair? 
                        <br><br>
                        Type your message below and we will connect you directly on WhatsApp!
                        <!-- Chat Bubble Tail -->
                        <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-slate-100 dark:bg-dark/50 border-b border-l border-slate-200 dark:border-white/5 rotate-45"></div>
                    </div>
                </div>
                
                <!-- Input Box -->
                <form id="whatsapp-form" class="p-3 border-t border-slate-200 dark:border-white/15 flex flex-col gap-2">
                    <textarea id="whatsapp-input" placeholder="Type your message here..." rows="3" class="w-full bg-slate-50 dark:bg-dark/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#25D366] text-slate-900 dark:text-white resize-none"></textarea>
                    <button type="submit" class="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Send via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', whatsappWidgetHtml);
    
    const trigger = document.getElementById('whatsapp-trigger');
    const windowEl = document.getElementById('whatsapp-window');
    const closeBtn = document.getElementById('whatsapp-close');
    const form = document.getElementById('whatsapp-form');
    const input = document.getElementById('whatsapp-input');
    
    trigger.addEventListener('click', () => {
        windowEl.classList.toggle('hidden');
    });
    
    closeBtn.addEventListener('click', () => {
        windowEl.classList.add('hidden');
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if(!text) return;
        
        // India number: 9992452459 => +91 9992452459
        const phoneNumber = "919992452459";
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
        
        // Open in new tab
        window.open(url, '_blank');
        
        // Reset input and close
        input.value = '';
        windowEl.classList.add('hidden');
    });
});

