// Theme management (Dark/Light toggle)
document.addEventListener('DOMContentLoaded', () => {
    // Inject Theme Toggle Button if not already in HTML header
    const actionsContainer = document.querySelector('header .flex.items-center.gap-4');
    if (actionsContainer) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all';
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        toggleBtn.setAttribute('aria-label', 'Toggle Theme');
        
        // Add to actions container right before Book Repair
        actionsContainer.insertBefore(toggleBtn, actionsContainer.lastElementChild);
        
        const currentTheme = localStorage.getItem('theme') || 'dark';
        if (currentTheme === 'light') {
            document.documentElement.classList.remove('dark');
            toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
        
        toggleBtn.addEventListener('click', () => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
    }

    // Inject dynamic Scroll to Top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.className = 'fixed bottom-24 right-6 w-12 h-12 rounded-full bg-primary/80 backdrop-blur-md text-white flex items-center justify-center cursor-pointer transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none hover:bg-primary hover:scale-110 shadow-[0_0_15px_rgba(230,0,0,0.5)] z-40 border border-white/10';
    scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up text-lg"></i>';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            scrollTopBtn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        } else {
            scrollTopBtn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
            scrollTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

