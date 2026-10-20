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

// Troque este endereço pelo seu link da Kiwify, Hotmart, Eduzz, Stripe ou checkout próprio.
const CHECKOUT_URL = 'https://seu-link-de-checkout.com';
document.querySelectorAll('.checkout-link').forEach((link) => {
  link.href = CHECKOUT_URL;
});
