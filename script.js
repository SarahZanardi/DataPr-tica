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
const PRICE = 'R$ 29,90';
const whatsappMessage = `Olá! Quero comprar o ebook Dados na Era da IA por ${PRICE}. Vou enviar o comprovante do Pix por aqui.`;
const sampleMessage = 'Olá! Gostaria de receber uma amostra do ebook Dados na Era da IA.';

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  const message = link.dataset.whatsappIntent === 'sample' ? sampleMessage : whatsappMessage;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});

const copyPixButton = document.querySelector('#copy-pix');
const pixKey = document.querySelector('#pix-key');
const copyFeedback = document.querySelector('#copy-feedback');

copyPixButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(pixKey.textContent.trim());
    copyPixButton.textContent = 'Copiado';
    copyFeedback.textContent = 'Chave Pix copiada.';
    setTimeout(() => {
      copyPixButton.textContent = 'Copiar';
      copyFeedback.textContent = '';
    }, 2200);
  } catch {
    copyFeedback.textContent = 'Selecione a chave manualmente.';
  }
});
