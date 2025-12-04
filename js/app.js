// Gerenciamento de Vagas
let vagas = [];

// Inicializar vagas do localStorage ou usar dados padrão
function inicializarVagas() {
    const vagasSalvas = localStorage.getItem('vagas');
    
    if (vagasSalvas) {
        try {
            const vagasParsed = JSON.parse(vagasSalvas);
            // Verificar se tem pelo menos 50 vagas
            if (vagasParsed && Array.isArray(vagasParsed) && vagasParsed.length >= 50) {
                vagas = vagasParsed;
                return; // Já tem vagas suficientes, não precisa recriar
            }
            // Se tem menos de 50, precisa recriar
        } catch (e) {
            console.error('Erro ao carregar vagas do localStorage:', e);
        }
    }
    
    // Se chegou aqui, precisa criar as vagas
        // Dados iniciais de exemplo - Mais de 50 vagas
        vagas = [
            {
                id: 1,
                titulo: "Bolsa de Estudo em Tecnologia da Informação",
                tipo: "Bolsa de Estudo",
                area: "TI",
                duracao: "1 ano",
                descricao: "Oportunidade única para estudantes brasileiros interessados em tecnologia. Programa completo de bolsa de estudo na NYU (New York University) com foco em desenvolvimento de software, inteligência artificial e ciência de dados. Inclui mentoria profissional e networking com empresas de tecnologia.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa mensal de $2000", "Acomodação", "Seguro saúde", "Mentoria profissional"],
                status: "publicada"
            },
            {
                id: 2,
                titulo: "Estágio em Business Development",
                tipo: "Estágio",
                area: "Business",
                duracao: "6 meses",
                descricao: "Estágio remunerado em uma das maiores empresas de consultoria de Nova York. Oportunidade de trabalhar com projetos internacionais e desenvolver habilidades em estratégia de negócios, marketing e vendas.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $3000/mês", "Visto de trabalho", "Networking"],
                status: "publicada"
            },
            {
                id: 3,
                titulo: "Programa de Voluntariado em Artes",
                tipo: "Voluntariado",
                area: "Artes",
                duracao: "3 meses",
                descricao: "Programa de voluntariado em museus e galerias de arte de Nova York. Ideal para estudantes de artes, design ou história da arte que desejam experiência prática em instituições culturais renomadas.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado"],
                status: "publicada"
            },
            {
                id: 4,
                titulo: "Bolsa de Pesquisa em Saúde Pública",
                tipo: "Bolsa de Estudo",
                area: "Saúde",
                duracao: "2 anos",
                descricao: "Bolsa de pesquisa em saúde pública na Columbia University. Programa de mestrado com foco em políticas de saúde, epidemiologia e gestão de sistemas de saúde. Ideal para profissionais da área de saúde.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa mensal de $2500", "Acomodação", "Seguro saúde", "Material de estudo"],
                status: "publicada"
            },
            {
                id: 5,
                titulo: "Estágio em Engenharia de Software",
                tipo: "Estágio",
                area: "TI",
                duracao: "6 meses",
                descricao: "Estágio em uma startup de tecnologia em Nova York. Trabalhe com as mais recentes tecnologias web e mobile, participe de projetos inovadores e desenvolva suas habilidades técnicas em um ambiente dinâmico.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $3500/mês", "Visto de trabalho", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 6,
                titulo: "Programa de Intercâmbio em Educação",
                tipo: "Bolsa de Estudo",
                area: "Educação",
                duracao: "1 ano",
                descricao: "Programa de intercâmbio para professores e estudantes de pedagogia. Experiência em escolas públicas de Nova York, aprendendo métodos de ensino inovadores e práticas educacionais.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Bolsa mensal de $1800", "Acomodação", "Material didático"],
                status: "publicada"
            },
            {
                id: 7,
                titulo: "Estágio em Engenharia Civil",
                tipo: "Estágio",
                area: "Engenharia",
                duracao: "1 ano",
                descricao: "Estágio em uma das maiores empresas de engenharia civil dos EUA. Trabalhe em projetos de infraestrutura urbana, aprenda sobre construção sustentável e desenvolva sua carreira internacional.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Salário de $4000/mês", "Visto de trabalho", "Treinamento técnico"],
                status: "publicada"
            },
            {
                id: 8,
                titulo: "Voluntariado em Organizações Sociais",
                tipo: "Voluntariado",
                area: "Saúde",
                duracao: "6 meses",
                descricao: "Oportunidade de voluntariado em organizações sem fins lucrativos que trabalham com comunidades carentes em Nova York. Ideal para estudantes de serviço social, psicologia ou saúde pública.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Experiência prática"],
                status: "publicada"
            },
            {
                id: 9,
                titulo: "Bolsa de Mestrado em Ciência de Dados",
                tipo: "Bolsa de Estudo",
                area: "TI",
                duracao: "2 anos",
                descricao: "Programa completo de mestrado em Ciência de Dados na Columbia University com bolsa integral. Foco em machine learning, big data e análise estatística. Inclui oportunidades de pesquisa e estágio em empresas de tecnologia.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa integral", "Acomodação", "Seguro saúde", "Material de estudo", "Laptop"],
                status: "publicada"
            },
            {
                id: 10,
                titulo: "Estágio em Marketing Digital",
                tipo: "Estágio",
                area: "Business",
                duracao: "6 meses",
                descricao: "Estágio em agência de marketing digital líder em Nova York. Trabalhe com campanhas para grandes marcas, aprenda sobre SEO, SEM, redes sociais e marketing de conteúdo. Ambiente criativo e dinâmico.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $2800/mês", "Visto de trabalho", "Treinamento", "Networking"],
                status: "publicada"
            },
            {
                id: 11,
                titulo: "Voluntariado no Museu de Arte Moderna (MoMA)",
                tipo: "Voluntariado",
                area: "Artes",
                duracao: "3 meses",
                descricao: "Voluntariado no renomado MoMA de Nova York. Aprenda sobre curadoria, exposições e gestão de museus. Ideal para estudantes de artes, museologia ou história da arte.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Acesso gratuito a exposições"],
                status: "publicada"
            },
            {
                id: 12,
                titulo: "Bolsa de Residência Médica",
                tipo: "Bolsa de Estudo",
                area: "Saúde",
                duracao: "3 anos",
                descricao: "Programa de residência médica em hospital universitário de Nova York. Especialização em medicina interna com foco em pesquisa clínica. Reconhecimento internacional.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa mensal de $5000", "Acomodação", "Seguro saúde", "Material médico"],
                status: "publicada"
            },
            {
                id: 13,
                titulo: "Estágio em Desenvolvimento Mobile",
                tipo: "Estágio",
                area: "TI",
                duracao: "6 meses",
                descricao: "Estágio em empresa de tecnologia focada em aplicativos móveis. Desenvolva apps iOS e Android usando as tecnologias mais modernas. Trabalhe em projetos reais com milhões de usuários.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $3800/mês", "Visto de trabalho", "MacBook Pro", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 14,
                titulo: "Programa de Intercâmbio para Professores de Inglês",
                tipo: "Bolsa de Estudo",
                area: "Educação",
                duracao: "1 ano",
                descricao: "Programa para professores de inglês brasileiros. Ensine português em escolas de Nova York enquanto aprimora seu inglês. Experiência cultural única e desenvolvimento profissional.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Bolsa mensal de $2200", "Acomodação", "Material didático", "Certificado"],
                status: "publicada"
            },
            {
                id: 15,
                titulo: "Estágio em Engenharia Mecânica",
                tipo: "Estágio",
                area: "Engenharia",
                duracao: "1 ano",
                descricao: "Estágio em empresa de engenharia mecânica especializada em projetos automotivos e aeroespaciais. Trabalhe com design, prototipagem e testes. Oportunidade de trabalhar em projetos inovadores.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Salário de $4200/mês", "Visto de trabalho", "Treinamento técnico", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 16,
                titulo: "Voluntariado em Hospital Infantil",
                tipo: "Voluntariado",
                area: "Saúde",
                duracao: "6 meses",
                descricao: "Voluntariado em hospital infantil de Nova York. Apoie crianças e famílias, participe de atividades recreativas e aprenda sobre cuidados pediátricos. Experiência emocionalmente enriquecedora.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Experiência prática"],
                status: "publicada"
            },
            {
                id: 17,
                titulo: "Bolsa de Doutorado em Inteligência Artificial",
                tipo: "Bolsa de Estudo",
                area: "TI",
                duracao: "4 anos",
                descricao: "Programa de doutorado em IA no MIT (Massachusetts Institute of Technology). Pesquisa de ponta em deep learning, visão computacional e processamento de linguagem natural. Bolsa completa com estipêndio.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa completa", "Estipêndio de $3500/mês", "Acomodação", "Seguro saúde", "Material"],
                status: "publicada"
            },
            {
                id: 18,
                titulo: "Estágio em Consultoria Financeira",
                tipo: "Estágio",
                area: "Business",
                duracao: "6 meses",
                descricao: "Estágio em consultoria financeira de renome internacional. Trabalhe com análise de investimentos, planejamento financeiro e estratégias corporativas. Ambiente profissional de alto nível.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $4500/mês", "Visto de trabalho", "Treinamento", "Bônus"],
                status: "publicada"
            },
            {
                id: 19,
                titulo: "Voluntariado em Teatro Off-Broadway",
                tipo: "Voluntariado",
                area: "Artes",
                duracao: "3 meses",
                descricao: "Voluntariado em teatro Off-Broadway. Participe da produção de espetáculos, aprenda sobre direção, cenografia e produção teatral. Experiência única no mundo das artes cênicas.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Ingressos gratuitos"],
                status: "publicada"
            },
            {
                id: 20,
                titulo: "Bolsa de Pesquisa em Enfermagem",
                tipo: "Bolsa de Estudo",
                area: "Saúde",
                duracao: "2 anos",
                descricao: "Bolsa de pesquisa em enfermagem na NYU. Programa de mestrado com foco em cuidados críticos e pesquisa clínica. Ideal para enfermeiros que desejam especialização.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa mensal de $2300", "Acomodação", "Seguro saúde", "Material"],
                status: "publicada"
            },
            {
                id: 21,
                titulo: "Estágio em Cibersegurança",
                tipo: "Estágio",
                area: "TI",
                duracao: "6 meses",
                descricao: "Estágio em empresa líder em cibersegurança. Aprenda sobre proteção de dados, análise de vulnerabilidades e resposta a incidentes. Área em alta demanda.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $4000/mês", "Visto de trabalho", "Certificações", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 22,
                titulo: "Programa de Intercâmbio em Educação Especial",
                tipo: "Bolsa de Estudo",
                area: "Educação",
                duracao: "1 ano",
                descricao: "Programa para educadores especializados. Trabalhe em escolas de Nova York com crianças com necessidades especiais. Aprenda métodos inovadores de ensino inclusivo.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Bolsa mensal de $2000", "Acomodação", "Material didático", "Certificado"],
                status: "publicada"
            },
            {
                id: 23,
                titulo: "Estágio em Engenharia Elétrica",
                tipo: "Estágio",
                area: "Engenharia",
                duracao: "1 ano",
                descricao: "Estágio em empresa de engenharia elétrica. Trabalhe com projetos de energia renovável, sistemas elétricos e automação. Contribua para projetos sustentáveis.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Salário de $4100/mês", "Visto de trabalho", "Treinamento", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 24,
                titulo: "Voluntariado em Abrigo para Animais",
                tipo: "Voluntariado",
                area: "Saúde",
                duracao: "3 meses",
                descricao: "Voluntariado em abrigo de animais de Nova York. Cuide de animais abandonados, participe de campanhas de adoção e aprenda sobre bem-estar animal. Experiência gratificante.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado"],
                status: "publicada"
            },
            {
                id: 25,
                titulo: "Bolsa de MBA em Finanças",
                tipo: "Bolsa de Estudo",
                area: "Business",
                duracao: "2 anos",
                descricao: "MBA em Finanças na Stern School of Business (NYU). Programa completo com bolsa parcial. Foco em finanças corporativas, investimentos e gestão de risco. Networking com executivos.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa de 50%", "Acomodação", "Material", "Networking"],
                status: "publicada"
            },
            {
                id: 26,
                titulo: "Estágio em UX/UI Design",
                tipo: "Estágio",
                area: "TI",
                duracao: "6 meses",
                descricao: "Estágio em empresa de design digital. Crie interfaces intuitivas e experiências de usuário excepcionais. Trabalhe com designers renomados e aprenda as melhores práticas.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $3200/mês", "Visto de trabalho", "Software licenciado", "Portfolio"],
                status: "publicada"
            },
            {
                id: 27,
                titulo: "Voluntariado em Galeria de Arte Contemporânea",
                tipo: "Voluntariado",
                area: "Artes",
                duracao: "3 meses",
                descricao: "Voluntariado em galeria de arte contemporânea no Chelsea. Aprenda sobre mercado de arte, curadoria e gestão de galerias. Conheça artistas e colecionadores.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Networking"],
                status: "publicada"
            },
            {
                id: 28,
                titulo: "Bolsa de Pesquisa em Psicologia Clínica",
                tipo: "Bolsa de Estudo",
                area: "Saúde",
                duracao: "2 anos",
                descricao: "Programa de mestrado em psicologia clínica na Columbia University. Pesquisa em saúde mental, terapia cognitivo-comportamental e intervenções psicológicas.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa mensal de $2400", "Acomodação", "Seguro saúde", "Material"],
                status: "publicada"
            },
            {
                id: 29,
                titulo: "Estágio em DevOps",
                tipo: "Estágio",
                area: "TI",
                duracao: "6 meses",
                descricao: "Estágio em empresa de tecnologia focada em DevOps. Trabalhe com CI/CD, containers, cloud computing e automação. Aprenda as ferramentas mais modernas do mercado.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $3900/mês", "Visto de trabalho", "Certificações AWS", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 30,
                titulo: "Programa de Intercâmbio em Educação Infantil",
                tipo: "Bolsa de Estudo",
                area: "Educação",
                duracao: "1 ano",
                descricao: "Programa para educadores infantis. Trabalhe em creches e pré-escolas de Nova York. Aprenda métodos de ensino lúdico e desenvolvimento infantil.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Bolsa mensal de $1900", "Acomodação", "Material didático", "Certificado"],
                status: "publicada"
            },
            {
                id: 31,
                titulo: "Estágio em Engenharia Química",
                tipo: "Estágio",
                area: "Engenharia",
                duracao: "1 ano",
                descricao: "Estágio em empresa química. Trabalhe com processos industriais, pesquisa e desenvolvimento de produtos. Contribua para inovações em química verde.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Salário de $4300/mês", "Visto de trabalho", "Treinamento", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 32,
                titulo: "Voluntariado em Organização de Direitos Humanos",
                tipo: "Voluntariado",
                area: "Saúde",
                duracao: "6 meses",
                descricao: "Voluntariado em organização de direitos humanos. Apoie imigrantes, refugiados e comunidades vulneráveis. Trabalhe em projetos de advocacy e assistência legal.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Experiência prática"],
                status: "publicada"
            },
            {
                id: 33,
                titulo: "Bolsa de Mestrado em Arquitetura",
                tipo: "Bolsa de Estudo",
                area: "Artes",
                duracao: "2 anos",
                descricao: "Mestrado em Arquitetura na Pratt Institute. Foco em arquitetura sustentável e design urbano. Trabalhe em projetos reais e desenvolva seu portfólio.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa de 60%", "Acomodação", "Material", "Estúdio"],
                status: "publicada"
            },
            {
                id: 34,
                titulo: "Estágio em Análise de Dados",
                tipo: "Estágio",
                area: "Business",
                duracao: "6 meses",
                descricao: "Estágio em empresa de análise de dados. Trabalhe com Python, SQL e ferramentas de BI. Transforme dados em insights estratégicos para negócios.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $3400/mês", "Visto de trabalho", "Treinamento", "Software"],
                status: "publicada"
            },
            {
                id: 35,
                titulo: "Voluntariado em Biblioteca Pública",
                tipo: "Voluntariado",
                area: "Educação",
                duracao: "3 meses",
                descricao: "Voluntariado na Biblioteca Pública de Nova York. Organize eventos, ajude leitores e aprenda sobre gestão de bibliotecas. Ambiente cultural rico.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Acesso a livros"],
                status: "publicada"
            },
            {
                id: 36,
                titulo: "Bolsa de Pesquisa em Nutrição",
                tipo: "Bolsa de Estudo",
                area: "Saúde",
                duracao: "2 anos",
                descricao: "Programa de mestrado em nutrição com foco em pesquisa. Estude nutrição clínica, saúde pública e políticas alimentares. Trabalhe em projetos de pesquisa.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa mensal de $2200", "Acomodação", "Seguro saúde", "Material"],
                status: "publicada"
            },
            {
                id: 37,
                titulo: "Estágio em Blockchain",
                tipo: "Estágio",
                area: "TI",
                duracao: "6 meses",
                descricao: "Estágio em empresa de blockchain e criptomoedas. Aprenda sobre smart contracts, DeFi e desenvolvimento de aplicações descentralizadas. Tecnologia do futuro.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $4200/mês", "Visto de trabalho", "Treinamento", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 38,
                titulo: "Programa de Intercâmbio em Educação Musical",
                tipo: "Bolsa de Estudo",
                area: "Educação",
                duracao: "1 ano",
                descricao: "Programa para professores de música. Ensine música em escolas de Nova York e aprenda métodos de ensino musical. Participe de orquestras e corais.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Bolsa mensal de $2100", "Acomodação", "Instrumentos", "Certificado"],
                status: "publicada"
            },
            {
                id: 39,
                titulo: "Estágio em Engenharia Ambiental",
                tipo: "Estágio",
                area: "Engenharia",
                duracao: "1 ano",
                descricao: "Estágio em empresa de engenharia ambiental. Trabalhe com projetos de sustentabilidade, tratamento de água e gestão de resíduos. Contribua para um futuro mais verde.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Salário de $4000/mês", "Visto de trabalho", "Treinamento", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 40,
                titulo: "Voluntariado em ONG de Educação",
                tipo: "Voluntariado",
                area: "Educação",
                duracao: "6 meses",
                descricao: "Voluntariado em ONG que oferece educação para crianças carentes. Ensine, organize atividades e faça a diferença na vida de jovens. Experiência transformadora.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Experiência prática"],
                status: "publicada"
            },
            {
                id: 41,
                titulo: "Bolsa de Mestrado em Jornalismo",
                tipo: "Bolsa de Estudo",
                area: "Artes",
                duracao: "2 anos",
                descricao: "Mestrado em Jornalismo na Columbia Journalism School. Aprenda jornalismo investigativo, mídia digital e produção de conteúdo. Trabalhe com profissionais renomados.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa de 70%", "Acomodação", "Material", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 42,
                titulo: "Estágio em Gestão de Projetos",
                tipo: "Estágio",
                area: "Business",
                duracao: "6 meses",
                descricao: "Estágio em empresa de consultoria em gestão de projetos. Aprenda metodologias ágeis, PMP e ferramentas de gestão. Trabalhe em projetos reais de grandes empresas.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $3100/mês", "Visto de trabalho", "Certificação PMP", "Treinamento"],
                status: "publicada"
            },
            {
                id: 43,
                titulo: "Voluntariado em Festival de Cinema",
                tipo: "Voluntariado",
                area: "Artes",
                duracao: "3 meses",
                descricao: "Voluntariado no Tribeca Film Festival. Participe da organização do festival, conheça cineastas e aprenda sobre produção cinematográfica. Experiência única no mundo do cinema.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Ingressos gratuitos"],
                status: "publicada"
            },
            {
                id: 44,
                titulo: "Bolsa de Pesquisa em Fisioterapia",
                tipo: "Bolsa de Estudo",
                area: "Saúde",
                duracao: "2 anos",
                descricao: "Programa de mestrado em fisioterapia com foco em pesquisa. Estude reabilitação, biomecânica e técnicas avançadas. Trabalhe em clínicas e centros de pesquisa.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa mensal de $2300", "Acomodação", "Seguro saúde", "Material"],
                status: "publicada"
            },
            {
                id: 45,
                titulo: "Estágio em Cloud Computing",
                tipo: "Estágio",
                area: "TI",
                duracao: "6 meses",
                descricao: "Estágio em empresa de cloud computing. Trabalhe com AWS, Azure e Google Cloud. Aprenda sobre arquitetura de nuvem, DevOps e soluções escaláveis.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $4100/mês", "Visto de trabalho", "Certificações cloud", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 46,
                titulo: "Programa de Intercâmbio em Educação Física",
                tipo: "Bolsa de Estudo",
                area: "Educação",
                duracao: "1 ano",
                descricao: "Programa para professores de educação física. Trabalhe em escolas e academias de Nova York. Aprenda sobre esportes, fitness e bem-estar.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Bolsa mensal de $2000", "Acomodação", "Material esportivo", "Certificado"],
                status: "publicada"
            },
            {
                id: 47,
                titulo: "Estágio em Engenharia de Produção",
                tipo: "Estágio",
                area: "Engenharia",
                duracao: "1 ano",
                descricao: "Estágio em empresa de manufatura. Trabalhe com otimização de processos, qualidade e gestão de produção. Aprenda sobre indústria 4.0 e automação.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Salário de $3900/mês", "Visto de trabalho", "Treinamento", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 48,
                titulo: "Voluntariado em Centro de Acolhimento",
                tipo: "Voluntariado",
                area: "Saúde",
                duracao: "6 meses",
                descricao: "Voluntariado em centro de acolhimento para pessoas em situação de rua. Ofereça apoio, organize atividades e ajude na reintegração social. Trabalho humanitário importante.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Experiência prática"],
                status: "publicada"
            },
            {
                id: 49,
                titulo: "Bolsa de Mestrado em Design Gráfico",
                tipo: "Bolsa de Estudo",
                area: "Artes",
                duracao: "2 anos",
                descricao: "Mestrado em Design Gráfico na School of Visual Arts. Desenvolva seu portfólio, aprenda design digital e trabalhe com clientes reais. Programa reconhecido internacionalmente.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa de 50%", "Acomodação", "Material", "Software Adobe"],
                status: "publicada"
            },
            {
                id: 50,
                titulo: "Estágio em Recursos Humanos",
                tipo: "Estágio",
                area: "Business",
                duracao: "6 meses",
                descricao: "Estágio em empresa multinacional de RH. Trabalhe com recrutamento, desenvolvimento de talentos e gestão de pessoas. Aprenda sobre cultura organizacional e liderança.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $2900/mês", "Visto de trabalho", "Treinamento", "Certificações"],
                status: "publicada"
            },
            {
                id: 51,
                titulo: "Voluntariado em Conservatório de Música",
                tipo: "Voluntariado",
                area: "Artes",
                duracao: "3 meses",
                descricao: "Voluntariado no Conservatório de Música de Nova York. Apoie estudantes de música, organize concertos e aprenda sobre educação musical de alto nível.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Aulas de música"],
                status: "publicada"
            },
            {
                id: 52,
                titulo: "Bolsa de Pesquisa em Farmacologia",
                tipo: "Bolsa de Estudo",
                area: "Saúde",
                duracao: "2 anos",
                descricao: "Programa de mestrado em farmacologia. Pesquise novos medicamentos, estude toxicologia e trabalhe em laboratórios de ponta. Contribua para avanços na medicina.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa mensal de $2500", "Acomodação", "Seguro saúde", "Material"],
                status: "publicada"
            },
            {
                id: 53,
                titulo: "Estágio em Realidade Virtual",
                tipo: "Estágio",
                area: "TI",
                duracao: "6 meses",
                descricao: "Estágio em empresa de realidade virtual e aumentada. Desenvolva experiências imersivas, trabalhe com Unity e aprenda sobre o futuro da tecnologia.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $4000/mês", "Visto de trabalho", "Equipamentos VR", "Treinamento"],
                status: "publicada"
            },
            {
                id: 54,
                titulo: "Programa de Intercâmbio em Educação Bilíngue",
                tipo: "Bolsa de Estudo",
                area: "Educação",
                duracao: "1 ano",
                descricao: "Programa para professores bilíngues. Ensine português e inglês em escolas de Nova York. Desenvolva metodologias de ensino bilíngue e multicultural.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Bolsa mensal de $2200", "Acomodação", "Material didático", "Certificado"],
                status: "publicada"
            },
            {
                id: 55,
                titulo: "Estágio em Engenharia Biomédica",
                tipo: "Estágio",
                area: "Engenharia",
                duracao: "1 ano",
                descricao: "Estágio em empresa de engenharia biomédica. Desenvolva dispositivos médicos, próteses e equipamentos de diagnóstico. Combine tecnologia e medicina.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Salário de $4400/mês", "Visto de trabalho", "Treinamento", "Equipamentos"],
                status: "publicada"
            },
            {
                id: 56,
                titulo: "Voluntariado em Parque Nacional",
                tipo: "Voluntariado",
                area: "Saúde",
                duracao: "3 meses",
                descricao: "Voluntariado em parque nacional próximo a Nova York. Trabalhe com conservação ambiental, educação ecológica e manutenção de trilhas. Conecte-se com a natureza.",
                requisitos: ["Inglês"],
                beneficios: ["Acomodação", "Alimentação", "Certificado", "Experiência ao ar livre"],
                status: "publicada"
            },
            {
                id: 57,
                titulo: "Bolsa de Mestrado em Fotografia",
                tipo: "Bolsa de Estudo",
                area: "Artes",
                duracao: "2 anos",
                descricao: "Mestrado em Fotografia na International Center of Photography. Desenvolva seu estilo, aprenda técnicas avançadas e trabalhe com fotógrafos renomados.",
                requisitos: ["Inglês", "Graduação", "Experiência"],
                beneficios: ["Bolsa de 60%", "Acomodação", "Equipamentos fotográficos", "Estúdio"],
                status: "publicada"
            },
            {
                id: 58,
                titulo: "Estágio em E-commerce",
                tipo: "Estágio",
                area: "Business",
                duracao: "6 meses",
                descricao: "Estágio em empresa de e-commerce. Trabalhe com vendas online, marketing digital e gestão de plataformas. Aprenda sobre o futuro do varejo.",
                requisitos: ["Inglês", "Graduação"],
                beneficios: ["Salário de $3000/mês", "Visto de trabalho", "Treinamento", "Bônus"],
                status: "publicada"
            }
        ];
        salvarVagas();
    }
}

// Salvar vagas no localStorage
function salvarVagas() {
    try {
        localStorage.setItem('vagas', JSON.stringify(vagas));
        console.log(`Vagas salvas: ${vagas.length} vagas`);
    } catch (e) {
        console.error('Erro ao salvar vagas:', e);
    }
}

// Obter todas as vagas publicadas
export function getVagas() {
    inicializarVagas();
    const vagasPublicadas = vagas.filter(v => v && v.status === 'publicada');
    if (vagasPublicadas.length === 0 && vagas.length > 0) {
        console.warn('Nenhuma vaga publicada encontrada, mas há vagas no sistema');
    }
    return vagasPublicadas;
}

// Obter vaga por ID
export function getVagaById(id) {
    inicializarVagas();
    return vagas.find(v => v.id === parseInt(id));
}

// Filtrar vagas
export function filtrarVagas(filtros) {
    let resultado = getVagas();

    if (filtros.busca) {
        const buscaLower = filtros.busca.toLowerCase();
        resultado = resultado.filter(vaga =>
            vaga.titulo.toLowerCase().includes(buscaLower) ||
            vaga.descricao.toLowerCase().includes(buscaLower) ||
            vaga.area.toLowerCase().includes(buscaLower)
        );
    }

    if (filtros.tipo) {
        resultado = resultado.filter(vaga => vaga.tipo === filtros.tipo);
    }

    if (filtros.area) {
        resultado = resultado.filter(vaga => vaga.area === filtros.area);
    }

    if (filtros.duracao) {
        resultado = resultado.filter(vaga => vaga.duracao === filtros.duracao);
    }

    if (filtros.requisitos && filtros.requisitos.length > 0) {
        resultado = resultado.filter(vaga =>
            filtros.requisitos.every(req => vaga.requisitos.includes(req))
        );
    }

    return resultado;
}

// Gerenciamento de Usuários
function inicializarUsuarios() {
    if (!localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', JSON.stringify([]));
    }
}

// Cadastro de usuário
export function fazerCadastro(nome, email, senha) {
    inicializarUsuarios();
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    // Verificar se email já existe
    if (usuarios.find(u => u.email === email)) {
        return false;
    }

    // Criar novo usuário
    const novoUsuario = {
        id: Date.now(),
        nome,
        email,
        senha, // Em produção, isso deveria ser hash
        dataCadastro: new Date().toISOString()
    };

    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Fazer login automático
    localStorage.setItem('currentUser', JSON.stringify(novoUsuario));

    return true;
}

// Login de usuário
export function fazerLogin(email, senha) {
    inicializarUsuarios();
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        // Remover senha antes de salvar
        const { senha: _, ...usuarioSemSenha } = usuario;
        localStorage.setItem('currentUser', JSON.stringify(usuarioSemSenha));
        return true;
    }

    return false;
}

// Logout
export function fazerLogout() {
    localStorage.removeItem('currentUser');
}

// Obter usuário atual
export function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

// Gerenciamento de Favoritos
function inicializarFavoritos() {
    const user = getCurrentUser();
    if (user && !localStorage.getItem(`favoritos_${user.id}`)) {
        localStorage.setItem(`favoritos_${user.id}`, JSON.stringify([]));
    }
}

// Obter favoritos do usuário atual
export function getFavoritos() {
    const user = getCurrentUser();
    if (!user) return [];

    inicializarFavoritos();
    const favoritos = localStorage.getItem(`favoritos_${user.id}`);
    return favoritos ? JSON.parse(favoritos) : [];
}

// Adicionar/Remover favorito
export function toggleFavorito(vagaId) {
    const user = getCurrentUser();
    if (!user) return false;

    inicializarFavoritos();
    let favoritos = getFavoritos();

    const index = favoritos.indexOf(vagaId);
    if (index > -1) {
        favoritos.splice(index, 1);
    } else {
        favoritos.push(vagaId);
    }

    localStorage.setItem(`favoritos_${user.id}`, JSON.stringify(favoritos));
    return true;
}

// Verificar se vaga está nos favoritos
export function isFavorito(vagaId) {
    const favoritos = getFavoritos();
    return favoritos.includes(vagaId);
}

// Gerenciamento de Vagas (Admin)
export function adicionarVaga(vaga) {
    inicializarVagas();
    
    const novaVaga = {
        id: Date.now(),
        ...vaga,
        status: vaga.status || 'publicada'
    };

    vagas.push(novaVaga);
    salvarVagas();
    return novaVaga;
}

export function atualizarVaga(id, dadosAtualizados) {
    inicializarVagas();
    
    const index = vagas.findIndex(v => v.id === parseInt(id));
    if (index === -1) return false;

    vagas[index] = { ...vagas[index], ...dadosAtualizados };
    salvarVagas();
    return true;
}

export function excluirVaga(id) {
    inicializarVagas();
    
    const index = vagas.findIndex(v => v.id === parseInt(id));
    if (index === -1) return false;

    vagas.splice(index, 1);
    salvarVagas();
    return true;
}

export function getAllVagas() {
    inicializarVagas();
    return vagas;
}

// Função para forçar recriação de vagas (útil para debug)
export function forcarRecriarVagas() {
    localStorage.removeItem('vagas');
    vagas = [];
    inicializarVagas();
    console.log(`Vagas recriadas: ${vagas.length} vagas`);
}

// Inicializar ao carregar
inicializarVagas();
inicializarUsuarios();

// Log para debug e verificação
console.log(`Sistema inicializado com ${vagas.length} vagas`);
// Se tiver menos de 50 vagas, forçar recriação
if (vagas.length < 50) {
    console.warn('Menos de 50 vagas detectadas, forçando recriação...');
    localStorage.removeItem('vagas');
    vagas = [];
    inicializarVagas();
    console.log(`Vagas recriadas: ${vagas.length} vagas`);
}

