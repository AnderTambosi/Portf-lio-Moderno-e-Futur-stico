// Adiciona efeito de digitação ao título
const title = document.querySelector('header h1');
const text = title.textContent;
title.textContent = '';

function typeWriter(text, i = 0) {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 100);
  }
}

typeWriter(text);

// Adiciona animação de fade-in aos projetos
const projects = document.querySelectorAll('.projeto');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0) scale(1)';
    }
  });
}, { threshold: 0.1 });

projects.forEach(project => {
  project.style.opacity = 0;
  project.style.transform = 'translateY(20px) scale(0.9)';
  project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(project);
});

// Configuração das partículas
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Adiciona efeito de hover 3D aos projetos
const projectCards = document.querySelectorAll('.projeto');

projectCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});

console.log('Portfólio ultra futurístico carregado com sucesso!');