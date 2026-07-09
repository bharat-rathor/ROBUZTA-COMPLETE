# REPAIRE Tech Labs (Robuzta) - Brain & Knowledge Base

This file serves as the central brain and knowledge repository for the **REPAIRE Tech Labs** (formerly Robuzta) platform. It contains an A-to-Z breakdown of the project architecture, design system, functionality, and company history.

---

## 1. Project Overview
- **Project Name:** REPAIRE Tech Labs (Robuzta)
- **Domain:** Premium Electronics & Multi-Device Repair Service
- **Type:** Frontend Single Page/Multi-Page Web Application
- **Core Goal:** Provide a premium, high-fidelity user experience for customers booking repairs, tracking devices, and exploring services.

## 2. Technology Stack
- **Structure:** Vanilla HTML5 with Dynamic JS Components
- **Styling:** Tailwind CSS (via CDN)
- **Interactivity:** Vanilla JavaScript (ES6)
- **Icons:** FontAwesome 6 (Free versions: e.g., `fa-shield-halved`)
- **Animations:** AOS (Animate On Scroll)
- **Local Server:** Recommended to run via `http-server` or `Live Server` due to strict CORS/origin policies on external assets (like YouTube iframe embeds).

## 3. Design System & Aesthetics
- **Theme:** Clean, modern, light-theme with premium glassmorphism elements.
- **Color Palette (Tailwind Config):**
  - `primary`: `#0369a1` (Robuzta Blue - deep, trustworthy)
  - `secondary`: `#0ea5e9` (Lighter Blue - energetic accents)
  - `dark`: `#ffffff` (Main Background)
  - `card`: `#f8fafc` (Slate 50 - Card Backgrounds)
  - `success`: `#10B981` (Green for success states)
- **Typography:**
  - `sans`: Inter (Body text)
  - `heading`: Poppins (Headers, aggressive/bold branding)
- **UI Details:** Soft shadows (`shadow-[0_0_15px_rgba...]`), rounded corners (`rounded-xl`, `rounded-2xl`, `rounded-3xl`), border outlines (`border-slate-200`).
- **Currency:** Indian Rupee globally standardized using robust HTML encoding (`&#8377;`) and JavaScript Unicode (`\u20B9`) to prevent character corruption.

## 4. Platform Pages (A to Z)
1. **`about.html`**: Contains the massive video presentation, "Our Story", and company mission.
2. **`about_section_snippet.html`**: A reusable snippet used for the homepage containing a brief "Who We Are" and embedded story video.
3. **`blog.html`**: Articles and repair tips.
4. **`booking.html`**: Core engine for users to book a repair service. (Protected by Authentication).
5. **`contact.html`**: Features a premium dual-map layout showing branch locations.
6. **`faq.html`**: Frequently asked questions.
7. **`gallery.html`**: Visual proof of lab setups and successful repairs.
8. **`index.html`**: The main landing page featuring a hero slider, AI estimator logic, and quick links.
9. **`login.html`**: Authentication portal featuring standard login, signup, password reset, and functional **Google / Facebook** social auth integration. Includes smart redirection via `redirectAfterLogin`.
10. **`payment.html`**: Payment gateway UI. (Protected by Authentication).
11. **`pricing.html`**: Transparent pricing models.
12. **`profile.html`**: User dashboard for managing ongoing repairs.
13. **`services.html`**: Details on mobile, laptop, PC, and data recovery services.
14. **`terms.html`**: Legal policies and Terms & Conditions. (Linked globally in the footer and signup forms).
15. **`testimonials_*.html`**: User reviews and trust-building slider blocks.
16. **`tracking.html`**: Order/repair tracking interface.

## 5. Core Functionality & Scripts (`/js`)
- **`components.js`**: **(NEW)** The core layout engine. Dynamically injects the global Header and Footer across all pages via `<div id="header-placeholder"></div>`. It smartly calculates `rootPath` and `pagePath` depending on whether the user is in the root directory or a subfolder, ensuring 100% accurate relative link routing.
- **`auth.js`**: Handles session management and frontend local storage authentication. It acts as a route guard, intercepting clicks on protected links (like `booking.html`) and forcing unauthenticated users to log in first while remembering their intended destination via `localStorage.setItem('redirectAfterLogin', ...)`
- **`chatbot.js`**: Automated customer support UI script.
- **`search.js`**: Global site search toggle.
- **`theme.js`**: Dark/Light mode and theme management logic.

## 6. Our Story (Company History)
- **2012:** Began as a passion for understanding how gadgets function.
- **2014:** Launched **Axiom Technologies** as a multi-brand repair shop.
- **2020 (Pandemic):** Expanded aggressively from mobile phones into laptops, tablets, and gaming PCs due to work-from-home demand.
- **2021:** Rebranded to **Robuzta Techlabs** (Robust + Techlabs) ensuring precision, strength, and transparency.
- **Present:** A full-service repair network with a dedicated laboratory, highly skilled engineers, strict parts verification, and a no-compromise warranty policy.

## 7. Known Issues / Resolved Bugs
- **Dynamic Routing Bug:** Resolved. `components.js` initially caused broken footer links on sub-pages (e.g., trying to access `../services.html`). Fixed by decoupling `rootPath` and `pagePath` logic.
- **Currency Encoding Corruption:** Resolved. The Indian Rupee symbol (`₹`) was breaking (`?999`, `â‚¹`, `Γé╣`) due to UTF-8/ANSI mismatches. Fixed by globally swapping to HTML entities (`&#8377;`) and Unicode (`\u20B9`).
- **Auth Flow Redirects:** Resolved. Logging in was always dumping users to `index.html`. Refactored `login.html` to consume `redirectAfterLogin` so users seamlessly continue their booking or payment flow after authenticating.
- **Error 153 (YouTube):** Resolved. Occurs when trying to play YouTube embedded videos via local `file:///` protocol. **Fix:** Use a local web server (like localhost:8080) for development.
- **Map Full-Width Bug:** Resolved. Contact page maps were stretching indefinitely on large monitors. Added `max-w-5xl mx-auto` to constrain the layout gracefully.

---
*Generated by Antigravity AI - Keep this file updated as the project evolves.*
