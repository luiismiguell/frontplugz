document.addEventListener('DOMContentLoaded', () => {

    // ===================================================
    // ========= LÓGICA DO BRILHO DO MOUSE =========
    // ===================================================
    const glow = document.querySelector('.mouse-glow');
    if (glow) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            requestAnimationFrame(() => {
                glow.style.left = `${clientX}px`;
                glow.style.top = `${clientY}px`;
            });
        });
    }

    // ================================================
    // ========= LÓGICA PARA MÚLTIPLOS CARROSSÉIS =========
    // ================================================
    
    const carousels = document.querySelectorAll('.carousel-component');

    carousels.forEach(carousel => {
        // Encontra os elementos dentro do wrapper do carrossel atual
        const wrapper = carousel.closest('.detailed-benefits-carousel-wrapper') || carousel;
        const track = carousel.querySelector('.carousel-track');
        if (!track) return;

        const slides = Array.from(track.children);
        const nextButton = wrapper.querySelector('.next-arrow');
        const prevButton = wrapper.querySelector('.prev-arrow');
        
        if (slides.length === 0 || !nextButton || !prevButton) {
            return;
        }

        let currentIndex = 0;

        const updateCarousel = () => {
            // Verifica se este é o carrossel de múltiplos slides
            if (carousel.classList.contains('detailed-benefits-carousel')) {
                const slideWidth = slides[0].getBoundingClientRect().width;
                const gap = parseFloat(getComputedStyle(track).gap) || 0;
                const containerWidth = track.parentElement.getBoundingClientRect().width;
                
                const slidesInView = Math.floor((containerWidth + gap) / (slideWidth + gap));
                const maxIndex = Math.max(0, slides.length - slidesInView);

                if (currentIndex > maxIndex) currentIndex = maxIndex;
                if (currentIndex < 0) currentIndex = 0;
                
                track.style.transform = `translateX(-${currentIndex * (slideWidth + gap)}px)`;

            } else { // Lógica para carrosséis de um slide por vez
                if (currentIndex >= slides.length) currentIndex = 0;
                if (currentIndex < 0) currentIndex = slides.length - 1;
                
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
        };

        nextButton.addEventListener('click', () => {
            currentIndex++;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex--;
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    });

    // ===============================================
    // ========= LÓGICA DO MODAL DE LOGIN ============
    // ===============================================
    
    const loginBtn = document.getElementById('login-btn');
    const modalOverlay = document.getElementById('login-modal-overlay');
    const closeModalBtn = document.getElementById('login-modal-close');
    const loginForm = document.getElementById('login-form');

    if (loginBtn && modalOverlay && closeModalBtn && loginForm) {
        const openModal = () => modalOverlay.classList.add('visible');
        const closeModal = () => modalOverlay.classList.remove('visible');

        loginBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) closeModal();
        });
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Funcionalidade de login (back-end) não implementada.');
            closeModal();
        });
    }
});