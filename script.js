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
    
    // Seleciona todos os componentes de carrossel na página
    const carousels = document.querySelectorAll('.carousel-component');

    // Só executa se houver algum carrossel na página
    if (carousels.length > 0) {
        carousels.forEach(carousel => {
            const track = carousel.querySelector('.carousel-track');
            if (!track) return;

            const slides = Array.from(track.children);
            const nextButton = carousel.querySelector('.next-arrow');
            const prevButton = carousel.querySelector('.prev-arrow');
            
            if (slides.length === 0 || !nextButton || !prevButton) {
                return;
            }

            let currentIndex = 0;
            const slideCount = slides.length;

            const moveToSlide = (targetIndex) => {
                if (targetIndex >= slideCount) {
                    targetIndex = 0;
                } else if (targetIndex < 0) {
                    targetIndex = slideCount - 1;
                }
                track.style.transform = `translateX(-${targetIndex * 100}%)`;
                currentIndex = targetIndex;
            };

            nextButton.addEventListener('click', () => {
                moveToSlide(currentIndex + 1);
            });

            prevButton.addEventListener('click', () => {
                moveToSlide(currentIndex - 1);
            });
            
            moveToSlide(0);
        });
    }

    // ===============================================
    // ========= LÓGICA DO MODAL DE LOGIN ============
    // ===============================================
    
    // Busca os elementos do modal em qualquer página
    const loginBtn = document.getElementById('login-btn');
    const modalOverlay = document.getElementById('login-modal-overlay');
    const closeModalBtn = document.getElementById('login-modal-close');
    const loginForm = document.getElementById('login-form');

    // Só executa se os elementos do modal existirem na página
    if (loginBtn && modalOverlay && closeModalBtn && loginForm) {

        const openModal = () => {
            modalOverlay.classList.add('visible');
        };

        const closeModal = () => {
            modalOverlay.classList.remove('visible');
        };

        loginBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);

        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Funcionalidade de login (back-end) não implementada.');
            closeModal();
        });
    }
});