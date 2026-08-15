// Menu mobile (hambúrguer)
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const mobileMenu = document.getElementById('mobileMenu');

const iconMenu = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
const iconClose = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburgerIcon.innerHTML = isOpen ? iconClose : iconMenu;
});

// Fecha o menu mobile ao clicar em um link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburgerIcon.innerHTML = iconMenu;
  });
});

// Seletor de idioma (BR / EN)
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Aqui você pode plugar a lógica de troca de idioma do conteúdo, se desejar.
  });
});
