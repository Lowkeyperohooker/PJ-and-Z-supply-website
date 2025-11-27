// Update your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Material card hover effects
    const materialCards = document.querySelectorAll('.material-card');
    materialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
    
    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('overlay');
    
    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    }
    
    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (mobileMenuToggle && mainNav && overlay) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);
        
        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                closeMobileMenu();
            }
        });
    }
});