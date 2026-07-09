document.addEventListener('DOMContentLoaded', () => {
    // Make service cards clickable
    document.querySelectorAll('.group.bg-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            if(e.target.closest('a')) return;
            const link = card.querySelector('a');
            if (link) window.location.href = link.href;
        });
    });

    // Mobile Menu Implementation
    const mobileMenuBtn = document.querySelector('button[aria-label="Menu"]');
    const desktopNav = document.querySelector('nav');
    
    // Dynamic path for links
    const pPath = window.location.pathname.includes('/pages/') ? '' : 'pages/';
    
    if (mobileMenuBtn && desktopNav) {
        // Create mobile menu overlay
        const mobileMenuHtml = `
            <div id="mobile-menu-container" class="fixed inset-0 z-[110] hidden">
                <!-- Backdrop -->
                <div id="mobile-menu-backdrop" class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity opacity-0 duration-300"></div>

                                <!-- Drawer -->
                <div id="mobile-menu-drawer" class="absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col pt-24 px-6 overflow-y-auto">
                    <button id="mobile-menu-close" class="absolute top-6 right-6 text-slate-500 hover:text-slate-900 text-3xl"><i class="fa-solid fa-xmark"></i></button>
                    <div class="flex flex-col gap-4 text-lg font-medium" id="mobile-nav-links">
                        <!-- Links will be cloned here -->
                    </div>
                    
                    <!-- Auth dynamically injected here by auth.js -->
                    <div id="mobile-auth-container" class="mt-6 pt-6 border-t border-slate-200 flex flex-col gap-4">
                    </div>
                    
                    <div class="mt-6 mb-8">
                        <a href="${pPath}booking.html" class="w-full py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-[0_0_15px_rgba(3,105,161,0.3)] flex items-center justify-center gap-2">
                            <span>Book Repair</span>
                            <i class="fa-solid fa-arrow-right text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', mobileMenuHtml);
        
        const container = document.getElementById('mobile-menu-container');
        const backdrop = document.getElementById('mobile-menu-backdrop');
        const drawer = document.getElementById('mobile-menu-drawer');
        const closeBtn = document.getElementById('mobile-menu-close');
        const linksContainer = document.getElementById('mobile-nav-links');
        
        // Clone links from desktop nav
        const links = desktopNav.querySelectorAll('a');
        links.forEach(link => {
            const clone = link.cloneNode(true);
            // Remove the after underline animation for mobile and add padding/border
            clone.className = "block py-3 border-b border-slate-100 text-slate-700 hover:text-primary transition-colors w-max relative after:content-[''] after:absolute after:bottom-3 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full";
            linksContainer.appendChild(clone);
        });
        
        // Toggle Logic
        mobileMenuBtn.addEventListener('click', () => {
            container.classList.remove('hidden');
            // Small delay to allow display:block to apply before transition
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                backdrop.classList.add('opacity-100');
                drawer.classList.remove('translate-x-full');
                drawer.classList.add('translate-x-0');
            }, 10);
            document.body.style.overflow = 'hidden';
        });
        
        const closeMenu = () => {
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            drawer.classList.remove('translate-x-0');
            drawer.classList.add('translate-x-full');
            
            setTimeout(() => {
                container.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300); // Wait for transition
        };
        
        closeBtn.addEventListener('click', closeMenu);
        backdrop.addEventListener('click', closeMenu);
        
        // Close menu when clicking a link
        linksContainer.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', closeMenu);
        });
    }

    // Live Tracker Form Simulation
    const trackerForm = document.getElementById('trackerForm');
    
    if (trackerForm) {
        trackerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = trackerForm.querySelector('input');
            const repairId = input.value;
            
            if (!repairId) return;
            
            // Basic simulation - in a real app this would query LocalStorage or an API
            const btn = trackerForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Tracking...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                
                // Show a toast or update the UI (we already have a static UI representation below the form in HTML)
                // For this demo, we'll just show an alert or a simple animation
                const demoStatus = trackerForm.nextElementSibling;
                if (demoStatus) {
                    demoStatus.style.opacity = '0';
                    setTimeout(() => {
                        demoStatus.style.opacity = '1';
                    }, 300);
                }
                
                input.value = '';
                
            }, 1500);
        });
    }

    // Add mouse move effect for the hero device placeholder
    const heroDevice = document.querySelector('.animate-float.glass-card');
    if (heroDevice) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            
            heroDevice.style.transform = `translateY(-20px) rotateX(${y}deg) rotateY(${x}deg)`;
        });
    }
    // Counter Animation
    const counters = document.querySelectorAll('[data-count]');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Only animate if element is in viewport
            const rect = counter.getBoundingClientRect();
                        if(rect.top < window.innerHeight && rect.bottom >= 0 && !counter.hasAttribute('data-started')) {
                counter.setAttribute('data-started', 'true');
                updateCount();
            }
        });
    };

    window.addEventListener('scroll', animateCounters);
    // Initial check in case they are already in view
    animateCounters();

    // Testimonials Swiper
    if(typeof Swiper !== 'undefined') {
        window.testimonialsSwiper = new Swiper('.testimonials-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        });

        // Event delegation for dynamically loaded arrows
        document.body.addEventListener('click', (e) => {
            const nextBtn = e.target.closest('.swiper-next');
            const prevBtn = e.target.closest('.swiper-prev');
            
            if (nextBtn && window.testimonialsSwiper) {
                window.testimonialsSwiper.slideNext();
            } else if (prevBtn && window.testimonialsSwiper) {
                window.testimonialsSwiper.slidePrev();
            }
        });
    }

    // FAQ Accordion
    const faqBtns = document.querySelectorAll('.faq-btn');
    
    faqBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
                        // Close all other accordions
            faqBtns.forEach(otherBtn => {
                if (otherBtn !== this) {
                    const otherContent = otherBtn.nextElementSibling;
                    const otherIcon = otherBtn.querySelector('i');
                    if (otherContent) {
                        otherContent.classList.add('max-h-0');
                        otherContent.classList.remove('max-h-96');
                    }
                    if (otherIcon) {
                        otherIcon.classList.remove('rotate-180');
                    }
                }
            });
            
            // Toggle current
            if (content) {
                if (content.classList.contains('max-h-96')) {
                    content.classList.remove('max-h-96');
                    content.classList.add('max-h-0');
                    if(icon) icon.classList.remove('rotate-180');
                } else {
                    content.classList.remove('max-h-0');
                    content.classList.add('max-h-96');
                    if(icon) icon.classList.add('rotate-180');
                }
            }
        });
    });
    // AI Estimator Logic
    const estimatorSteps = document.querySelectorAll('.estimator-panel');
    const stepIndicators = document.querySelectorAll('.estimator-step');
    const progressBar = document.getElementById('estimator-progress');
    const btnNext2 = document.getElementById('btn-next-2');
    const btnBack1 = document.getElementById('btn-back-1');
    const btnReset = document.getElementById('btn-reset');
    
    let currentDevice = '';
    let currentIssue = '';

    // Step 1 -> Step 2
    document.querySelectorAll('.device-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentDevice = this.querySelector('.font-medium').innerText;
            goToStep(2);
        });
    });

    // Step 2 Issue Selection
    document.querySelectorAll('input[name="issue"]').forEach(radio => {
        radio.addEventListener('change', function() {
            currentIssue = this.value;
            if(btnNext2) btnNext2.disabled = false;
        });
    });

    // Step 2 -> Step 3
    if(btnNext2) {
        btnNext2.addEventListener('click', () => {
            document.getElementById('summary-device').innerText = currentDevice;
            document.getElementById('summary-issue').innerText = currentIssue;
            
            // Dummy logic for price
            let priceStr = '\u20B92,499 - \u20B94,999';
            if(currentIssue.includes('Screen')) priceStr = '\u20B93,999 - \u20B98,999';
            if(currentIssue.includes('Motherboard')) priceStr = '\u20B96,999 - \u20B915,999';
            if(currentIssue.includes('Water')) priceStr = '\u20B92,999 - \u20B911,999';
            
            document.getElementById('estimate-price').innerText = priceStr;
            goToStep(3);
        });
    }

    if(btnBack1) btnBack1.addEventListener('click', () => goToStep(1));
    if(btnReset) {
        btnReset.addEventListener('click', () => {
            currentDevice = '';
            currentIssue = '';
            document.querySelectorAll('input[name="issue"]').forEach(r => r.checked = false);
            btnNext2.disabled = true;
            goToStep(1);
        });
    }

    function goToStep(step) {
        if(!estimatorSteps.length) return;
        
        estimatorSteps.forEach((panel, idx) => {
            if (idx === step - 1) {
                panel.classList.remove('hidden');
                panel.classList.add('block'); 
            } else {
                panel.classList.remove('block');
                panel.classList.add('hidden');
            }
        });
        
        stepIndicators.forEach((indicator, idx) => {
            const circle = indicator.querySelector('div');
            const text = indicator.querySelector('span');
            if (idx < step) {
                indicator.classList.add('active');
                circle.classList.remove('bg-white', 'border-2', 'border-slate-200', 'text-slate-400');
                circle.classList.add('bg-primary', 'text-white', 'shadow-[0_0_15px_rgba(3,105,161,0.3)]');
                text.classList.remove('text-slate-400');
                text.classList.add('text-slate-800');
            } else {
                indicator.classList.remove('active');
                circle.classList.add('bg-white', 'border-2', 'border-slate-200', 'text-slate-400');
                circle.classList.remove('bg-primary', 'text-white', 'shadow-[0_0_15px_rgba(3,105,161,0.3)]');
                text.classList.add('text-slate-400');
                text.classList.remove('text-slate-800');
            }
        });
        
        if (progressBar) {
            progressBar.style.width = step === 1 ? '33.33%' : (step === 2 ? '66.66%' : '100%');
        }
    }

});









