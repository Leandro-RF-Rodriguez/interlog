# Site Interlog Brasil — HTML / CSS / JS

Site institucional da Interlog Brasil convertido para **HTML, CSS e JavaScript puros**
(sem dependência de React, Node.js ou qualquer processo de build). Basta abrir o
arquivo `index.html` em um navegador — ou publicar a pasta inteira em qualquer
serviço de hospedagem — para o site funcionar 100%.

## Estrutura de pastas

```
interlog-brasil/
├── index.html                      → Home
├── institucional.html              → Institucional (história, ética, missão, valores)
├── importacao-exportacao.html      → Serviços de Importação e Exportação
├── informacoes-uteis.html          → Hub de Informações Úteis
├── incoterms.html                  → Tabela de Incoterms
├── especificacao-containers.html   → Especificação técnica de containers (com abas)
├── contato.html                    → Formulário de contato + mapa
├── css/
│   └── style.css                   → TODO o CSS do site, organizado por seções
├── js/
│   ├── i18n.js                     → dicionário de tradução PT/EN + lógica de troca de idioma
│   └── script.js                   → menu mobile, abas de containers e formulário de contato
└── README.md                       → este arquivo
```

Cada página HTML repete o mesmo cabeçalho (barra superior + menu) e rodapé,
já que se trata de um site estático tradicional (sem framework). Isso é
proposital: facilita hospedar em qualquer lugar e cada página tem sua própria
URL, o que ajuda no SEO (Google indexa cada página separadamente).

## Como visualizar

- **Mais simples:** dê duplo clique em `index.html` para abrir no navegador.
- **Recomendado:** sirva a pasta com um servidor local (evita eventuais
  bloqueios do navegador para `fetch`/`iframe` em arquivos abertos direto do
  disco). Exemplos:
  ```bash
  # Python já instalado na maioria dos sistemas
  python3 -m http.server 8000
  # depois acesse http://localhost:8000
  ```

## Como publicar (hospedar)

Como é um site 100% estático, pode ser publicado gratuitamente em serviços como
Netlify, Vercel, GitHub Pages, ou em qualquer hospedagem compartilhada
tradicional — basta enviar todos os arquivos desta pasta.

## Funcionalidades já implementadas

- Menu responsivo com hambúrguer no celular (`js/script.js` → `initMobileMenu`)
- Navegação entre as 7 páginas com destaque do item ativo no menu
- **Tradução completa do site entre Português e Inglês** ao clicar em "BR" / "EN"
  na barra superior (`js/i18n.js`) — ver seção dedicada logo abaixo
- Abas de tipos de container em "Especificação Containers" (`initContainerTabs`)
- Formulário de contato com validação de campos obrigatórios e de formato de
  e-mail, e mensagem de confirmação na tela — tudo isso também traduzido
  (`initContactForm`)
- Mapa do Google Maps incorporado na página de Contato
- Layout 100% responsivo (funciona bem em celular, tablet e desktop)

## Como funciona a tradução (BR / EN)

Ao clicar em "BR" ou "EN" na barra superior, o `js/i18n.js` troca o texto de
toda a página instantaneamente (sem recarregar) e **lembra a escolha** —
então, se o visitante navegar para outra página do site, ela já abre no
idioma escolhido.

- Cada texto traduzível no HTML tem um atributo `data-i18n="chave"`
  (ou `data-i18n-html`/`data-i18n-placeholder` quando aplicável).
- O dicionário com todos os textos em "pt" e "en" fica em `js/i18n.js`,
  na constante `DICTIONARY`.
- **Para editar uma tradução:** procure a chave em `js/i18n.js` (ex.:
  `"home.hero.desc"`) e altere o texto em português ou em inglês — não
  precisa mexer no HTML.
- **Os nomes técnicos de Incoterms (EXW, FOB, CIF...) e de tipos de
  container (Standard Dry, Open Top...)** permanecem iguais nos dois
  idiomas de propósito, pois são termos padronizados internacionalmente.

## Pontos de atenção antes de apresentar ao cliente

1. **Formulário de contato ainda não envia e-mails de verdade.**
   Ele roda inteiramente no navegador: valida os campos e mostra a mensagem
   de sucesso, mas sem um back-end conectado, o conteúdo digitado não chega
   a lugar nenhum. O arquivo `js/script.js` já tem um comentário detalhado
   no topo da função `initContactForm()` com 3 opções simples para ligar o
   envio de verdade (Formspree, EmailJS ou um back-end próprio). Vale deixar
   isso claro na proposta — é uma etapa rápida de configurar, mas precisa ser
   feita antes do site ir ao ar.

2. **Botão de idioma (BR/EN) já traduz o conteúdo de verdade.** Todo o texto
   do site (menus, títulos, parágrafos, tabelas, formulário) foi traduzido
   para o inglês e é trocado instantaneamente com JavaScript — sem precisar
   de páginas duplicadas nem de recarregar a página. Veja a seção "Como
   funciona a tradução" acima para saber como editar os textos.

3. **Cotação do dólar e data de atualização são valores fixos no HTML**
   (`R$ 5,42`, "Atualizado em 15/08/2026..."). Não há integração automática
   com o Banco Central — são apenas texto estático, como já era no protótipo
   original. Se o cliente quiser isso dinâmico, é necessário buscar a cotação
   via alguma API (ex.: API do Banco Central) com JavaScript.

4. **Imagem do banner (Hero)** usa uma foto de banco de imagens (Unsplash)
   carregada por link direto — não é um arquivo local. Funciona normalmente
   com internet, mas o ideal para uma entrega final é substituir por uma foto
   própria da empresa (nesse caso, salve o arquivo em uma pasta `assets/img/`
   e ajuste o caminho em `.hero-bg` no `css/style.css`).

5. **CNPJ no rodapé está com valor de exemplo** (`00.000.000/0001-00`) —
   lembre de substituir pelo CNPJ real da Interlog Brasil antes de publicar.

## Onde editar cada coisa

- **Cores e fontes:** topo do arquivo `css/style.css`, dentro de `:root`.
- **Textos de qualquer página:** direto no arquivo `.html` correspondente
  (o conteúdo está em texto simples, sem nenhuma sintaxe de template).
- **Menu de navegação / rodapé:** como são repetidos em todas as páginas,
  para alterar um link de menu é preciso repetir a edição em cada arquivo
  `.html` (são 7 páginas ao todo).
- **Comportamento (menu mobile, abas, formulário):** `js/script.js` — cada
  função tem um comentário explicando o que faz.
