// Dynamic Authentication Status in Navbar Header
document.addEventListener('DOMContentLoaded', () => {
    const checkAuthStatus = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        const headers = document.querySelectorAll('header');
        
        headers.forEach(header => {
            const actionsDiv = header.querySelector('.hidden.lg\\:flex.items-center.gap-4') || header.querySelector('.lg\\:flex.items-center.gap-4');
            if (!actionsDiv) return;
            
            if (actionsDiv.querySelector('#auth-control-group')) return;
            
            // Remove any existing static login links
                        const staticLogin = actionsDiv.querySelector('a[href="login.html"]');
            if (staticLogin) {
                staticLogin.remove();
            }
            
            const authControl = document.createElement('div');
            authControl.id = 'auth-control-group';
            authControl.className = 'flex items-center gap-4 mr-2';
            
            const bookBtn = actionsDiv.querySelector('a[href="booking.html"]') || actionsDiv.querySelector('a[href="index.html#book"]');
            
            const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || !window.location.pathname.includes('pages/');
            const pPath = isRoot ? 'pages/' : '';

            if (currentUser) {
                authControl.innerHTML = `
                    <a href="${pPath}profile.html" class="flex items-center gap-3 bg-slate-100 border border-slate-200 rounded-full pl-3 pr-4 py-1.5 hover:border-primary/50 transition-colors">
                        <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white uppercase">
                            ${currentUser.name ? currentUser.name.charAt(0) : 'U'}
                        </div>
                        <span class="text-xs font-medium text-slate-700 hidden xl:inline">${currentUser.name || 'User'}</span>
                    </a>
                    <button id="nav-logout-btn" class="text-sm font-medium text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
                        <i class="fa-solid fa-right-from-bracket"></i> <span class="hidden sm:inline">Logout</span>
                    </button>
                `;
            } else {
                authControl.innerHTML = `
                    <a href="${pPath}login.html" class="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-center gap-1.5">
                        <i class="fa-solid fa-user text-xs"></i> Sign In
                    </a>
                `;
            }
            
            if (bookBtn) {
                // Put auth control (Sign In/Profile) AFTER the book button so Book Repair is in the middle
                actionsDiv.appendChild(authControl);
            } else {
                actionsDiv.appendChild(authControl);
            }
                });
        
        // Update Mobile Profile Button if it exists
        const mobileProfileBtn = document.getElementById('mobile-profile-btn');
        if (mobileProfileBtn) {
            if (currentUser) {
                mobileProfileBtn.innerHTML = `
                    <div class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mr-2">
                        ${currentUser.name ? currentUser.name.charAt(0) : "U"}
                    </div>
                    <span>${currentUser.name || "User"}</span>
                `;
            }
        }

                // Mobile Auth Logic
        const mobileAuthContainer = document.getElementById('mobile-auth-container');
        if (mobileAuthContainer) {
            const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || !window.location.pathname.includes('pages/');
            const pPath = isRoot ? 'pages/' : '';
            if (currentUser) {
                mobileAuthContainer.innerHTML = `
                    <a href="${pPath}profile.html" class="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3 hover:border-primary/50 transition-colors">
                        <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white uppercase shrink-0">
                            ${currentUser.name ? currentUser.name.charAt(0) : 'U'}
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm font-bold text-slate-800">${currentUser.name || 'User'}</span>
                            <span class="text-xs text-slate-500">View Profile</span>
                        </div>
                    </a>
                    <button id="nav-logout-btn-mobile" class="w-full py-3 rounded-xl border border-red-100 bg-red-50 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2">
                        <i class="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                `;
            } else {
                mobileAuthContainer.innerHTML = `
                    <a href="${pPath}login.html" class="w-full py-3.5 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold transition-all flex items-center justify-center gap-2">
                        <i class="fa-solid fa-user text-sm"></i> Sign In / Register
                    </a>
                `;
            }
        }
        
        document.body.addEventListener('click', (e) => {
            // Logout logic
            const logoutBtn = e.target.closest('#nav-logout-btn') || e.target.closest('#nav-logout-btn-mobile');
            if (logoutBtn) {
                e.preventDefault();
                localStorage.removeItem('currentUser');
                
                const toast = document.createElement('div');
                toast.className = 'fixed top-24 right-6 bg-[#0369a1] text-white px-6 py-3 rounded-xl shadow-lg font-bold text-sm z-[200] animate-bounce';
                toast.innerText = 'Logged out successfully.';
                document.body.appendChild(toast);
                
                setTimeout(() => {
                    toast.remove();
                    window.location.reload();
                }, 1000);
            }

            // Booking Protection logic (exempting links with 'no-auth' class)
            const bookLink = e.target.closest('a[href="booking.html"]');
            if (bookLink && !bookLink.classList.contains('no-auth')) {
                const isAuth = localStorage.getItem('currentUser');
                if (!isAuth) {
                    e.preventDefault();
                    
                    const toast = document.createElement('div');
                    toast.className = 'fixed top-24 right-6 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg font-bold text-sm z-[200] animate-bounce';
                    toast.innerText = 'Please Login First to Book a Repair.';
                    document.body.appendChild(toast);
                    
                    setTimeout(() => {
                        toast.remove();
                        // Redirect to login, passing the intent
                        localStorage.setItem('redirectAfterLogin', 'booking.html');
                        const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || !window.location.pathname.includes('pages/');
                        window.location.href = isRoot ? 'pages/login.html' : 'login.html';
                    }, 2000);
                }
            }
        });
    };
    
    checkAuthStatus();
});




