# Bouças NY - Plataforma de Busca de Vagas de Intercâmbio

Web app responsivo desenvolvido em HTML, CSS e JavaScript puro para conectar estudantes brasileiros com oportunidades de bolsas, estágios e programas de intercâmbio em Nova York.

## 🚀 Funcionalidades

### Para Usuários
- **Busca de Vagas**: Sistema de busca avançada com filtros por tipo, área, duração e requisitos
- **Detalhes da Vaga**: Página completa com todas as informações sobre cada oportunidade
- **Favoritos**: Salve vagas de interesse (requer login)
- **Cadastro/Login**: Sistema de autenticação simples com localStorage
- **Página Institucional**: Informações sobre intercâmbio em Nova York

### Para Administradores
- **Painel Administrativo**: CRUD completo de vagas
- **Gerenciamento de Vagas**: Criar, editar, excluir e publicar/despublicar vagas
- **Login Admin**: Credenciais mock para acesso ao painel

## 📁 Estrutura do Projeto

```
/
├── index.html              # Página inicial
├── pages/
│   ├── vagas.html          # Lista de vagas com filtros
│   ├── vaga-detalhe.html   # Detalhes de uma vaga
│   ├── login.html          # Página de login
│   ├── cadastro.html       # Página de cadastro
│   ├── favoritos.html      # Vagas favoritas do usuário
│   └── admin.html          # Painel administrativo
├── css/
│   └── style.css           # Estilos principais (responsivo)
├── js/
│   ├── app.js              # Lógica principal (vagas, usuários, favoritos)
│   └── admin.js            # Lógica do painel administrativo
└── README.md               # Este arquivo
```

## 🎨 Design

- **Layout Responsivo**: Mobile-first, adaptável a todos os dispositivos
- **Design Moderno**: Interface limpa e intuitiva
- **Cores**: Paleta azul primária com tons neutros
- **Tipografia**: Sistema de fontes nativas para melhor performance

## 💾 Armazenamento

O projeto utiliza **localStorage** para persistência de dados:
- `vagas`: Lista de todas as vagas cadastradas
- `usuarios`: Lista de usuários cadastrados
- `currentUser`: Usuário logado atualmente
- `favoritos_{userId}`: Favoritos de cada usuário
- `adminLogado`: Status de login do admin (sessionStorage)

## 🔐 Credenciais

### Admin
- **Usuário**: `admin`
- **Senha**: `admin123`

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador moderno
2. Navegue pelas páginas usando o menu
3. Para testar o admin:
   - Acesse `/pages/admin.html`
   - Faça login com as credenciais acima
   - Gerencie as vagas

## 📱 Funcionalidades por Página

### Home (`index.html`)
- Banner principal com busca rápida
- Seção "Como Funciona"
- Lista de vagas recentes
- Informações sobre intercâmbio

### Busca de Vagas (`pages/vagas.html`)
- Filtros laterais (tipo, área, duração, requisitos)
- Busca por palavra-chave
- Lista de resultados dinâmica

### Detalhes da Vaga (`pages/vaga-detalhe.html`)
- Informações completas da vaga
- Botão para salvar nos favoritos
- Botão de candidatura

### Login/Cadastro (`pages/login.html`, `pages/cadastro.html`)
- Sistema de autenticação mock
- Validação de formulários
- Redirecionamento automático

### Favoritos (`pages/favoritos.html`)
- Lista de vagas salvas
- Opção de remover favoritos
- Requer login

### Admin (`pages/admin.html`)
- Formulário para criar/editar vagas
- Lista de todas as vagas
- Ações: editar, excluir, publicar/despublicar

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, variáveis CSS
- **JavaScript ES6+**: Módulos, arrow functions, destructuring
- **LocalStorage API**: Persistência de dados

## 📝 Dados Iniciais

O sistema vem com 8 vagas de exemplo pré-cadastradas em diferentes áreas:
- TI (Bolsa de Estudo, Estágio)
- Business (Estágio)
- Artes (Voluntariado)
- Saúde (Bolsa de Pesquisa, Voluntariado)
- Educação (Bolsa de Estudo)
- Engenharia (Estágio)

## 🔄 Fluxos Principais

1. **Buscar Vaga**: Home → Busca → Filtros → Detalhes → Salvar/Candidatar
2. **Criar Conta**: Home → Login → Cadastro → Preencher → Login automático
3. **Favoritos**: Login → Salvar vagas → Acessar favoritos → Gerenciar
4. **Admin**: Admin → Login → Criar/Editar vagas → Publicar

## 📋 Requisitos

- Navegador moderno com suporte a:
  - ES6 Modules
  - LocalStorage API
  - CSS Grid e Flexbox

## 🎯 Melhorias Futuras (Sugestões)

- Tradução EN/ES
- Dark Mode
- Ranking de vagas mais acessadas
- API REST para backend
- Gamificação (pontos por candidaturas)
- Notificações por email
- Sistema de busca mais avançado
- Upload de imagens para vagas

## 📄 Licença

Este projeto foi desenvolvido como exemplo educacional.

---

Desenvolvido com ❤️ para estudantes brasileiros buscando oportunidades em Nova York.

