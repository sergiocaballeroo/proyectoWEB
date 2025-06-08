// Animaciones al hacer scroll
window.addEventListener('scroll', () => {
    const animatedElements = document.querySelectorAll('.animated-title, .animated-text');
    animatedElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Animación de tarjetas de proyectos
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }, index * 200); // Staggered animation

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.1)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('animated-name');
    const name = 'Sergio Caballero';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let display = Array(name.length).fill('');
    let current = 0;
    let interval;

    function randomizeChar(pos, targetChar) {
        if (targetChar === ' ') return ' ';
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function animateName() {
        interval = setInterval(() => {
            for (let i = 0; i < name.length; i++) {
                if (i < current) {
                    display[i] = name[i];
                } else if (name[i] !== ' ') {
                    // Show a random character for this position
                    display[i] = randomizeChar(i, name[i]);
                } else {
                    display[i] = ' ';
                }
            }
            nameElement.textContent = display.join('');
            if (current < name.length) {
                current++;
            } else {
                clearInterval(interval);
                nameElement.textContent = name;
            }
        }, 120); // Más delay para el efecto
    }

    animateName();
});

document.addEventListener('DOMContentLoaded', () => {
    // Animación de aparición para los items de la timeline de proyectos
    const timelineItems = document.querySelectorAll('.timeline-item');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.92;
        timelineItems.forEach((item, idx) => {
            const boxTop = item.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, idx * 200); // animación escalonada
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Ejecutar al cargar
});

document.addEventListener('DOMContentLoaded', () => {
    // Modal de contacto
    const openModal = document.getElementById('open-contact-modal');
    const closeModal = document.getElementById('close-contact-modal');
    const contactModal = document.getElementById('contact-modal');

    if (openModal && closeModal && contactModal) {
        openModal.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('open');
        });
        closeModal.addEventListener('click', () => {
            contactModal.classList.remove('open');
        });
        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('open');
            }
        });
    }
});
