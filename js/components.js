// Dynamic Components Loader
const AppComponents = {
    getHeader: (rootPath, pagePath) => `
<header id="header"
        class="fixed w-full top-0 z-50 transition-all duration-300 bg-dark/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-lg">
        <div class="w-full px-6 lg:px-12 flex items-center justify-between">
            <!-- Logo -->
            <a href="${rootPath}index.html"
                class="flex flex-col items-start justify-center group cursor-pointer hover:opacity-90 transition-opacity scale-90 origin-left">
                <div
                    class="text-[32px] font-black tracking-[-0.05em] leading-none uppercase font-heading text-slate-900 flex items-center">
                    ROBU<span class="text-primary relative mx-[1px] inline-block">
                        Z
                        <span class="absolute top-[8px] left-0 w-full h-[2.5px] bg-white z-10"></span>
                        <span class="absolute bottom-[10px] left-0 w-full h-[2.5px] bg-white z-10"></span>
                    </span>TA
                </div>
                <div
                    class="flex mt-0.5 ml-1 -skew-x-[15deg] text-[9px] font-bold tracking-[0.15em] uppercase overflow-hidden shadow-sm">
                    <div class="bg-primary text-white px-2 py-0.5 pl-2.5">TECH</div>
                    <div class="bg-slate-900 text-white px-2 py-0.5 pr-2.5">LABS</div>
                </div>
            </a>

            <nav class="hidden lg:flex items-center gap-8 font-medium">
                <a href="${rootPath}index.html"
                    class="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Home</a>
                <a href="${pagePath}services.html"
                    class="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Services</a>
                <a href="${pagePath}about.html"
                    class="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">About
                    Us</a>
                <a href="${pagePath}pricing.html"
                    class="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Pricing</a>
                <a href="${pagePath}tracking.html"
                    class="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Tracking</a>
                <a href="${pagePath}contact.html"
                    class="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Contact</a>
            </nav>

            <!-- Actions -->
            <div class="hidden lg:flex items-center gap-4">
                <button class="text-slate-900/80 hover:text-slate-900 transition-colors" aria-label="Toggle Search">
                    <i class="fa-solid fa-search text-lg"></i>
                </button>
                <div class="w-px h-6 bg-slate-200"></div>
                <a href="${pagePath}booking.html"
                    class="px-6 py-2.5 rounded-full bg-primary hover:bg-primary/90 font-medium text-white transition-all shadow-[0_0_15px_rgba(3,105,161,0.4)] hover:shadow-[0_0_25px_rgba(3,105,161,0.6)] flex items-center gap-2 transform hover:-translate-y-0.5">
                    <span>Book Repair</span>
                    <i class="fa-solid fa-arrow-right text-sm"></i>
                </a>
            </div>

            <!-- Mobile Menu Toggle --><!-- Mobile Menu Toggle -->
            <button class="lg:hidden text-2xl text-slate-900/80 hover:text-slate-900" aria-label="Menu">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>
`,
    getFooter: (rootPath, pagePath) => `
<footer class="bg-card border-t border-slate-200 pt-20 pb-10">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div>
                    <a href="#"
                        class="flex flex-col items-start justify-center group cursor-pointer hover:opacity-90 transition-opacity scale-75 origin-left mb-6">
                        <div
                            class="text-[32px] font-black tracking-[-0.05em] leading-none uppercase font-heading text-slate-900 flex items-center">
                            ROBU<span class="text-primary relative mx-[1px] inline-block">
                        Z
                                <span class="absolute top-[8px] left-0 w-full h-[2.5px] bg-card z-10"></span>
                                <span class="absolute bottom-[10px] left-0 w-full h-[2.5px] bg-card z-10"></span>
                            </span>TA
                </div>
                        <div
                            class="flex mt-0.5 ml-1 -skew-x-[15deg] text-[9px] font-bold tracking-[0.15em] uppercase overflow-hidden shadow-sm">
                            <div class="bg-primary text-white px-2 py-0.5 pl-2.5">TECH</div>
                            <div class="bg-slate-900 text-white px-2 py-0.5 pr-2.5">LABS</div>
                        </div>
                    </a>
                    <p class="text-slate-900/60 text-sm leading-relaxed mb-6">
                        Premium electronics repair services with a focus on quality, speed, and customer satisfaction.
                        We bring your devices back to life.
                    </p>
                    <div class="flex gap-4">
                        <a href="https://www.facebook.com/robuztatechlabs/" target="_blank"
                            class="w-10 h-10 rounded-full bg-dark border border-slate-200 flex items-center justify-center text-slate-900/70 hover:text-slate-900 hover:border-primary transition-colors"><i
                                class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/robuztatechlabs/" target="_blank"
                            class="w-10 h-10 rounded-full bg-dark border border-slate-200 flex items-center justify-center text-slate-900/70 hover:text-slate-900 hover:border-primary transition-colors"><i
                                class="fa-brands fa-instagram"></i></a>
                        <a href="https://in.linkedin.com/company/robuzta-techlabs" target="_blank"
                            class="w-10 h-10 rounded-full bg-dark border border-slate-200 flex items-center justify-center text-slate-900/70 hover:text-slate-900 hover:border-primary transition-colors"><i
                                class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/@robuztatechlabs" target="_blank"
                            class="w-10 h-10 rounded-full bg-dark border border-slate-200 flex items-center justify-center text-slate-900/70 hover:text-slate-900 hover:border-primary transition-colors"><i
                                class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

                                <div>
                    <h4 class="font-bold mb-6 text-slate-800">Our Services</h4>
                    <ul class="space-y-3.5 text-sm text-slate-900/70 font-medium">
                        <li><a href="${pagePath}services.html#mobile-repair"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>Mobile Repair</a></li>
                        <li><a href="${pagePath}services.html#laptop-repair"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>Laptop & MacBook</a></li>
                        <li><a href="${pagePath}services.html#pc-repair"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>PC & Gaming Setup</a></li>
                        <li><a href="${pagePath}services.html#data-recovery"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>Data Recovery</a></li>
                        <li><a href="${pagePath}services.html"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>Smartwatch Repair</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold mb-6 text-slate-800">Quick Links</h4>
                    <ul class="space-y-3.5 text-sm text-slate-900/70 font-medium">
                        <li><a href="${pagePath}about.html"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>About Us</a></li>
                        <li><a href="${pagePath}tracking.html"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>Track Repair</a></li>
                        <li><a href="${pagePath}pricing.html"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>Pricing Calculator</a></li>
                        <li><a href="${pagePath}booking.html"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>Book a Service</a></li>
                        <li><a href="${pagePath}contact.html"
                                class="hover:text-primary transition-colors inline-flex items-center group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full w-max"><i class="fa-solid fa-chevron-right text-[10px] text-primary/50 mr-2 group-hover:translate-x-1 transition-transform"></i>Contact Support</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold mb-6 text-slate-800">Contact Us</h4>
                    <ul class="space-y-4 text-sm text-slate-900/70 font-medium">
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-location-dot mt-1 text-primary"></i>
                            <span>103, First Floor, Sun South Winds, Safal Parisar Road, South Bopal, Ahmedabad, Gujarat
                                380057</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-phone text-primary"></i>
                            <span>+91 999 245 2459</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-envelope text-primary"></i>
                            <span>info@robuztatechlabs.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                class="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-900/50">
                <p>&copy; 2026 ROBUZTA. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#"
                        class="hover:text-slate-900 transition-colors inline-block relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 after:transition-all hover:after:w-full">Privacy
                        Policy</a>
                    <a href="#"
                        class="hover:text-slate-900 transition-colors inline-block relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 after:transition-all hover:after:w-full">Terms
                        of Service</a>
                </div>
            </div>
        </div>
    </footer>
`
};

document.addEventListener('DOMContentLoaded', () => {
    const isPage = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
    const rootPath = isPage ? '../' : './';
    const pagePath = isPage ? './' : 'pages/';

    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = AppComponents.getHeader(rootPath, pagePath);
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = AppComponents.getFooter(rootPath, pagePath);
    }
});

