const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('is-open');
  });
});

const WHATSAPP_NUMBER = '5519992789275';
const whatsappMessage = `Olá! Tenho uma dúvida sobre o ebook Dados na Era da IA.`;
const sampleMessage = 'Olá! Gostaria de receber uma amostra do ebook Dados na Era da IA.';

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  const message = link.dataset.whatsappIntent === 'sample' ? sampleMessage : whatsappMessage;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});
