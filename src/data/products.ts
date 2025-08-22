export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  howToUse: string;
  testimonials: string[];
  faqs: { question: string; answer: string }[];
  differentials: string[];
  keywords: string[];
  affiliateLink: string;
  category: 'tecnologia' | 'saude' | 'educacao' | 'beleza' | 'negocio';
  metaTitle: string;
  metaDescription: string;
}

const baseProducts: Product[] = [
  {
    id: 'lovable-ia',
    name: 'Lovable IA',
    shortDescription: 'Crie códigos de SaaS em segundos com inteligência artificial',
    fullDescription: 'Lovable IA é a plataforma revolucionária que permite criar aplicações SaaS completas em segundos usando inteligência artificial avançada. Com uma interface intuitiva e poderosa engine de IA, você pode transformar ideias em produtos digitais funcionais sem precisar ser um desenvolvedor expert.',
    benefits: [
      'Desenvolvimento até 10x mais rápido',
      'Interface drag-and-drop intuitiva',
      'Código limpo e profissional gerado automaticamente',
      'Integração com principais APIs do mercado',
      'Deploy automático e hospedagem incluída',
      'Suporte técnico especializado 24/7'
    ],
    howToUse: 'Acesse a plataforma, descreva sua ideia de SaaS, customize os componentes através da interface visual e publique seu produto em minutos. A IA cuida de toda a complexidade técnica.',
    testimonials: [
      'Criei meu primeiro SaaS em menos de 1 hora! Incrível como a IA entende exatamente o que queremos. - João Silva, Empreendedor',
      'Economizei mais de R$ 50.000 em desenvolvimento. O Lovable IA é um divisor de águas para startups. - Maria Santos, CEO Tech Startup'
    ],
    faqs: [
      { question: 'Preciso saber programar?', answer: 'Não! A plataforma é 100% visual e a IA gera todo o código necessário.' },
      { question: 'Posso customizar o design?', answer: 'Sim, você tem controle total sobre cores, layouts e componentes.' },
      { question: 'Há limite de projetos?', answer: 'Depende do plano escolhido, mas mesmo o plano básico oferece recursos generosos.' }
    ],
    differentials: [
      'Única plataforma que combina IA com desenvolvimento visual',
      'Deploy automático em infraestrutura de alta performance',
      'Comunidade ativa de desenvolvedores e criadores',
      'Atualizações constantes com novas funcionalidades'
    ],
    keywords: ['desenvolvimento', 'saas', 'inteligencia artificial', 'no-code', 'automação'],
    affiliateLink: 'https://lovable.dev/?via=marcelo-barbosa',
    category: 'tecnologia',
    metaTitle: 'Lovable IA - Crie SaaS em Segundos com Inteligência Artificial',
    metaDescription: 'Desenvolva aplicações SaaS completas em segundos com Lovable IA. Interface visual, código profissional, deploy automático. Transforme ideias em produtos digitais!'
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    shortDescription: 'Hospedagem de sites premium com domínios inclusos',
    fullDescription: 'A Hostinger é líder mundial em hospedagem web, oferecendo soluções completas para sites, e-commerce e aplicações. Com tecnologia de ponta, suporte 24/7 e preços acessíveis, é a escolha ideal para quem quer presença digital profissional.',
    benefits: [
      'Velocidade de carregamento ultra-rápida',
      'SSL grátis e segurança avançada',
      'Painel de controle intuitivo',
      'Backup automático diário',
      'Suporte técnico especializado 24/7',
      'Construtor de sites gratuito incluído'
    ],
    howToUse: 'Escolha seu plano, registre seu domínio, configure sua hospedagem através do painel intuitivo e publique seu site. O processo é simples e rápido.',
    testimonials: [
      'Migrei meu e-commerce para a Hostinger e as vendas aumentaram 40% devido à velocidade. - Carlos Mendes, Empreendedor Digital',
      'Suporte excepcional! Sempre que preciso, eles resolvem rapidamente. - Ana Costa, Blogueira'
    ],
    faqs: [
      { question: 'Qual a diferença entre os planos?', answer: 'Os planos variam em recursos como armazenamento, largura de banda e número de sites.' },
      { question: 'Posso migrar meu site atual?', answer: 'Sim! A Hostinger oferece migração gratuita de sites.' },
      { question: 'Há garantia de uptime?', answer: 'Sim, garantimos 99.9% de uptime com SLA.' }
    ],
    differentials: [
      'Infraestrutura global com servidores em vários países',
      'Tecnologia LiteSpeed para máxima performance',
      'Certificados SSL gratuitos para todos os domínios',
      'WordPress otimizado e gerenciado'
    ],
    keywords: ['hospedagem', 'dominio', 'site', 'wordpress', 'ssl'],
    affiliateLink: 'https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB',
    category: 'tecnologia',
    metaTitle: 'Hostinger - Hospedagem Premium e Domínios com Desconto',
    metaDescription: 'Hospedagem web ultra-rápida da Hostinger. SSL grátis, suporte 24/7, backup automático. Ideal para sites, blogs e e-commerce. Experimente agora!'
  },
  {
    id: 'formula-negocio-online',
    name: 'Fórmula Negócio Online',
    shortDescription: 'Curso completo para criar seu negócio digital do zero',
    fullDescription: 'O Fórmula Negócio Online do Alex Vargas é o curso mais completo para quem quer criar um negócio digital lucrativo. Com metodologia testada e aprovada, ensina desde a criação do produto até as estratégias avançadas de marketing digital.',
    benefits: [
      'Metodologia testada por milhares de alunos',
      'Acompanhamento personalizado',
      'Comunidade exclusiva de empreendedores',
      'Ferramentas e templates prontos',
      'Garantia de satisfação de 7 dias',
      'Atualizações vitalícias do conteúdo'
    ],
    howToUse: 'Após a inscrição, acesse a plataforma exclusiva, siga os módulos na sequência recomendada, implemente as estratégias e participe da comunidade para acelerar seus resultados.',
    testimonials: [
      'Em 3 meses já estava faturando R$ 15.000/mês com infoprodutos. O FNO mudou minha vida! - Pedro Oliveira, Ex-funcionário',
      'Saí do zero e hoje tenho uma empresa digital de 6 dígitos. Gratidão eterna ao Alex! - Fernanda Lima, Empreendedora'
    ],
    faqs: [
      { question: 'Funciona para qualquer nicho?', answer: 'Sim! A metodologia se aplica a qualquer mercado digital.' },
      { question: 'Preciso de capital inicial?', answer: 'Não necessariamente. Ensinamos como começar com baixo investimento.' },
      { question: 'Quanto tempo para ver resultados?', answer: 'Muitos alunos veem primeiros resultados em 30-60 dias aplicando corretamente.' }
    ],
    differentials: [
      'Único curso que ensina todo o ecossistema digital',
      'Casos reais de sucesso documentados',
      'Suporte direto do Alex Vargas e sua equipe',
      'Metodologia atualizada constantemente'
    ],
    keywords: ['negocio digital', 'empreendedorismo', 'marketing digital', 'infoprodutos', 'renda extra'],
    affiliateLink: 'https://go.hotmart.com/E11195793E',
    category: 'negocio',
    metaTitle: 'Fórmula Negócio Online - Crie Seu Negócio Digital Lucrativo',
    metaDescription: 'Aprenda a criar um negócio digital lucrativo com o curso Fórmula Negócio Online. Metodologia comprovada, comunidade exclusiva. Comece hoje!'
  },
  {
    id: 'carteira-estudante-digital',
    name: 'Carteira Nacional do Estudante Digital',
    shortDescription: 'Economize 50% em ingressos com desconto estudantil',
    fullDescription: 'A Carteira Nacional do Estudante Digital é seu passaporte para economias significativas em cinema, teatro, shows e eventos culturais. Reconhecida nacionalmente, garante desconto de até 50% em estabelecimentos credenciados.',
    benefits: [
      'Desconto de até 50% em ingressos',
      'Válida em todo território nacional',
      'Processo 100% digital',
      'Reconhecimento oficial',
      'Entrega rápida por email',
      'Suporte para dúvidas e renovação'
    ],
    howToUse: 'Faça seu pedido online, envie a documentação necessária, receba sua carteira digital por email e comece a economizar imediatamente em estabelecimentos credenciados.',
    testimonials: [
      'Já economizei mais de R$ 500 em ingressos de cinema! Vale cada centavo. - Lucas Ferreira, Estudante',
      'Processo super rápido e a carteira funciona perfeitamente. Recomendo! - Isabela Santos, Universitária'
    ],
    faqs: [
      { question: 'Quem pode solicitar?', answer: 'Estudantes regularmente matriculados em instituições de ensino reconhecidas.' },
      { question: 'Quanto tempo demora?', answer: 'Processamento em até 5 dias úteis após envio da documentação.' },
      { question: 'Onde posso usar?', answer: 'Em cinemas, teatros, shows e eventos culturais credenciados em todo Brasil.' }
    ],
    differentials: [
      'Processo 100% online e seguro',
      'Carteira com validade estendida',
      'Suporte especializado para estudantes',
      'Base de dados atualizada de estabelecimentos'
    ],
    keywords: ['carteira estudante', 'desconto', 'cinema', 'teatro', 'cultura'],
    affiliateLink: 'https://app.monetizze.com.br/r/AWH25502896',
    category: 'educacao',
    metaTitle: 'Carteira do Estudante Digital - Desconto de 50% em Ingressos',
    metaDescription: 'Garanta sua Carteira do Estudante Digital e economize até 50% em cinema, teatro e shows. Processo online, entrega rápida. Solicite agora!'
  },
  {
    id: 'carteira-estudante-fisica',
    name: 'Carteira Nacional do Estudante Física e Digital',
    shortDescription: 'Versão completa com carteira física e digital',
    fullDescription: 'O kit completo da Carteira Nacional do Estudante inclui tanto a versão física quanto digital, oferecendo máxima flexibilidade e aceitação. Ideal para quem quer garantia total de reconhecimento em qualquer estabelecimento.',
    benefits: [
      'Carteira física e digital incluídas',
      'Aceitação garantida em 100% dos locais',
      'Material de alta qualidade',
      'Entrega nacional via correios',
      'Backup digital sempre disponível',
      'Validade estendida'
    ],
    howToUse: 'Solicite o kit completo, envie sua documentação, receba primeiro a versão digital por email e depois a física pelos correios. Use conforme sua necessidade.',
    testimonials: [
      'Ter as duas versões me dá total segurança. Nunca fico sem desconto! - Mariana Costa, Estudante',
      'A carteira física tem qualidade excelente e a digital é super prática. - Rafael Silva, Universitário'
    ],
    faqs: [
      { question: 'Qual a diferença para só a digital?', answer: 'Inclui também a carteira física de alta qualidade enviada pelos correios.' },
      { question: 'Prazo de entrega da física?', answer: 'De 7 a 15 dias úteis dependendo da região.' },
      { question: 'Posso usar as duas?', answer: 'Sim! Use a digital no celular e a física quando necessário.' }
    ],
    differentials: [
      'Único kit que oferece as duas modalidades',
      'Carteira física em material premium',
      'Rastreamento de entrega incluído',
      'Garantia de reposição em caso de extravio'
    ],
    keywords: ['carteira estudante fisica', 'kit completo', 'desconto estudante', 'cinema barato'],
    affiliateLink: 'https://app.monetizze.com.br/r/AEG25503067',
    category: 'educacao',
    metaTitle: 'Kit Carteira do Estudante Física + Digital - Desconto Garantido',
    metaDescription: 'Kit completo com Carteira do Estudante física e digital. Máxima aceitação, qualidade premium. Economize 50% em ingressos em todo Brasil!'
  },
  {
    id: 'agenciagram',
    name: 'Agênciagram',
    shortDescription: 'Ganhe seguidores reais no Instagram rapidamente',
    fullDescription: 'Agênciagram é a solução completa para crescimento orgânico no Instagram. Com estratégias comprovadas e ferramentas avançadas, ajuda você a ganhar seguidores reais, engajamento genuíno e aumentar sua presença digital de forma consistente.',
    benefits: [
      'Crescimento 100% orgânico e seguro',
      'Seguidores reais e engajados',
      'Ferramentas de automação inteligente',
      'Análises detalhadas de performance',
      'Suporte especializado',
      'Resultados em até 7 dias'
    ],
    howToUse: 'Configure sua conta, defina seu público-alvo, ative as ferramentas de crescimento e acompanhe o aumento gradual de seguidores e engajamento através do painel de controle.',
    testimonials: [
      'Saí de 500 para 15k seguidores em 3 meses. Meu negócio decolou! - Juliana Rocha, Influencer',
      'Finalmente seguidores que realmente se interessam pelo meu conteúdo. - Diego Santos, Coach'
    ],
    faqs: [
      { question: 'É seguro para minha conta?', answer: 'Sim! Usamos apenas métodos orgânicos aprovados pelo Instagram.' },
      { question: 'Quanto tempo para ver resultados?', answer: 'Primeiros resultados aparecem em 3-7 dias de uso.' },
      { question: 'Funciona para qualquer nicho?', answer: 'Sim, nossa metodologia se adapta a todos os nichos.' }
    ],
    differentials: [
      'Algoritmo proprietário de crescimento',
      'Compliance total com políticas do Instagram',
      'Seguidores de alta qualidade',
      'Dashboard com métricas em tempo real'
    ],
    keywords: ['seguidores instagram', 'crescimento organico', 'marketing digital', 'influencer', 'redes sociais'],
    affiliateLink: 'https://app.monetizze.com.br/r/ALZ12471991',
    category: 'negocio',
    metaTitle: 'Agênciagram - Ganhe Seguidores Reais no Instagram',
    metaDescription: 'Aumente seus seguidores no Instagram com Agênciagram. Crescimento orgânico, seguidores reais, resultados em 7 dias. Transforme seu perfil!'
  },
  {
    id: 'mounja-slim',
    name: 'Mounja Slim',
    shortDescription: 'O segredo para perda de peso rápida e saudável',
    fullDescription: 'Mounja Slim revoluciona o emagrecimento com fórmula natural avançada. Desenvolvido com ingredientes cientificamente comprovados, acelera o metabolismo, reduz a fome e promove queima de gordura de forma segura e eficaz.',
    benefits: [
      'Acelera o metabolismo naturalmente',
      'Reduz a sensação de fome',
      'Queima gordura localizada',
      'Aumenta a energia e disposição',
      'Fórmula 100% natural',
      'Resultados visíveis em semanas'
    ],
    howToUse: 'Tome 2 cápsulas pela manhã com água, 30 minutos antes do café da manhã. Mantenha alimentação equilibrada e pratique atividades físicas regulares para potencializar os resultados.',
    testimonials: [
      'Perdi 12kg em 2 meses sem passar fome! Inacreditável! - Sandra Lima, 42 anos',
      'Finalmente um produto que funciona de verdade. Recomendo! - Roberto Carlos, 38 anos'
    ],
    faqs: [
      { question: 'Tem efeitos colaterais?', answer: 'Não, a fórmula é 100% natural e segura para consumo.' },
      { question: 'Quanto tempo de tratamento?', answer: 'Recomendamos uso contínuo por 3-6 meses para resultados duradouros.' },
      { question: 'Funciona sem dieta?', answer: 'Sim, mas uma alimentação equilibrada potencializa os resultados.' }
    ],
    differentials: [
      'Fórmula exclusiva com 7 ingredientes ativos',
      'Testado e aprovado por nutricionistas',
      'Sem estimulantes prejudiciais',
      'Produzido em laboratório certificado'
    ],
    keywords: ['emagrecimento', 'perda peso', 'queima gordura', 'suplemento natural', 'metabolismo'],
    affiliateLink: 'https://app.monetizze.com.br/r/AJZ25504136',
    category: 'saude',
    metaTitle: 'Mounja Slim - Emagrecimento Rápido e Saudável Natural',
    metaDescription: 'Perca peso de forma rápida e saudável com Mounja Slim. Fórmula natural avançada, acelera metabolismo, reduz fome. Resultados comprovados!'
  },
  {
    id: 'hidraliso',
    name: 'Hidraliso',
    shortDescription: 'Alisante de chuveiro - Liso em minutos, simples e prático',
    fullDescription: 'Hidraliso é o alisante revolucionário que proporciona cabelos lisos e hidratados diretamente no chuveiro. Sem formol, sem ardência e sem cheiro, oferece praticidade máxima com resultados profissionais na primeira aplicação.',
    benefits: [
      'Liso instantâneo já na primeira aplicação',
      'Sem formol, sem ardência, sem cheiro',
      'Hidrata profundamente os fios',
      'Não desbota nem amarela o cabelo',
      'Compatível com qualquer química',
      'Economia e praticidade no uso'
    ],
    howToUse: 'Aplique no cabelo úmido durante o banho, distribua uniformemente, deixe agir por 3-5 minutos, enxágue e finalize como desejar. Use 2-3 vezes por semana.',
    testimonials: [
      'Meu cabelo ficou liso e sedoso sem sair de casa! Praticidade total. - Carla Mendes, Cabeleireira',
      'Resultado igual ao salão, mas no conforto do meu banheiro. - Patricia Silva, Empresária'
    ],
    faqs: [
      { question: 'Funciona em cabelo crespo?', answer: 'Sim! Funciona em todos os tipos de cabelo, inclusive crespos e cacheados.' },
      { question: 'Prejudica a cor do cabelo?', answer: 'Não! É seguro para cabelos coloridos, descoloridos e com químicas.' },
      { question: 'Quanto tempo dura o efeito?', answer: 'O efeito dura até a próxima lavagem, mas com uso regular os fios ficam mais lisos.' }
    ],
    differentials: [
      'Único alisante para usar no chuveiro',
      'Fórmula exclusiva sem produtos tóxicos',
      'Resultado profissional em casa',
      'Economia de tempo e dinheiro'
    ],
    keywords: ['alisante', 'cabelo liso', 'tratamento capilar', 'hidratação', 'praticidade'],
    affiliateLink: 'https://app.monetizze.com.br/r/AWW11504208',
    category: 'beleza',
    metaTitle: 'Hidraliso - Alisante de Chuveiro para Cabelos Lisos Instantâneos',
    metaDescription: 'Tenha cabelos lisos e hidratados com Hidraliso. Alisante de chuveiro sem formol, sem cheiro. Resultado profissional em casa. Experimente!'
  },
  {
    id: 'nutra-vida',
    name: 'Nutra Vida',
    shortDescription: 'Testado & aprovado - 2 cápsulas ao dia para engravidar',
    fullDescription: 'Nutra Vida é o suplemento revolucionário desenvolvido especificamente para mulheres que desejam engravidar. Com fórmula avançada de vitaminas e minerais essenciais, auxilia na fertilidade e prepara o organismo para uma gravidez saudável.',
    benefits: [
      'Melhora a fertilidade feminina',
      'Prepara o organismo para gravidez',
      'Rico em ácido fólico e vitaminas',
      'Auxilia em casos de PCOS e endometriose',
      'Regulamenta o ciclo menstrual',
      'Testado e aprovado por especialistas'
    ],
    howToUse: 'Tome 2 cápsulas ao dia, preferencialmente pela manhã com água. Use continuamente conforme orientação médica para melhores resultados.',
    testimonials: [
      'Após 4 meses usando Nutra Vida, finalmente consegui engravidar! - Melissa Santos, 32 anos',
      'Meu ciclo regulou e hoje sou mãe de gêmeos! Gratidão eterna. - Carla Rodrigues, 29 anos'
    ],
    faqs: [
      { question: 'Funciona para todos os casos?', answer: 'Nutra Vida auxilia em diversos casos, mas recomendamos acompanhamento médico.' },
      { question: 'Quanto tempo para ver resultados?', answer: 'Muitas mulheres veem melhoras no ciclo em 30-60 dias de uso.' },
      { question: 'Tem contraindicações?', answer: 'Consulte seu médico antes de usar, especialmente se tem outras condições.' }
    ],
    differentials: [
      'Fórmula específica para fertilidade',
      'Aprovado por ginecologistas',
      'Ingredientes de alta absorção',
      'Milhares de casos de sucesso'
    ],
    keywords: ['fertilidade', 'engravidar', 'gravidez', 'suplemento feminino', 'acido folico'],
    affiliateLink: 'https://app.monetizze.com.br/r/AXC25503421',
    category: 'saude',
    metaTitle: 'Nutra Vida - Suplemento para Fertilidade e Gravidez Saudável',
    metaDescription: 'Aumente suas chances de engravidar com Nutra Vida. Fórmula avançada para fertilidade, rica em ácido fólico. Testado e aprovado por especialistas!'
  },
  {
    id: 'fignar',
    name: 'Fignar',
    shortDescription: 'Melhore a saúde do seu fígado com apenas 20 gotas',
    fullDescription: 'Fignar é o suplemento natural que promove a saúde hepática completa. Com extratos vegetais concentrados, desintoxica, regenera e protege o fígado, melhorando sua função e bem-estar geral.',
    benefits: [
      'Desintoxica o fígado naturalmente',
      'Regenera células hepáticas',
      'Melhora a digestão',
      'Reduz fadiga e cansaço',
      'Fortalece o sistema imunológico',
      'Apenas 20 gotas por dia'
    ],
    howToUse: 'Tome 20 gotas em meio copo de água, 2 vezes ao dia, preferencialmente antes das refeições principais.',
    testimonials: [
      'Meus exames hepáticos melhoraram significativamente em 2 meses! - João Carlos, 45 anos',
      'Sinto muito mais disposição e energia. Produto excelente! - Maria Fernanda, 38 anos'
    ],
    faqs: [
      { question: 'É seguro para uso prolongado?', answer: 'Sim, é feito com ingredientes naturais seguros para uso contínuo.' },
      { question: 'Posso usar com medicamentos?', answer: 'Consulte seu médico se faz uso de medicamentos para o fígado.' },
      { question: 'Quanto tempo para sentir resultados?', answer: 'Muitos usuários relatam melhora na disposição em 2-3 semanas.' }
    ],
    differentials: [
      'Fórmula líquida de alta absorção',
      'Extratos vegetais concentrados',
      'Sem açúcar e sem álcool',
      'Dosagem prática e eficaz'
    ],
    keywords: ['saude figado', 'desintoxicacao', 'hepatico', 'digestao', 'natural'],
    affiliateLink: 'https://app.monetizze.com.br/r/APP25503419',
    category: 'saude',
    metaTitle: 'Fignar - Saúde do Fígado com 20 Gotas Naturais por Dia',
    metaDescription: 'Cuide da saúde do seu fígado com Fignar. Desintoxica, regenera e protege em apenas 20 gotas. Fórmula natural concentrada. Experimente!'
  },
  {
    id: 'sb2-black',
    name: 'SB2 Black',
    shortDescription: 'Transforme seu corpo neste verão - Entre em forma',
    fullDescription: 'SB2 Black é o queimador de gordura mais potente do mercado. Com fórmula termogênica avançada, acelera o metabolismo, queima gordura e define músculos, transformando seu corpo rapidamente.',
    benefits: [
      'Queima gordura acelerada',
      'Aumenta o metabolismo',
      'Define músculos rapidamente',
      'Reduz medidas e peso',
      'Aumenta energia para treinos',
      'Resultados visíveis em semanas'
    ],
    howToUse: 'Tome 2 cápsulas pela manhã em jejum e 1 cápsula antes do treino. Não exceda 3 cápsulas por dia.',
    testimonials: [
      'Perdi 8kg e ganhei definição muscular em 1 mês! Impressionante! - Ricardo Alves, Personal Trainer',
      'Meu corpo mudou completamente. Estou no melhor shape da vida! - Amanda Costa, Influencer'
    ],
    faqs: [
      { question: 'Pode causar insônia?', answer: 'Evite tomar após 18h. A fórmula é termogênica mas balanceada.' },
      { question: 'Precisa de dieta?', answer: 'Para melhores resultados, combine com alimentação equilibrada.' },
      { question: 'Funciona sem exercício?', answer: 'Sim, mas exercícios potencializam muito os resultados.' }
    ],
    differentials: [
      'Fórmula termogênica avançada',
      'Ingredientes importados premium',
      'Testado por atletas profissionais',
      'Resultados rápidos e duradouros'
    ],
    keywords: ['queimador gordura', 'termogenico', 'definicao muscular', 'emagrecimento rapido'],
    affiliateLink: 'https://app.monetizze.com.br/r/ASS25503415',
    category: 'saude',
    metaTitle: 'SB2 Black - Queimador de Gordura Termogênico Avançado',
    metaDescription: 'Transforme seu corpo com SB2 Black. Queimador termogênico potente, acelera metabolismo, define músculos. Entre em forma rapidamente!'
  },
  {
    id: 'new-detox',
    name: 'New Detox',
    shortDescription: 'Emagreça com saúde, de forma natural sem gastar fortuna',
    fullDescription: 'New Detox é o método revolucionário de emagrecimento natural que está transformando vidas. Com ingredientes detoxificantes poderosos, elimina toxinas, acelera o metabolismo e promove perda de peso saudável.',
    benefits: [
      'Desintoxicação completa do organismo',
      'Acelera o metabolismo naturalmente',
      'Reduz inchaço e retenção de líquidos',
      'Melhora digestão e intestino',
      'Aumenta energia e disposição',
      'Perda de peso natural e saudável'
    ],
    howToUse: 'Misture 1 sachê em 200ml de água gelada, tome 30 minutos antes do almoço e jantar. Use por no mínimo 30 dias.',
    testimonials: [
      'Perdi 15kg em 3 meses e me sinto renovada! Método incrível! - Letícia Gomes, 35 anos',
      'Além de emagrecer, minha pele melhorou muito. Super recomendo! - Patrícia Lima, 42 anos'
    ],
    faqs: [
      { question: 'Tem sabor ruim?', answer: 'Não! Tem sabor agradável de frutas vermelhas.' },
      { question: 'Causa diarreia?', answer: 'Não. A fórmula é balanceada para detox suave.' },
      { question: 'Grávidas podem usar?', answer: 'Não recomendamos para grávidas e lactantes.' }
    ],
    differentials: [
      'Método 100% natural',
      'Sem efeitos colaterais',
      'Detoxifica enquanto emagrece',
      'Aprovado por nutricionistas'
    ],
    keywords: ['detox', 'emagrecimento natural', 'desintoxicacao', 'perda peso saudavel'],
    affiliateLink: 'https://app.monetizze.com.br/r/ALW20871672',
    category: 'saude',
    metaTitle: 'New Detox - Emagrecimento Natural e Detoxificação Completa',
    metaDescription: 'Emagreça com saúde usando New Detox. Método natural de detoxificação, acelera metabolismo, elimina toxinas. Transforme sua vida!'
  },
  {
    id: 'slim-gota-black',
    name: 'Slim Gota Black',
    shortDescription: 'Poder em cada gota - Adeus gordura teimosa',
    fullDescription: 'Slim Gota Black é o tratamento revolucionário em gotas que elimina gordura localizada teimosa. Com tecnologia de absorção rápida, ataca diretamente as células adiposas, promovendo queima intensa de gordura.',
    benefits: [
      'Elimina gordura localizada',
      'Absorção ultra-rápida',
      'Ataca células adiposas diretamente',
      'Reduz medidas rapidamente',
      'Acelera metabolismo local',
      'Fácil de usar - apenas gotas'
    ],
    howToUse: 'Pingue 10 gotas embaixo da língua, 3 vezes ao dia, 30 minutos antes das refeições. Segure por 1 minuto antes de engolir.',
    testimonials: [
      'Perdi 6cm de cintura em 1 mês! As gotas são milagrosas! - Fernanda Silva, 28 anos',
      'Gordura da barriga que não saia há anos, finalmente desapareceu! - Carlos Santos, 40 anos'
    ],
    faqs: [
      { question: 'Funciona em qualquer idade?', answer: 'Sim, eficaz para adultos de todas as idades.' },
      { question: 'Tem sabor forte?', answer: 'Tem sabor suave e agradável.' },
      { question: 'Quanto tempo usar?', answer: 'Recomendamos uso por 90 dias para resultados ótimos.' }
    ],
    differentials: [
      'Tecnologia exclusiva de gotas',
      'Absorção sublingual rápida',
      'Fórmula concentrada',
      'Prático para usar em qualquer lugar'
    ],
    keywords: ['gotas emagrecimento', 'gordura localizada', 'sublingual', 'queima rapida'],
    affiliateLink: 'https://app.monetizze.com.br/r/AUZ21258214',
    category: 'saude',
    metaTitle: 'Slim Gota Black - Gotas Potentes Contra Gordura Localizada',
    metaDescription: 'Elimine gordura teimosa com Slim Gota Black. Tecnologia em gotas sublingais, absorção rápida, resultados visíveis. Adeus gordura localizada!'
  }
];

const additionalProducts: Product[] = [
  {
    id: 'kit-restart-intestinal',
    name: 'Kit Restart Intestinal',
    shortDescription: 'Desintoxicação e renascimento intestinal - Livre de inflamações',
    fullDescription: 'O Kit Restart Intestinal é um programa completo de desintoxicação que promove a regeneração do seu sistema digestivo. Com ingredientes naturais poderosos, elimina toxinas, reduz inflamações e restaura a saúde intestinal para uma vida mais plena e energética.',
    benefits: [
      'Desintoxicação profunda do intestino',
      'Reduz inflamações intestinais',
      'Melhora a absorção de nutrientes',
      'Fortalece a microbiota intestinal',
      'Aumenta energia e disposição',
      'Programa completo de renovação'
    ],
    howToUse: 'Siga o protocolo do kit por 21 dias: tome o produto 1 pela manhã em jejum, o produto 2 antes do almoço e o produto 3 antes do jantar. Mantenha alimentação saudável durante o período.',
    testimonials: [
      'Em 3 semanas senti uma transformação completa! Energia renovada e digestão perfeita. - Ana Paula, 34 anos',
      'Problemas intestinais que tinha há anos sumiram. Kit revolucionário! - Roberto Silva, 41 anos'
    ],
    faqs: [
      { question: 'Quanto tempo dura o kit?', answer: 'O kit completo tem duração de 21 dias seguindo o protocolo recomendado.' },
      { question: 'Pode causar desconforto?', answer: 'Nos primeiros dias é normal sentir leve desconforto devido à desintoxicação.' },
      { question: 'Posso repetir o protocolo?', answer: 'Sim, pode repetir a cada 3-6 meses para manter os benefícios.' }
    ],
    differentials: [
      'Kit completo com protocolo específico',
      'Fórmulas sinérgicas que potencializam resultados',
      'Acompanhamento nutricional incluído',
      'Ingredientes 100% naturais'
    ],
    keywords: ['desintoxicacao intestinal', 'saude digestiva', 'inflamacao', 'microbiota', 'detox'],
    affiliateLink: 'https://app.monetizze.com.br/r/ACN25503403',
    category: 'saude',
    metaTitle: 'Kit Restart Intestinal - Desintoxicação e Renovação Digestiva',
    metaDescription: 'Renove sua saúde intestinal com o Kit Restart. Desintoxicação profunda, reduz inflamações, fortalece microbiota. Programa completo de 21 dias!'
  }
];

// Combinar todos os produtos
export const products = [...baseProducts, ...additionalProducts];