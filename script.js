document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle elements
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Navigation elements
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbarLinks = document.getElementById('navbar-links');
    const overlay = document.getElementById('overlay');
    
    // Theme initialization
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme or preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = 'light_mode';
    } else {
        themeIcon.textContent = 'dark_mode';
    }

    // Theme toggle handler
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        }
    });

    // Hamburger menu functionality
    const toggleMenuState = (isActive) => {
        hamburgerMenu.classList.toggle('active', isActive);
        navbarLinks.classList.toggle('active', isActive);
        overlay.style.display = isActive ? 'block' : 'none';
        document.body.style.overflow = isActive ? 'hidden' : '';
        
        // Accessibility updates
        hamburgerMenu.setAttribute('aria-expanded', isActive);
        hamburgerMenu.setAttribute('aria-label', isActive ? 'Close menu' : 'Open menu');
    };

    // Menu toggle handler
    hamburgerMenu.addEventListener('click', () => {
        const isActive = !hamburgerMenu.classList.contains('active');
        toggleMenuState(isActive);
    });

    // Overlay click handler
    overlay.addEventListener('click', () => toggleMenuState(false));

    // Nav link click handlers
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Close menu on mobile
            if (window.innerWidth <= 768) {
                toggleMenuState(false);
            }
            
            // Smooth scroll behavior
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Window resize handler
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            toggleMenuState(false);
        }
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.style.animationPlayState = entry.isIntersecting 
                ? 'running' 
                : 'paused';
        });
    });

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.hero-text, .hero-image, .stack-category, .project-card, .contact-section, .contact-btn'
    );
    
    animatableElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});
