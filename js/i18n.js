/* ============================================================================
   INTERLOG BRASIL — SISTEMA DE TRADUÇÃO (i18n)
   ============================================================================
   Este arquivo é responsável por TRADUZIR o conteúdo do site entre
   Português (pt) e Inglês (en) quando o visitante clica nos botões "BR" / "EN"
   na barra superior.

   COMO FUNCIONA (resumo):
   1. Cada elemento traduzível no HTML recebe um atributo especial:
        - data-i18n="chave"             -> traduz o TEXTO do elemento
        - data-i18n-html="chave"        -> traduz o HTML interno (permite
                                            tags como <strong> dentro do texto)
        - data-i18n-placeholder="chave" -> traduz o "placeholder" de um
                                            campo de formulário (<input>/<textarea>)
   2. O dicionário DICTIONARY, logo abaixo, guarda o texto em "pt" e em "en"
      para cada uma dessas chaves.
   3. A função applyLanguage(lang) percorre a página e troca o texto de cada
      elemento marcado pela tradução correspondente.
   4. O idioma escolhido é salvo no navegador (localStorage), então ele
      continua o mesmo quando o visitante navega para outra página do site.

   PARA TRADUZIR/AJUSTAR UM TEXTO:
   Basta encontrar a chave correspondente aqui embaixo e editar o texto em
   "pt" ou "en". Não é necessário mexer no HTML.

   PARA ADICIONAR um novo texto traduzível a uma página:
   1. Adicione a chave e a tradução aqui no DICTIONARY (dentro de "pt" e "en").
   2. No HTML, adicione data-i18n="sua.chave.aqui" no elemento desejado.
   ========================================================================== */

var DICTIONARY = {

  /* ---------- Comum a todas as páginas (menu, rodapé) ---------- */
  pt: {
    "common.nav.home": "Home",
    "common.nav.institucional": "Institucional",
    "common.nav.importexport": "Importação e Exportação",
    "common.nav.info": "Informações Úteis",
    "common.nav.contact": "Contato",
    "common.nav.cta": "Fale Conosco",

    "common.footer.desc": "Soluções completas em comércio exterior, assessoria aduaneira e logística internacional.",
    "common.footer.nav_title": "Navegação",
    "common.footer.contact_title": "Contato",
    "common.footer.address_html": "Av. Praia de Belas 1212, Cj. 1422<br />Praia de Belas — Porto Alegre, RS<br /><br /><a href=\"mailto:contato@interlogbrasil.com.br\" class=\"footer-email\">contato@interlogbrasil.com.br</a>",
    "common.footer.rights": "© 2026 Interlog Brasil. Todos os direitos reservados.",

    "common.topbar.address": "Av. Praia de Belas 1212 Cj. 1422 — Praia de Belas, Porto Alegre",

    /* ---------- Home (index.html) ---------- */
    "meta.title.home": "Interlog Brasil — Comércio Exterior e Assessoria Aduaneira",
    "home.hero.eyebrow": "Especialistas em Comércio Exterior",
    "home.hero.title1": "Assessoria",
    "home.hero.title2": "Aduaneira",
    "home.hero.desc": "Todas as informações técnicas que você ou sua empresa necessitam na hora de importar ou exportar. Suporte especializado, do planejamento à entrega.",
    "home.hero.btn1": "Nossos Serviços",
    "home.hero.btn2": "Fale com um Especialista",

    "home.stats.1.label": "Anos de experiência",
    "home.stats.2.label": "Operações realizadas",
    "home.stats.3.label": "Países atendidos",
    "home.stats.4.label": "Satisfação dos clientes",

    "home.services.eyebrow": "O que fazemos",
    "home.services.title1": "Nossos",
    "home.services.title2": "Serviços",
    "home.services.see_all": "Ver todos os serviços",

    "home.service.1.title": "Fretes Internacionais",
    "home.service.1.desc": "Soluções completas em frete marítimo, aéreo e terrestre para sua carga.",
    "home.service.2.title": "Assessoria Aduaneira",
    "home.service.2.desc": "Orientação técnica completa em legislação e procedimentos aduaneiros.",
    "home.service.3.title": "Desembaraço Aduaneiro",
    "home.service.3.desc": "Processo ágil e seguro para liberação de mercadorias na alfândega.",
    "home.service.4.title": "Administração Logística",
    "home.service.4.desc": "Gestão integrada da sua cadeia logística de ponta a ponta.",
    "home.service.more": "Saiba mais",

    "home.info.dollar.title": "Cotação Dólar",
    "home.info.dollar.note": "Observação: Para pagamento de frete favor consultar o departamento financeiro para obter a cotação vigente.",
    "home.info.dollar.link": "Conversor de Moedas — Banco Central",
    "home.info.dollar.updated": "Atualizado em 15/08/2026 às 09:00 — Fonte: Banco Central do Brasil",

    "home.info.ie.title": "Importação e Exportação",
    "home.info.ie.p1": "Importação e exportação são atividades de rotina de muitas empresas. As particularidades na documentação necessária para viabilizar estas atividades, bem como a legislação, variam de país para país.",
    "home.info.ie.p2_html": "Nós, da <strong>Interlog Brasil</strong>, somos especialistas no assunto, ofertando todo o suporte necessário à sua empresa — do planejamento à liberação da carga.",
    "home.info.ie.btn": "Saiba mais →",

    /* ---------- Institucional ---------- */
    "meta.title.institucional": "Institucional — Interlog Brasil",
    "institucional.page_title": "Institucional",
    "institucional.p1_html": "A <strong>Interlog Brasil Transportes Internacionais Ltda</strong> é uma empresa de pequeno porte com sede no centro de Porto Alegre, Rio Grande do Sul e há 11 (onze) anos atua no mercado de logística internacional.",
    "institucional.p2": "Quando a empresa foi criada, em 2002, chamava-se Interprise Despachos Aduaneiros e Representações Ltda., sendo seu foco a prestação de serviços na área de despacho aduaneiro. Contudo, logo os sócios perceberam que para haver crescimento era necessário o aumento da oferta de serviços. Para alcançar este objetivo a empresa fez parceria com a Interlog USA (Estados Unidos da América) no final de 2003, surgindo assim a Interlog Brasil.",
    "institucional.p3": "Com o passar dos anos, a empresa foi se consolidando no mercado de comércio exterior, adquiriu a fidelidade de uma gama de clientes, além de firmar contratos com agentes de cargas localizados nos mais diversos países, como Itália, França, Inglaterra, África do Sul, China, Índia, Canadá, Argentina e claro, Estados Unidos. Tudo isso, colaborou para que a empresa conseguisse autonomia frente à Interlog USA e finalmente, a desvinculação com a mesma em 2011.",
    "institucional.p4": "Atualmente, a empresa preocupa-se principalmente em prestar um serviço ágil e qualificado aos clientes, focando em uma logística integrada, assessorando nos trâmites burocráticos tanto na importação quanto na exportação, incluindo a coleta da mercadoria na origem, despacho aduaneiro e, transporte multimodal até o destino final.",

    "institucional.ethics.heading": "Conduta de Ética",
    "institucional.ethics.item1": "Temos a preocupação de que nossas relações sejam pautadas pela ética.",
    "institucional.ethics.item2": "Estabelecemos relação responsável junto à clientes, fornecedores e parceiros.",
    "institucional.ethics.item3": "A conduta imparcial e justa conduz nossos negócios.",
    "institucional.ethics.item4": "Não usamos de instrumentos duvidosos em benefício próprio.",
    "institucional.ethics.item5": "Realizamos nosso trabalho em equipe através da cooperação mútua.",
    "institucional.ethics.item6": "Cada colaborador é consciente do seu papel dentro da empresa e de suas responsabilidades no intuito de alcançarmos a excelência em nossos serviços prestados.",
    "institucional.ethics.item7": "Preservamos a confidencialidade e resguardamos nossa marca que é nosso maior patrimônio.",

    "institucional.vision.heading": "Visão",
    "institucional.vision.text": "Ser referência na prestação de serviços logísticos e de assessoria aduaneira.",

    "institucional.mission.heading": "Missão",
    "institucional.mission.text": "Oferecer serviços com excelência e através da nossa competência, sermos reconhecidos pelos resultados proporcionados. Para tanto nortearemos nossas ações pela ética, transparência e desenvolvimento humano.",

    "institucional.values.heading": "Princípios e Valores",
    "institucional.values.item1": "Trabalhar com honestidade, profissionalismo e transparência;",
    "institucional.values.item2": "Colaborar para o sucesso de nossos clientes, atendendo suas especificações de modo a satisfazer suas necessidades;",
    "institucional.values.item3": "Promover o crescimento e a consolidação da nossa marca;",
    "institucional.values.item4": "Assegurar a motivação e o comprometimento dos nossos colaboradores na utilização do sistema de qualidade;",
    "institucional.values.item5": "Investir em tecnologia e no desenvolvimento de nossos colaboradores.",

    /* ---------- Importação e Exportação ---------- */
    "meta.title.importexport": "Importação e Exportação — Interlog Brasil",
    "importexport.page_title": "Importação e Exportação",
    "importexport.import.heading": "Importação",
    "importexport.assessoria.heading": "Serviços de assessoria Aduaneira:",
    "importexport.assessoria.item1": "Recebimento e análise de todos os documentos;",
    "importexport.assessoria.item2": "Solicitação de correção de faturas e/ou outros documentos, se necessário;",
    "importexport.assessoria.item3": "Solicitação de numerário, após o recebimento da instrução de desembaraço;",
    "importexport.assessoria.item4": "Pagar ou recolher todas as taxas, despesas e impostos;",
    "importexport.assessoria.item5": "Emissão e registro da DI no Siscomex;",
    "importexport.assessoria.item6": "Providenciar o desembaraço da mercadoria, observando um menor prazo de liberação e economia de armazenagem;",
    "importexport.assessoria.item7": "Isenção do ICMS quando cabível;",
    "importexport.assessoria.item8": "Emissão de nota fiscal de entrada e a nota fiscal complementar;",
    "importexport.assessoria.item9": "Análise e controle dos prazos de demurrage;",
    "importexport.assessoria.item10": "Assessoramento e assessoria em classificação tarifária;",
    "importexport.assessoria.item11": "Levantamento de documentos em caso de fiscalização ou auditoria;",
    "importexport.assessoria.item12": "Follow-up junto a cias aéreas, marítimas e rodoviárias;",
    "importexport.assessoria.item13": "Assessoramento e consultoria nas importações de equipamentos e processos atípicos tais como admissão temporária, material usado, ex-tarifário, etc;",
    "importexport.assessoria.item14": "Elaborar planilhas de custos quando solicitado;",
    "importexport.assessoria.item15": "Providenciar remoção ou entreposto quando solicitado;",
    "importexport.assessoria.item16": "Retificar DIs, se necessário;",

    "importexport.agenciamento.heading": "Agenciamento de carga Internacional:",
    "importexport.agenciamento.item1": "Cotação de frete marítimo",
    "importexport.agenciamento.item2": "Cotação de frete aéreo",
    "importexport.agenciamento.item3": "Embarque marítimo de cargas consolidadas (LCL)",
    "importexport.agenciamento.item4": "Embarque marítimo de cargas Full Container (FCL)",
    "importexport.agenciamento.item5": "Embarque Aéreo",

    "importexport.export.heading": "Exportação",
    "importexport.exportacao.item1": "Confecção de documentos: proforma invoice, commercial invoice, packing list;",
    "importexport.exportacao.item2": "Emissão de Certificados: Origem e FORM A;",
    "importexport.exportacao.item3": "Analise de Carta de Credito;",
    "importexport.exportacao.item4": "Preparação de Cambio;",
    "importexport.exportacao.item5": "Emissão de R.E. e D.D.E. (DSE);",
    "importexport.exportacao.item6": "Liberação junto a Receita Federal;",
    "importexport.exportacao.item7": "Recolhimento de taxas aeroportuárias e portuárias para posterior repasse ao exportador;",
    "importexport.exportacao.item8": "Consultoria e Analise de INCOTERMS;",
    "importexport.exportacao.item9": "Embarques em regime DOOR-TO-DOOR;",
    "importexport.exportacao.item10": "Fechamentos de frete e reservas de praça;",
    "importexport.exportacao.item11": "Coordenação de embarques aéreos e marítimos junto a outros despachantes;",
    "importexport.exportacao.item12": "Consolidação de cargas aéreas e marítimas;",
    "importexport.exportacao.item13": "Controle de averbação de despachos aduaneiros;",
    "importexport.exportacao.item14": "Mapeamento de containers;",
    "importexport.exportacao.item15": "Cargas de Projeto;",
    "importexport.exportacao.item16": "Feiras Internacionais;",

    /* ---------- Informações Úteis ---------- */
    "meta.title.info": "Informações Úteis — Interlog Brasil",
    "info.page_title": "Informações Úteis",
    "info.intro": "Selecione um dos recursos disponíveis no menu ao lado para acessar informações técnicas sobre comércio exterior.",

    "info.card.incoterms.title": "Incoterms",
    "info.card.incoterms.desc": "Regras internacionais de comércio que definem responsabilidades entre vendedor e comprador.",
    "info.card.incoterms.cta": "Ver detalhes →",
    "info.card.currency.title": "Conversor de Moedas",
    "info.card.currency.desc": "Acesse o conversor de moedas oficial do Banco Central do Brasil.",
    "info.card.currency.cta": "Acessar →",
    "info.card.containers.title": "Especificação Containers",
    "info.card.containers.desc": "Dimensões, pesos e capacidades dos principais tipos de containers.",
    "info.card.containers.cta": "Ver detalhes →",

    "sidebar.incoterms": "Incoterms",
    "sidebar.currency": "Conversor de Moedas",
    "sidebar.containers": "Especificação Containers",

    /* ---------- Incoterms ---------- */
    "meta.title.incoterms": "Incoterms — Interlog Brasil",
    "incoterms.page_title": "Incoterms",
    "incoterms.intro": "Os INCOTERMS são divididos em duas classes:",
    "incoterms.section1.heading": "1. Termos para qualquer modal de transporte",
    "incoterms.section2.heading": "2. Termos exclusivos para transporte marítimo",
    "incoterms.practice.heading": "Pontos de Atenção",

    "incoterm.EXW.name": "EX WORKS (... local de entrega nomeado)",
    "incoterm.EXW.desc": "A única responsabilidade do Vendedor é disponibilizar a mercadoria em suas instalações. O Comprador arca com todos os custos e riscos de transportá-la dali até o destino.",
    "incoterm.FCA.name": "FREE CARRIER (... local de entrega nomeado)",
    "incoterm.FCA.desc": "O Vendedor entrega a mercadoria, desembaraçada para exportação, ao transportador escolhido pelo Comprador. O Vendedor carrega a mercadoria se a coleta for feita em suas instalações. A partir daí, o Comprador arca com os custos e riscos de transportá-la até o destino.",
    "incoterm.CPT.name": "CARRIAGE PAID TO (... local de destino nomeado)",
    "incoterm.CPT.desc": "O Vendedor paga pelo transporte da mercadoria até o destino. A partir do momento em que a mercadoria é entregue ao primeiro transportador, o Comprador assume os riscos de perda ou dano.",
    "incoterm.CIP.name": "CARRIAGE AND INSURANCE PAID TO (... local de destino nomeado)",
    "incoterm.CIP.desc": "O Vendedor paga pelo transporte da mercadoria até o destino. A partir do momento em que a mercadoria é entregue ao primeiro transportador, o Comprador assume os riscos de perda ou dano. O Vendedor, porém, contrata o seguro da carga.",
    "incoterm.DAT.name": "DELIVERED AT TERMINAL (... terminal nomeado no porto ou local de destino)",
    "incoterm.DAT.desc": "O Vendedor efetua a entrega quando a mercadoria, uma vez descarregada do meio de transporte, é colocada à disposição do Comprador em um terminal nomeado no porto ou local de destino. O Vendedor assume todos os riscos envolvidos em levar e descarregar a mercadoria no terminal.",
    "incoterm.DAP.name": "DELIVERED AT PLACE (... local de destino nomeado)",
    "incoterm.DAP.desc": "O Vendedor efetua a entrega quando a mercadoria é colocada à disposição do Comprador no meio de transporte, pronta para ser descarregada, no local de destino nomeado. O Vendedor assume todos os riscos envolvidos em levar a mercadoria até o local nomeado.",
    "incoterm.DDP.name": "DELIVERED DUTY PAID (... local nomeado)",
    "incoterm.DDP.desc": "O Vendedor entrega a mercadoria — desembaraçada para importação — ao Comprador no destino. O Vendedor arca com todos os custos e riscos de transportá-la até o destino, incluindo o pagamento de impostos e taxas alfandegárias.",

    "incoterm.FAS.name": "FREE ALONGSIDE SHIP (... porto de embarque nomeado)",
    "incoterm.FAS.desc": "O Vendedor entrega a mercadoria no porto de origem. A partir daí, o Comprador arca com todos os custos e riscos de perda ou dano.",
    "incoterm.FOB.name": "FREE ON BOARD (... porto de embarque nomeado)",
    "incoterm.FOB.desc": "O Vendedor entrega a mercadoria a bordo do navio e a desembaraça para exportação. A partir daí, o Comprador arca com todos os custos e riscos de perda ou dano.",
    "incoterm.CFR.name": "COST AND FREIGHT (... porto de destino nomeado)",
    "incoterm.CFR.desc": "O Vendedor desembaraça a mercadoria para exportação e paga os custos de transportá-la até o destino. O Comprador arca com todos os riscos de perda ou dano.",
    "incoterm.CIF.name": "COST INSURANCE AND FREIGHT (... porto de destino nomeado)",
    "incoterm.CIF.desc": "O Vendedor desembaraça a mercadoria para exportação e paga os custos de transportá-la até o porto de destino. O Comprador arca com todos os riscos de perda ou dano. O Vendedor, porém, contrata o seguro da carga.",

    "practice.1.title": "Seja Específico",
    "practice.1.text": "Ao usar os INCOTERMS em um Contrato de Venda ou Pedido de Compra, identifique a regra apropriada (ex.: FCA, CPT, etc.), indique \"INCOTERMS 2010\" e especifique o local ou porto com a maior precisão possível.",
    "practice.2.title": "Saiba onde o risco de perda é transferido",
    "practice.2.text": "Um equívoco comum é achar que, quando o Vendedor paga o frete, ele também assume o risco de perda até a mercadoria chegar ao local ou porto indicado no conhecimento de embarque. Na verdade, ao usar CPT, CIP, CFR ou CIF, o risco passa ao Comprador quando o Vendedor entrega a mercadoria ao transportador na origem, não quando ela chega ao destino. Em CIP e CIF, o Vendedor só é obrigado a contratar seguro com cobertura mínima.",
    "practice.3.title": "Entenda os custos de carga e descarga",
    "practice.3.text": "O DAT obriga o Vendedor a colocar a mercadoria à disposição do Comprador após a descarga no terminal nomeado no porto ou local de destino. Já o DAP e o DDP obrigam o Vendedor a colocar a mercadoria à disposição do Comprador no transportador, <em>pronta para ser descarregada</em>, no local de destino nomeado.",
    "practice.4.title": "Declarações alfandegárias nos EUA",
    "practice.4.text": "O DDP é o único INCOTERM em que o Vendedor é responsável pelas declarações de entrada na alfândega dos EUA. Um fator importante a considerar ao pedir que o Vendedor seja responsável pelo transporte internacional é que, em cargas marítimas, um Importer Security Filing (ISF) deve ser enviado eletronicamente à alfândega 24 horas antes do carregamento no navio. O ISF não se aplica a cargas aéreas.",
    "practice.5.title": "Avalie a importância da visibilidade da cadeia logística",
    "practice.5.text": "Quando se usa CPT, CIP, CFR ou CIF, o Vendedor cumpre sua obrigação de entrega ao entregar a mercadoria ao transportador, não quando ela chega ao destino. Em DAT, DAP e DDP, o Vendedor cumpre sua obrigação de entrega apenas no destino nomeado. O Vendedor não tem obrigação de fornecer atualizações sobre o status do transporte.",

    /* ---------- Especificação de Containers ---------- */
    "meta.title.containers": "Especificação de Containers — Interlog Brasil",
    "containers.page_title": "Especificação Containers",
    "containers.intro.dry": "Standard Dry Cargo Container — carga geral seca em três tamanhos.",
    "containers.intro.opentop": "Open Top Container — sem teto, ideal para cargas altas ou de difícil acesso lateral.",
    "containers.intro.flatrack": "Flat Rack Container — sem paredes laterais, para cargas extra-largas ou extra-pesadas.",
    "containers.intro.reefer": "Refrigerated Container — contêiner frigorífico para cargas que necessitam de controle de temperatura.",

    "table.header.spec": "Especificação",
    "table.header.detail": "Detalhe",
    "table.header.measure": "Medida",

    "row.external_dim": "Dimensão Externa",
    "row.internal_dim": "Dimensão Interna",
    "row.length": "Comprimento",
    "row.width": "Largura",
    "row.height": "Altura",
    "row.capacity": "Capacidade",
    "row.cubic": "Medidas Cúbicas",
    "row.tare": "Tarra",
    "row.max_weight": "Peso Máximo",
    "row.gross_weight": "Peso Bruto",
    "row.open_doors": "Portas Abertas",

    "caption.dry20": "Standard Dry Cargo Container 20' (S2)",
    "caption.dry40": "Standard Dry Cargo Container 40' (S4)",
    "caption.dry40hc": "Standard Dry Cargo Container 40' High Cube (C4)",
    "caption.opentop20": "Open Top Container 20' (P2)",
    "caption.opentop40": "Open Top Container 40' (P4)",
    "caption.flatrack20": "Flat Rack Container 20' (F2)",
    "caption.flatrack40": "Flat Rack 40'",
    "caption.flatbed40": "Flat Bed 40'",
    "caption.reefer20": "20' Container Refrigerado (20' Reefer)",
    "caption.reefer40hc": "40' Container Refrigerado (40' High Cube)",

    /* ---------- Contato ---------- */
    "meta.title.contato": "Contato — Interlog Brasil",
    "contato.page_title": "Contato",
    "contato.address.heading": "Endereço:",
    "contato.address.html": "Av. Praia de Belas 1212 Cj. 1422<br />Praia de Belas — Porto Alegre — RS — Brasil",
    "contato.form.heading": "Formulário de Contato:",
    "contato.form.label_name": "Seu nome",
    "contato.form.label_email": "Seu E-mail",
    "contato.form.label_message": "Mensagem",
    "contato.form.placeholder_name": "Seu nome",
    "contato.form.placeholder_message": "Escreva sua mensagem...",
    "contato.form.submit": "Enviar Mensagem",
    "contato.success.title": "Mensagem enviada com sucesso!",
    "contato.success.sub": "Entraremos em contato em breve.",
    "contato.success.btn": "Enviar outra mensagem",
    "contato.error.empty": "Por favor, preencha todos os campos antes de enviar.",
    "contato.error.email": "Por favor, digite um e-mail válido."
  },

  en: {
    "common.nav.home": "Home",
    "common.nav.institucional": "About Us",
    "common.nav.importexport": "Import & Export",
    "common.nav.info": "Useful Information",
    "common.nav.contact": "Contact",
    "common.nav.cta": "Contact Us",

    "common.footer.desc": "Complete solutions in foreign trade, customs brokerage and international logistics.",
    "common.footer.nav_title": "Navigation",
    "common.footer.contact_title": "Contact",
    "common.footer.address_html": "Av. Praia de Belas 1212, Cj. 1422<br />Praia de Belas — Porto Alegre, RS — Brazil<br /><br /><a href=\"mailto:contato@interlogbrasil.com.br\" class=\"footer-email\">contato@interlogbrasil.com.br</a>",
    "common.footer.rights": "© 2026 Interlog Brasil. All rights reserved.",

    "common.topbar.address": "Av. Praia de Belas 1212 Cj. 1422 — Praia de Belas, Porto Alegre, Brazil",

    /* ---------- Home ---------- */
    "meta.title.home": "Interlog Brasil — Foreign Trade and Customs Brokerage",
    "home.hero.eyebrow": "Foreign Trade Specialists",
    "home.hero.title1": "Customs",
    "home.hero.title2": "Brokerage",
    "home.hero.desc": "All the technical information you or your company need when importing or exporting. Specialized support, from planning to delivery.",
    "home.hero.btn1": "Our Services",
    "home.hero.btn2": "Talk to a Specialist",

    "home.stats.1.label": "Years of experience",
    "home.stats.2.label": "Operations completed",
    "home.stats.3.label": "Countries served",
    "home.stats.4.label": "Customer satisfaction",

    "home.services.eyebrow": "What we do",
    "home.services.title1": "Our",
    "home.services.title2": "Services",
    "home.services.see_all": "See all services",

    "home.service.1.title": "International Freight",
    "home.service.1.desc": "Complete ocean, air and land freight solutions for your cargo.",
    "home.service.2.title": "Customs Brokerage",
    "home.service.2.desc": "Full technical guidance on customs legislation and procedures.",
    "home.service.3.title": "Customs Clearance",
    "home.service.3.desc": "Fast and secure process for releasing goods at customs.",
    "home.service.4.title": "Logistics Management",
    "home.service.4.desc": "End-to-end integrated management of your supply chain.",
    "home.service.more": "Learn more",

    "home.info.dollar.title": "Dollar Exchange Rate",
    "home.info.dollar.note": "Note: For freight payment, please check with the finance department for the current exchange rate.",
    "home.info.dollar.link": "Currency Converter — Central Bank",
    "home.info.dollar.updated": "Updated on 08/15/2026 at 09:00 AM — Source: Central Bank of Brazil",

    "home.info.ie.title": "Import and Export",
    "home.info.ie.p1": "Import and export are routine activities for many companies. The specifics of the documentation required, as well as the legislation, vary from country to country.",
    "home.info.ie.p2_html": "We, at <strong>Interlog Brasil</strong>, are specialists in the field, offering all the support your company needs — from planning to cargo release.",
    "home.info.ie.btn": "Learn more →",

    /* ---------- Institucional / About Us ---------- */
    "meta.title.institucional": "About Us — Interlog Brasil",
    "institucional.page_title": "About Us",
    "institucional.p1_html": "<strong>Interlog Brasil Transportes Internacionais Ltda</strong> is a small company headquartered in downtown Porto Alegre, Rio Grande do Sul, and has been active in the international logistics market for 11 (eleven) years.",
    "institucional.p2": "When the company was founded in 2002, it was called Interprise Despachos Aduaneiros e Representações Ltda., focused on providing customs clearance services. However, the partners soon realized that growth required expanding the range of services offered. To achieve this, the company partnered with Interlog USA (United States of America) at the end of 2003, giving rise to Interlog Brasil.",
    "institucional.p3": "Over the years, the company became established in the foreign trade market, earning the loyalty of a wide range of clients, as well as signing contracts with freight agents located in a variety of countries, such as Italy, France, England, South Africa, China, India, Canada, Argentina, and of course, the United States. All of this helped the company gain autonomy from Interlog USA and, finally, separate from it in 2011.",
    "institucional.p4": "Today, the company's main focus is providing agile, qualified service to clients, centered on integrated logistics, assisting with bureaucratic procedures in both import and export — including collecting the goods at origin, customs clearance, and multimodal transport to the final destination.",

    "institucional.ethics.heading": "Code of Ethics",
    "institucional.ethics.item1": "We are committed to conducting our relationships with ethics.",
    "institucional.ethics.item2": "We build responsible relationships with clients, suppliers and partners.",
    "institucional.ethics.item3": "Fair and impartial conduct guides our business.",
    "institucional.ethics.item4": "We do not use questionable means for our own benefit.",
    "institucional.ethics.item5": "We carry out our work as a team through mutual cooperation.",
    "institucional.ethics.item6": "Each employee is aware of their role within the company and their responsibilities in pursuing excellence in the services we provide.",
    "institucional.ethics.item7": "We preserve confidentiality and safeguard our brand, our greatest asset.",

    "institucional.vision.heading": "Vision",
    "institucional.vision.text": "To be a reference in providing logistics services and customs brokerage.",

    "institucional.mission.heading": "Mission",
    "institucional.mission.text": "To deliver services with excellence and, through our expertise, be recognized for the results we provide. To this end, we guide our actions by ethics, transparency and human development.",

    "institucional.values.heading": "Principles and Values",
    "institucional.values.item1": "Working with honesty, professionalism and transparency;",
    "institucional.values.item2": "Collaborating for our clients' success, meeting their specifications in order to satisfy their needs;",
    "institucional.values.item3": "Promoting the growth and consolidation of our brand;",
    "institucional.values.item4": "Ensuring the motivation and commitment of our employees in using the quality system;",
    "institucional.values.item5": "Investing in technology and in the development of our employees.",

    /* ---------- Import & Export ---------- */
    "meta.title.importexport": "Import & Export — Interlog Brasil",
    "importexport.page_title": "Import and Export",
    "importexport.import.heading": "Import",
    "importexport.assessoria.heading": "Customs Advisory Services:",
    "importexport.assessoria.item1": "Receiving and reviewing all documents;",
    "importexport.assessoria.item2": "Requesting correction of invoices and/or other documents, if necessary;",
    "importexport.assessoria.item3": "Requesting funds after receiving the clearance instructions;",
    "importexport.assessoria.item4": "Paying or collecting all fees, expenses and taxes;",
    "importexport.assessoria.item5": "Issuing and registering the Import Declaration (DI) in Siscomex;",
    "importexport.assessoria.item6": "Arranging for customs clearance of goods, aiming for the shortest release time and storage cost savings;",
    "importexport.assessoria.item7": "ICMS tax exemption when applicable;",
    "importexport.assessoria.item8": "Issuing the entry invoice and the supplementary invoice;",
    "importexport.assessoria.item9": "Reviewing and monitoring demurrage deadlines;",
    "importexport.assessoria.item10": "Advisory and consulting on tariff classification;",
    "importexport.assessoria.item11": "Gathering documents in case of inspection or audit;",
    "importexport.assessoria.item12": "Follow-up with airlines, shipping lines and trucking companies;",
    "importexport.assessoria.item13": "Advisory and consulting for imports of equipment and atypical processes such as temporary admission, used goods, ex-tariff regime, etc;",
    "importexport.assessoria.item14": "Preparing cost spreadsheets upon request;",
    "importexport.assessoria.item15": "Arranging removal or bonded warehousing upon request;",
    "importexport.assessoria.item16": "Amending Import Declarations (DIs), if necessary;",

    "importexport.agenciamento.heading": "International Freight Forwarding:",
    "importexport.agenciamento.item1": "Ocean freight quotation",
    "importexport.agenciamento.item2": "Air freight quotation",
    "importexport.agenciamento.item3": "Ocean shipment of consolidated cargo (LCL)",
    "importexport.agenciamento.item4": "Ocean shipment of Full Container Load cargo (FCL)",
    "importexport.agenciamento.item5": "Air shipment",

    "importexport.export.heading": "Export",
    "importexport.exportacao.item1": "Preparation of documents: proforma invoice, commercial invoice, packing list;",
    "importexport.exportacao.item2": "Issuance of Certificates: Certificate of Origin and FORM A;",
    "importexport.exportacao.item3": "Letter of Credit analysis;",
    "importexport.exportacao.item4": "Foreign exchange preparation;",
    "importexport.exportacao.item5": "Issuance of R.E. and D.D.E. (DSE) export registrations;",
    "importexport.exportacao.item6": "Clearance with the Brazilian Federal Revenue Service;",
    "importexport.exportacao.item7": "Collection of airport and port fees for later pass-through to the exporter;",
    "importexport.exportacao.item8": "INCOTERMS consulting and analysis;",
    "importexport.exportacao.item9": "DOOR-TO-DOOR shipments;",
    "importexport.exportacao.item10": "Freight closing and space bookings;",
    "importexport.exportacao.item11": "Coordination of air and ocean shipments with other freight forwarders;",
    "importexport.exportacao.item12": "Air and ocean cargo consolidation;",
    "importexport.exportacao.item13": "Control of customs clearance registration (averbação);",
    "importexport.exportacao.item14": "Container tracking;",
    "importexport.exportacao.item15": "Project cargo;",
    "importexport.exportacao.item16": "International trade fairs;",

    /* ---------- Useful Information ---------- */
    "meta.title.info": "Useful Information — Interlog Brasil",
    "info.page_title": "Useful Information",
    "info.intro": "Select one of the resources available in the side menu to access technical information about foreign trade.",

    "info.card.incoterms.title": "Incoterms",
    "info.card.incoterms.desc": "International trade rules that define responsibilities between seller and buyer.",
    "info.card.incoterms.cta": "View details →",
    "info.card.currency.title": "Currency Converter",
    "info.card.currency.desc": "Access the official currency converter from the Central Bank of Brazil.",
    "info.card.currency.cta": "Go to converter →",
    "info.card.containers.title": "Container Specifications",
    "info.card.containers.desc": "Dimensions, weights and capacities of the main container types.",
    "info.card.containers.cta": "View details →",

    "sidebar.incoterms": "Incoterms",
    "sidebar.currency": "Currency Converter",
    "sidebar.containers": "Container Specifications",

    /* ---------- Incoterms ---------- */
    "meta.title.incoterms": "Incoterms — Interlog Brasil",
    "incoterms.page_title": "Incoterms",
    "incoterms.intro": "INCOTERMS are grouped into two classes:",
    "incoterms.section1.heading": "1. Terms for any transport mode",
    "incoterms.section2.heading": "2. Maritime-only terms",
    "incoterms.practice.heading": "Practice Points",

    "incoterm.EXW.name": "EX WORKS (... named place of delivery)",
    "incoterm.EXW.desc": "The Seller's only responsibility is to make the goods available at the Seller's premises. The Buyer bears full costs and risks of moving the goods from there to destination.",
    "incoterm.FCA.name": "FREE CARRIER (... named place of delivery)",
    "incoterm.FCA.desc": "The Seller delivers the goods, cleared for export, to the carrier selected by the Buyer. The Seller loads the goods if the carrier pickup is at the Seller's premises. From that point, the Buyer bears the costs and risks of moving the goods to destination.",
    "incoterm.CPT.name": "CARRIAGE PAID TO (... named place of destination)",
    "incoterm.CPT.desc": "The Seller pays for moving the goods to destination. From the time the goods are transferred to the first carrier, the Buyer bears the risks of loss or damage.",
    "incoterm.CIP.name": "CARRIAGE AND INSURANCE PAID TO (... named place of destination)",
    "incoterm.CIP.desc": "The Seller pays for moving the goods to destination. From the time the goods are transferred to the first carrier, the Buyer bears the risks of loss or damage. The Seller, however, purchases the cargo insurance.",
    "incoterm.DAT.name": "DELIVERED AT TERMINAL (... named terminal at port or place of destination)",
    "incoterm.DAT.desc": "The Seller delivers when the goods, once unloaded from the arriving means of transport, are placed at the Buyer's disposal at a named terminal at the named port or place of destination. The Seller bears all risks involved in bringing the goods to and unloading them at the terminal.",
    "incoterm.DAP.name": "DELIVERED AT PLACE (... named place of destination)",
    "incoterm.DAP.desc": "The Seller delivers when the goods are placed at the Buyer's disposal on the arriving means of transport ready for unloading at the named place of destination. The Seller bears all risks involved in bringing the goods to the named place.",
    "incoterm.DDP.name": "DELIVERED DUTY PAID (... named place)",
    "incoterm.DDP.desc": "The Seller delivers the goods — cleared for import — to the Buyer at destination. The Seller bears all costs and risks of moving the goods to destination, including the payment of Customs duties and taxes.",

    "incoterm.FAS.name": "FREE ALONGSIDE SHIP (... named port of shipment)",
    "incoterm.FAS.desc": "The Seller delivers the goods to the origin port. From that point, the Buyer bears all costs and risks of loss or damage.",
    "incoterm.FOB.name": "FREE ON BOARD (... named port of shipment)",
    "incoterm.FOB.desc": "The Seller delivers the goods on board the ship and clears the goods for export. From that point, the Buyer bears all costs and risks of loss or damage.",
    "incoterm.CFR.name": "COST AND FREIGHT (... named port of destination)",
    "incoterm.CFR.desc": "The Seller clears the goods for export and pays the costs of moving the goods to destination. The Buyer bears all risks of loss or damage.",
    "incoterm.CIF.name": "COST INSURANCE AND FREIGHT (... named port of destination)",
    "incoterm.CIF.desc": "The Seller clears the goods for export and pays the costs of moving the goods to the port of destination. The Buyer bears all risks of loss or damage. The Seller, however, purchases the cargo insurance.",

    "practice.1.title": "Be Specific",
    "practice.1.text": "If you use INCOTERMS in the Sales Contract or Purchase Order, you should identify the appropriate INCOTERM Rule (e.g. FCA, CPT, etc.), state \"INCOTERMS 2010\" and specify the place or port as precisely as possible.",
    "practice.2.title": "Recognize where the risk of loss transfers",
    "practice.2.text": "A common misconception when the Seller pays the freight is that the Seller has the risk of loss until the goods are delivered to the place or port specified on the bill of lading or airway bill. Actually, when using INCOTERMS CPT, CIP, CFR or CIF, risk transfers to the Buyer when the Seller hands the goods over to the carrier at origin, not when the goods reach the place or port of destination. Under CIP and CIF, the Seller is only obliged to obtain insurance on minimum cover.",
    "practice.3.title": "Understand loading and unloading charges",
    "practice.3.text": "DAT obliges the Seller to place the goods at the Buyer's disposal after unloading at the named terminal at port or place of destination. DAP and DDP oblige the Seller to place the goods at the Buyer's disposal on the delivering carrier <em>ready for unloading</em> at the named place of destination.",
    "practice.4.title": "U.S. Customs entry declarations",
    "practice.4.text": "DDP is the only INCOTERM where the Seller has responsibility for U.S. Customs entry declarations. An important factor to be considered when asking the Seller to be responsible for international carriage, is if the goods ship by Ocean Freight, an Importer Security Filing (ISF) must be electronically submitted to Customs 24 hours before the cargo is laden on the vessel. The ISF does not apply to airfreight shipments.",
    "practice.5.title": "Determine the importance of supply chain visibility",
    "practice.5.text": "When CPT, CIP, CFR or CIF are used the Seller fulfills its obligation to deliver when it hands the goods over to the carrier, not when the goods reach the place of destination. DAT, DAP and DDP the Seller fulfills its obligation to deliver at the named destination. The Seller has no obligation to provide transit status updates.",

    /* ---------- Container Specifications ---------- */
    "meta.title.containers": "Container Specifications — Interlog Brasil",
    "containers.page_title": "Container Specifications",
    "containers.intro.dry": "Standard Dry Cargo Container — general dry cargo in three sizes.",
    "containers.intro.opentop": "Open Top Container — no roof, ideal for tall cargo or cargo that's hard to load from the side.",
    "containers.intro.flatrack": "Flat Rack Container — no side walls, for extra-wide or extra-heavy cargo.",
    "containers.intro.reefer": "Refrigerated Container — reefer container for cargo that requires temperature control.",

    "table.header.spec": "Specification",
    "table.header.detail": "Detail",
    "table.header.measure": "Measurement",

    "row.external_dim": "External Dimensions",
    "row.internal_dim": "Internal Dimensions",
    "row.length": "Length",
    "row.width": "Width",
    "row.height": "Height",
    "row.capacity": "Capacity",
    "row.cubic": "Cubic Capacity",
    "row.tare": "Tare Weight",
    "row.max_weight": "Max Payload",
    "row.gross_weight": "Gross Weight",
    "row.open_doors": "Door Opening",

    "caption.dry20": "Standard Dry Cargo Container 20' (S2)",
    "caption.dry40": "Standard Dry Cargo Container 40' (S4)",
    "caption.dry40hc": "Standard Dry Cargo Container 40' High Cube (C4)",
    "caption.opentop20": "Open Top Container 20' (P2)",
    "caption.opentop40": "Open Top Container 40' (P4)",
    "caption.flatrack20": "Flat Rack Container 20' (F2)",
    "caption.flatrack40": "Flat Rack 40'",
    "caption.flatbed40": "Flat Bed 40'",
    "caption.reefer20": "20' Refrigerated Container (20' Reefer)",
    "caption.reefer40hc": "40' Refrigerated Container (40' High Cube)",

    /* ---------- Contact ---------- */
    "meta.title.contato": "Contact — Interlog Brasil",
    "contato.page_title": "Contact",
    "contato.address.heading": "Address:",
    "contato.address.html": "Av. Praia de Belas 1212 Cj. 1422<br />Praia de Belas — Porto Alegre — RS — Brazil",
    "contato.form.heading": "Contact Form:",
    "contato.form.label_name": "Your name",
    "contato.form.label_email": "Your Email",
    "contato.form.label_message": "Message",
    "contato.form.placeholder_name": "Your name",
    "contato.form.placeholder_message": "Write your message...",
    "contato.form.submit": "Send Message",
    "contato.success.title": "Message sent successfully!",
    "contato.success.sub": "We'll get back to you shortly.",
    "contato.success.btn": "Send another message",
    "contato.error.empty": "Please fill in all fields before sending.",
    "contato.error.email": "Please enter a valid email address."
  }
};


/* ============================================================================
   FUNÇÕES DE TRADUÇÃO
   ========================================================================== */

/**
 * getCurrentLang()
 * -----------------------------------------------------------------------
 * Retorna o idioma atualmente salvo no navegador ("pt" ou "en").
 * Se o visitante nunca escolheu um idioma antes, o padrão é "pt".
 */
function getCurrentLang() {
  return localStorage.getItem('interlog_lang') || 'pt';
}

/**
 * t(key)
 * -----------------------------------------------------------------------
 * Busca a tradução de uma "chave" no idioma atual. Útil para usar dentro
 * de outras funções JavaScript (ex.: mensagens de erro do formulário em
 * js/script.js). Se a chave não existir, retorna a própria chave (isso
 * ajuda a identificar rapidamente uma tradução esquecida).
 */
function t(key) {
  var lang = getCurrentLang();
  return (DICTIONARY[lang] && DICTIONARY[lang][key]) || key;
}

/**
 * applyLanguage(lang)
 * -----------------------------------------------------------------------
 * Aplica o idioma "lang" ("pt" ou "en") em toda a página atual:
 *  - Troca o texto de todo elemento com atributo data-i18n
 *  - Troca o HTML interno de todo elemento com atributo data-i18n-html
 *    (permite textos com tags como <strong>/<em>/<br> dentro)
 *  - Troca o "placeholder" de todo elemento com atributo data-i18n-placeholder
 *  - Atualiza o atributo lang="" da tag <html>
 *  - Marca o botão BR/EN correspondente como ativo
 *  - Salva a escolha no navegador para persistir ao navegar entre páginas
 */
function applyLanguage(lang) {
  var dict = DICTIONARY[lang];
  if (!dict) return;

  // Texto simples
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // HTML interno (quando o texto precisa de tags, ex.: <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Placeholders de campos de formulário
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  // Atributo de idioma do documento (bom para acessibilidade e SEO)
  document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');

  // Atualiza visualmente qual botão (BR / EN) está marcado como ativo
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    var isActive = btn.getAttribute('data-lang') === (lang === 'en' ? 'EN' : 'BR');
    btn.classList.toggle('active', isActive);
  });

  // Salva a preferência para as próximas páginas/visitas
  localStorage.setItem('interlog_lang', lang);
}

/**
 * initLanguageSwitch()
 * -----------------------------------------------------------------------
 * Liga os cliques dos botões BR / EN à função applyLanguage(), e aplica
 * automaticamente o idioma salvo assim que a página carrega — garantindo
 * que o idioma escolhido pelo visitante "acompanhe" a navegação entre as
 * páginas do site.
 */
function initLanguageSwitch() {
  // Aplica o idioma já salvo (ou "pt" por padrão) assim que a página abre
  applyLanguage(getCurrentLang());

  var langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang') === 'EN' ? 'en' : 'pt';
      applyLanguage(lang);
    });
  });
}

document.addEventListener('DOMContentLoaded', initLanguageSwitch);
