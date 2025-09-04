// Animação de partículas
function createParticles() {
    const container = document.querySelector('.background-animation');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        container.appendChild(particle);
    }
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de scroll
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

// Indicador de scroll
function updateScrollIndicator() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.querySelector('.scroll-indicator').style.width = scrollPercentage + '%';
}

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // aqui pode manter porque vamos enviar via fetch
    
    const btn = this.querySelector('.submit-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.style.background = '#ffffff';
    btn.style.color = '#000000';

    // Cria os dados do form
    const formData = new FormData(this);

    // Faz o envio para o FormSubmit
    fetch(this.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(() => {
        btn.textContent = 'Mensagem Enviada!';
        btn.style.background = '#00ff88';
        btn.style.color = '#000000';
        this.reset();

        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch(() => {
        btn.textContent = 'Erro ao enviar';
        btn.style.background = '#ff0000';
        btn.style.color = '#ffffff';
    });
});

// Event listeners
window.addEventListener('scroll', () => {
    animateOnScroll();
    updateScrollIndicator();
});

window.addEventListener('load', () => {
    createParticles();
    animateOnScroll();
    
    // Animação inicial da primeira seção
    document.querySelector('#home').classList.add('visible');
});

// Efeito de digitação no título
function typeWriter() {
    const text = "André Nascimento";
    const element = document.querySelector('.hero-content h1');
    element.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 150);
}

// Iniciar efeito de digitação após carregamento
setTimeout(typeWriter, 500);

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

