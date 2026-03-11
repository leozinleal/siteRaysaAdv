document.addEventListener("DOMContentLoaded", function() {
    // Seleciona links da navbar e dos botões da hero section
    const links = document.querySelectorAll('.navbar-nav a[href^="#"], .hero-content a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 85, // Compensa a altura da barra do menu
                    behavior: 'smooth'
                });
            }
        });
    });
});