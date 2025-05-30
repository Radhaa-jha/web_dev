// Mobile navigation toggle functionality
 document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
            const mobileNav = document.querySelector('.mobile-nav');
            if (mobileNav.style.display === 'block') {
                mobileNav.style.display = 'none';
            } else {
                mobileNav.style.display = 'block';
            }
        });
        
        // Close mobile nav when clicking a link
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.mobile-nav').style.display = 'none';
            });
        });
        
        // Resize handler to ensure proper mobile nav behavior
        window.addEventListener('resize', function() {
            const mobileNav = document.querySelector('.mobile-nav');
            if (window.innerWidth > 768) {
                mobileNav.style.display = 'none';
            }
        });