// Unified Website JavaScript
class SynovraWebsite {
    constructor() {
        this.header = document.getElementById('header');
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.mobileOverlay = document.getElementById('mobileOverlay');
        this.isMenuOpen = false;
        
        this.init();
    }
    
    init() {
        this.setupHeader();
        this.setupCounters();
        this.setupSmoothScroll();
        this.setupAnimations();
        this.setupAccessibility();
    }
    
    setupHeader() {
        // Mobile menu toggle
        this.mobileMenuBtn.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // Close menu on overlay click
        this.mobileOverlay.addEventListener('click', () => {
            this.closeMobileMenu();
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });
        
        // Close menu when clicking nav links
        const mobileNavLinks = this.mobileMenu.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
        
        // Scroll effect
        let ticking = false;
        const updateScrollEffect = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffect);
                ticking = true;
            }
        });
        
        // Active navigation
        this.setupActiveNavigation();
    }
    
    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    toggleMobileMenu() {
        if (this.isMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }
    
    openMobileMenu() {
        this.isMenuOpen = true;
        this.mobileMenuBtn.classList.add('active');
        this.mobileMenu.classList.add('active');
        this.mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        this.mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
    
    closeMobileMenu() {
        this.isMenuOpen = false;
        this.mobileMenuBtn.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        this.mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    
    setupCounters() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounters(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe hero stats
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            observer.observe(heroStats);
        }
        
        // Observe metrics section
        const metricsSection = document.querySelector('.metrics-showcase');
        if (metricsSection) {
            observer.observe(metricsSection);
        }
        
        // Fallback for mobile devices - scroll-based trigger
        const checkVisibility = () => {
            if (metricsSection && !metricsSection.hasAttribute('data-animated')) {
                const rect = metricsSection.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
                if (isVisible) {
                    this.animateCounters(metricsSection);
                    window.removeEventListener('scroll', checkVisibility);
                }
            }
        };
        
        // Add scroll listener as fallback
        window.addEventListener('scroll', checkVisibility);
        
        // Also check on resize (mobile orientation change)
        window.addEventListener('resize', checkVisibility);
        
        // Initial check after a delay
        setTimeout(checkVisibility, 1000);
    }
    
    animateCounters(section) {
        // Mark section as animated to prevent duplicate animations
        section.setAttribute('data-animated', 'true');
        
        const statNumbers = section.querySelectorAll('.stat-number, .metric-number__animated');
        
        statNumbers.forEach((element, index) => {
            const target = parseInt(element.dataset.target);
            
            setTimeout(() => {
                this.animateCounter(element, target);
            }, index * 200);
        });
    }
    
    animateCounter(element, target, duration = 1500) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        const suffix = element.dataset.suffix || '';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format number display with suffix
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }
    
    setupSmoothScroll() {
        // Smooth scroll for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = this.header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
    
    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);
        
        // Observe animated elements
        const animatedElements = document.querySelectorAll('.animate-fade-in-up, .card, .ps-card, .metric-card');
        animatedElements.forEach(element => {
            element.style.animationPlayState = 'paused';
            observer.observe(element);
        });
        
        // Button hover effects
        const buttons = document.querySelectorAll('.btn-primary-synovra, .btn-secondary-synovra');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Card hover effects
        const interactiveCards = document.querySelectorAll('.card--interactive, .stat-item');
        interactiveCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
    
    setupAccessibility() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
        
        // Enhanced focus styles for keyboard navigation
        const style = document.createElement('style');
        style.textContent = `
            .keyboard-navigation *:focus {
                outline: 2px solid var(--synovra-primary) !important;
                outline-offset: 2px !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Always start at the top of the page
    window.scrollTo(0, 0);
    
    new SynovraWebsite();
    
    // Loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Also ensure page starts at top on page load/refresh
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Respect reduced motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach(element => {
        element.style.animation = 'none';
        element.style.opacity = '1';
        element.style.transform = 'none';
    });
}