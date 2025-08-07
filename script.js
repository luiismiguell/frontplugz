document.addEventListener('DOMContentLoaded', () => {
    // Lógica do brilho do mouse (já existente)
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

    // =====================================
    // ========= LÓGICA DO CARROSSEL =========
    // =====================================
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-arrow');
    const prevButton = document.querySelector('.prev-arrow');
    
    if (track && slides.length > 0 && nextButton && prevButton) {
        let currentIndex = 0;
        const slideCount = slides.length;

        const moveToSlide = (targetIndex) => {
            // Garante que o índice fique dentro dos limites (0 a slideCount - 1)
            if (targetIndex >= slideCount) {
                targetIndex = 0;
            } else if (targetIndex < 0) {
                targetIndex = slideCount - 1;
            }

            // Move o "trilho" para o slide correto
            track.style.transform = `translateX(-${targetIndex * 100}%)`;
            currentIndex = targetIndex;
        };

        // Evento para o botão "Próximo"
        nextButton.addEventListener('click', () => {
            moveToSlide(currentIndex + 1);
        });

        // Evento para o botão "Anterior"
        prevButton.addEventListener('click', () => {
            moveToSlide(currentIndex - 1);
        });
        
        // Inicializa o carrossel na primeira posição
        moveToSlide(0);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Lógica do brilho do mouse (permanece a mesma)
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

    // Itera sobre cada carrossel encontrado e aplica a lógica
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        // Se não encontrar um 'track' neste componente, pula para o próximo
        if (!track) return;

        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.next-arrow');
        const prevButton = carousel.querySelector('.prev-arrow');
        
        // Se os elementos essenciais não existirem, não faz nada
        if (slides.length === 0 || !nextButton || !prevButton) {
            return;
        }

        let currentIndex = 0;
        const slideCount = slides.length;

        const moveToSlide = (targetIndex) => {
            // Garante que o índice fique dentro dos limites (0 a slideCount - 1)
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
        
        // Inicializa o carrossel na primeira posição
        moveToSlide(0);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Lógica do brilho do mouse (permanece a mesma)
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
        const track = carousel.querySelector('.carousel-track');
        if (!track) return;

        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.next-arrow');
        const prevButton = carousel.querySelector('.prev-arrow');
        
        if (slides.length === 0 || !nextButton || !prevButton) {
            return;
        }

        let currentIndex = 0;
        
        const moveToSlide = (targetIndex) => {
            // Lógica para o carrossel que mostra múltiplos slides
            if (carousel.classList.contains('detailed-benefits-carousel')) {
                const slideWidth = slides[0].getBoundingClientRect().width;
                const gap = parseFloat(getComputedStyle(track).gap) || 0;
                
                // Limita o índice para não ter espaço em branco no final
                const maxIndex = slides.length - Math.floor(track.parentElement.clientWidth / (slideWidth + gap));
                if (targetIndex > maxIndex) targetIndex = maxIndex;
                if (targetIndex < 0) targetIndex = 0;
                
                track.style.transform = `translateX(-${targetIndex * (slideWidth + gap)}px)`;

            } else { // Lógica para o carrossel que mostra um slide por vez
                if (targetIndex >= slides.length) targetIndex = 0;
                if (targetIndex < 0) targetIndex = slides.length - 1;
                
                track.style.transform = `translateX(-${targetIndex * 100}%)`;
            }
            
            currentIndex = targetIndex;
        };

        nextButton.addEventListener('click', () => {
            moveToSlide(currentIndex + 1);
        });

        prevButton.addEventListener('click', () => {
            moveToSlide(currentIndex - 1);
        });
        
        // Garante que o carrossel comece na posição correta
        moveToSlide(0);

        // Recalcular em caso de redimensionamento da janela
        window.addEventListener('resize', () => moveToSlide(currentIndex));
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // ===================================================
    // ========= LÓGICA DO BRILHO DO MOUSE (REATIVADA) =========
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
});