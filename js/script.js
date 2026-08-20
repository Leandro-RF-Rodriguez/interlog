/* ============================================================================
   INTERLOG BRASIL — SCRIPT PRINCIPAL
   ============================================================================
   Este arquivo é compartilhado por TODAS as páginas do site (index.html,
   institucional.html, contato.html, etc). Cada função abaixo verifica se os
   elementos que ela precisa existem na página atual antes de rodar — por
   isso não há erro no console mesmo em páginas que não usam todas as
   funcionalidades (ex.: só "contato.html" tem formulário de contato).

   OBS.: a troca de idioma (BR / EN) é controlada pelo arquivo js/i18n.js,
   que precisa ser carregado ANTES deste arquivo em cada página HTML
   (<script src="js/i18n.js"></script> logo acima de <script src="js/script.js">).

   Sumário das funções:
     - initMobileMenu()      -> abre/fecha o menu hambúrguer no celular
     - initContainerTabs()   -> alterna as abas de tipos de container
     - initContactForm()     -> valida e "envia" o formulário de contato
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initContainerTabs();
  initContactForm();
});


/**
 * initMobileMenu()
 * -----------------------------------------------------------------------
 * Controla a abertura/fechamento do menu de navegação mobile (hambúrguer).
 * - Ao clicar no botão hambúrguer, alterna a classe ".open" no menu mobile
 *   e troca o ícone entre "hambúrguer" (☰) e "fechar" (✕).
 * - Ao clicar em qualquer link dentro do menu mobile, o menu se fecha
 *   automaticamente (útil pois cada link já navega para outra página).
 */
function initMobileMenu() {
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var hamburgerIcon = document.getElementById('hamburgerIcon');
  var mobileMenu = document.getElementById('mobileMenu');

  if (!hamburgerBtn || !mobileMenu || !hamburgerIcon) return; // elemento não existe nesta página

  var iconMenu = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
  var iconClose = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';

  hamburgerBtn.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('open');
    hamburgerIcon.innerHTML = isOpen ? iconClose : iconMenu;
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Fecha o menu automaticamente ao clicar em um link (troca de página)
  var links = mobileMenu.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburgerIcon.innerHTML = iconMenu;
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  }
}


/**
 * initContainerTabs()
 * -----------------------------------------------------------------------
 * Usada apenas na página "especificacao-containers.html".
 * Controla a alternância entre as abas: Standard Dry / Open Top / Flat Rack
 * / Refrigerated. Cada aba tem um botão (".tab-btn") com atributo
 * "data-tab" e um painel de conteúdo (".tab-panel") com o mesmo id.
 */
function initContainerTabs() {
  var tabButtons = document.querySelectorAll('.tab-btn');
  if (!tabButtons.length) return;

  var tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('data-tab');

      // Atualiza o estado visual dos botões
      tabButtons.forEach(function (btn) { btn.classList.remove('active'); });
      button.classList.add('active');

      // Mostra apenas o painel correspondente à aba clicada
      tabPanels.forEach(function (panel) {
        panel.classList.toggle('active', panel.id === targetId);
      });
    });
  });
}


/**
 * initContactForm()
 * -----------------------------------------------------------------------
 * Usada apenas na página "contato.html".
 * Faz a validação básica dos campos (nome, e-mail e mensagem) e exibe uma
 * mensagem de confirmação na tela ao enviar.
 *
 * ATENÇÃO — PONTO IMPORTANTE PARA A ENTREGA AO CLIENTE:
 * Este formulário roda 100% no navegador (front-end). Sem um serviço de
 * back-end conectado a ele, a mensagem digitada pelo visitante NÃO é
 * enviada de verdade para nenhum e-mail — apenas a confirmação visual é
 * exibida. Para o formulário passar a enviar e-mails reais, escolha uma
 * das opções abaixo (nenhuma exige reescrever o site):
 *   1. Formspree / Web3Forms / GetForm — serviços gratuitos que recebem o
 *      POST do formulário e encaminham por e-mail (troque a "action" do
 *      <form> pela URL fornecida por eles);
 *   2. EmailJS — envia o e-mail direto pelo JavaScript, com uma API key;
 *   3. Um back-end próprio (PHP, Node.js, etc.) que receba os dados via
 *      fetch() e dispare o e-mail pelo servidor.
 * Essa mudança está detalhada no README.md.
 *
 * As mensagens de erro abaixo usam a função t(chave), definida em
 * js/i18n.js, para aparecer no idioma (BR/EN) selecionado pelo visitante.
 */
function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return; // não estamos na página de contato

  var errorBox = document.getElementById('contactError');
  var successBox = document.getElementById('contactSuccess');
  var sendAnotherBtn = document.getElementById('sendAnotherBtn');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // impede o recarregamento padrão da página

    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();

    // Validação simples: todos os campos são obrigatórios
    if (!nome || !email || !mensagem) {
      if (errorBox) {
        errorBox.textContent = t('contato.error.empty');
        errorBox.classList.add('visible');
      }
      return;
    }

    // Validação simples de formato de e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (errorBox) {
        errorBox.textContent = t('contato.error.email');
        errorBox.classList.add('visible');
      }
      return;
    }

    if (errorBox) errorBox.classList.remove('visible');

    // Aqui é o ponto de integração com um serviço de envio real (ver comentário acima).
    // Exemplo de como ficaria com fetch() para um serviço externo:
    //
    // fetch('https://formspree.io/f/SEU_ID_AQUI', {
    //   method: 'POST',
    //   headers: { 'Accept': 'application/json' },
    //   body: new FormData(form)
    // }).then(function () { mostrarSucesso(); });

    mostrarSucesso();
  });

  function mostrarSucesso() {
    form.style.display = 'none';
    if (successBox) successBox.classList.add('visible');
  }

  // Botão "Enviar outra mensagem": limpa o formulário e mostra ele novamente
  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', function () {
      form.reset();
      form.style.display = 'block';
      if (successBox) successBox.classList.remove('visible');
    });
  }
}
