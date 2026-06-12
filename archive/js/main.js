document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll-sensitive Sticky Navbar Styling
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
        
        // Trigger once in case page loads scrolled down
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        }
    }

    // 2. Navigation Link Active States Auto-Highlighter
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. Initialize Animate on Scroll (AOS)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 120
        });
    }

    // 4. Contact Form Client-Side Validation and Pop-up Success handling
    const contactForm = document.getElementById('milanoContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic Bootstrap Validation check
            if (!contactForm.checkValidity()) {
                e.stopPropagation();
                contactForm.classList.add('was-validated');
                return;
            }

            // If validated, show beautiful mock success modal
            contactForm.classList.remove('was-validated');
            
            // Create a temporary modal using Bootstrap API or custom DOM node
            showContactSuccessModal();
            contactForm.reset();
        });
    }
});

// Helper function to render a custom toast/modal when message is sent successfully
function showContactSuccessModal() {
    // Check if modal container already exists
    let modalEl = document.getElementById('successModal');
    if (!modalEl) {
        modalEl = document.createElement('div');
        modalEl.id = 'successModal';
        modalEl.className = 'modal fade';
        modalEl.setAttribute('tabindex', '-1');
        modalEl.setAttribute('aria-hidden', 'true');
        modalEl.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0 shadow" style="border-radius: 16px;">
                    <div class="modal-body text-center p-5">
                        <div class="mb-4 d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px; background-color: rgba(40, 167, 69, 0.1); border-radius: 50%; color: #28a745;">
                            <i class="bi bi-check2-circle" style="font-size: 3rem;"></i>
                        </div>
                        <h4 class="mb-3" style="font-weight: 700; color: #0A2540;">Message Sent Successfully!</h4>
                        <p class="text-muted mb-4">Thank you for contacting Milano General Trading. Our commercial representatives will review your trading inquiry and respond within 24 hours.</p>
                        <button type="button" class="btn btn-custom btn-custom-primary px-4 py-2" data-bs-dismiss="modal" style="border-radius: 30px;">Close Window</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalEl);
    }
    
    // Instantiate Bootstrap modal object and show it
    if (typeof bootstrap !== 'undefined') {
        const bsModal = new bootstrap.Modal(modalEl);
        bsModal.show();
    } else {
        alert('Thank you! Your message has been sent successfully. We will contact you soon.');
    }
}
