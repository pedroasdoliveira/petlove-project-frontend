export const obj = {
  sistemas: [
    "Você consegue implementar features simples e resolver pequenos bugs dentro da sua squad?",
    "Desenha e implementa soluções de média e alta complexidade reduzindo débitos técnicos do time?",
    "Capaz de subir e controlar sistemas em produção e também monitora a qualidade olhando para SLAs?",
    "Desenvolve arquitetura para futuras soluções e define SLAs?",
    "Lidera as soluções técnicas com excelência e cria planos de contingências?",
  ],
  processos: [
    "Você segue todo o flow (git, CI/CD, Jira..) de desenvolvimento entregando features consistentes em produção?",
    "Você sugere mudanças nos flows com consistência, sempre procurando caminhos para melhorar?",
    "Você sempre chama o time para reavaliar os flows, garantindo que todos entendam os benefícios e impactos?",
    "Você é o responsável por ajustar os flows do time, escutando feedbacks e guiando através das mudanças?",
    "Você define os flows baseado na maturidade, agilidade e disciplina do time?",
  ],
  pessoas: [
    "Você está sempre aprendendo com os outros e estuda mais quando necessário?",
    "Você sempre ajuda as pessoas do seu time a terem sucesso em seus desafios?",
    "Você organiza times, promove feedbacks e intermedia discussões?",
    "Você mentora outros em seu desenvolvimento e já foi coach na construção de PDIs?",
    "Você gerencia carreiras, expectativas, performances e nível de engajamento do seu time?",
  ],
  ferramentarias: [
    "Você conhece o conceito de código limpo (link)? Aplica o conceito em pelo menos 50% do seu código? Conhece e desenvolve seguindo os nossos processos de 					CI/CD?https://petlove.atlassian.net/wiki/spaces/TEC/pages/351666200/Playbook",
    "Você Constrói códigos modulares e segue os conceitos de código limpo em 80% do seu código?",
    "Você ajuda a definir processos de CI/CD do seu time e da sua área? Ensina seus colegas a importância de um código limpo e cobra isso nos PRs que revisa?",
  ],
  designs: [
    "Você conhece e aplica os princípios do S.O.L.I.D (Ou algum outro pattern definido pelo seu chapter Manager) no seu código?",
    "Você conhece e aplica pelo menos outros 3 princípios de pattern no seu código e ajuda seus colegas de time a escolherem qual o melhor para a solução do problema?",
    "Você já ajudou a definir padrões de projetos de times/produtos fora do seu time?",
  ],
  testes: [
    "Você implementa teste unitário e também testa sua solução manualmente levando em consideração as definições do produto?",
    "Você simula comportamentos dos clientes no seu desenvolvimento, testa além do caminho feliz e analisa o impacto das mudanças?",
    "Você implementa teste e2e, de integração ou outro que permita avaliar e monitorar o produto",
  ],
  computacionais: [
    "Conhece e aplica estruturas de dados e multithreading?",
    "É capaz de desenhar a arquitetura de um sistema de complexidade média a alta?",
    "Consegue desenhar uma arquitetura multissistêmica e para múltiplos times?",
  ],
};

// quando pegar a data da api, teremos que usar a conversao de data para formato pt-br

export const dataAdm = [
  {
    id: 1,
    name: "aGiovanne Berteli Comba",
    email: "joebcomba@gmail.com",
    password: "123456",
    team: null,
    chapter: null,
    role: null,
    isAdmin: false,
    createdAt: new Date("2022-09-23T00:00:00.000Z"),
    updatedAt: new Date("2022-09-23T00:00:00.000Z"),
    results: [
      {
        id: 2,
        userId: "giovanne",
        nextRole: "Junior",
        system: 2,
        person: 3,
        technology: 1,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
      {
        id: 3,
        userId: "giovanne",
        nextRole: "Junior",
        system: 2,
        person: 3,
        technology: 1,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
    ],
  },
  {
    id: 4,
    name: "aGiovanne Berteli Comba",
    email: "joebcomba@gmail.com",
    password: "123456",
    team: null,
    chapter: null,
    role: "Senior",
    isAdmin: false,
    createdAt: new Date("2022-09-23T00:00:00.000Z"),
    updatedAt: new Date("2022-09-23T00:00:00.000Z"),
    results: [
      {
        id: 5,
        userId: "giovanne",
        nextRole: "Junior",
        system: 2,
        person: 3,
        technology: 1,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
      {
        id: 6,
        userId: "giovanne",
        nextRole: "Junior",
        system: 2,
        person: 3,
        technology: 1,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
    ],
  },
  {
    id: 7,
    name: "aGiovanne Berteli Comba",
    email: "joebcomba@gmail.com",
    password: "123456",
    team: null,
    chapter: null,
    role: "Senior",
    isAdmin: false,
    createdAt: new Date("2022-09-23T00:00:00.000Z"),
    updatedAt: new Date("2022-09-23T00:00:00.000Z"),
    results: [
      {
        id: 8,
        userId: "giovanne",
        nextRole: "Junior",
        system: 2,
        person: 3,
        technology: 1,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
      {
        id: 9,
        userId: "giovanne",
        nextRole: "Junior",
        system: 2,
        person: 3,
        technology: 1,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
    ],
  },

  {
    id: 10,
    name: "Giovanne Berteli Comba2",
    email: "joebcomba@gmail.com",
    password: "123456",
    team: "credito",
    chapter: "backend",
    role: "Trainee",
    isAdmin: false,
    createdAt: new Date("2022-09-23T00:00:00.000Z"),
    updatedAt: new Date("2022-09-23T00:00:00.000Z"),
    results: [
      {
        id: 11,
        userId: "giovanne",
        nextRole: "Senior",
        system: 5,
        person: 4,
        technology: 5,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
      {
        id: 12,
        userId: "giovanne",
        nextRole: "Junior",
        system: 2,
        person: 3,
        technology: 1,
        process: 4,
        influence: 3,
        isValide: "null",
        createdAt: "2022-09-21",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
    ],
  },
  {
    id: 13,
    name: "Giovanne Berteli Comba2",
    email: "joebcomba@gmail.com",
    password: "123456",
    team: "credito",
    chapter: "backend",
    role: "Senior",
    isAdmin: false,
    createdAt: new Date("2022-09-23T00:00:00.000Z"),
    updatedAt: new Date("2022-09-23T00:00:00.000Z"),
    results: [
      {
        id: 14,
        userId: "giovanne",
        nextRole: "Senior",
        system: 5,
        person: 4,
        technology: 5,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
      {
        id: 15,
        userId: "giovanne",
        nextRole: "Junior",
        system: 2,
        person: 3,
        technology: 1,
        process: 4,
        influence: 3,
        isValide: "null",
        createdAt: "2022-09-21",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
    ],
  },
  
  {
    id: 16,
    name: "Giovanne Berteli Comba3",
    email: "joebcomba@gmail.com",
    password: "123456",
    team: "debito",
    chapter: "frontend",
    role: "Pleno",
    isAdmin: false,
    createdAt: new Date("2022-09-23T00:00:00.000Z"),
    updatedAt: new Date("2022-09-23T00:00:00.000Z"),
    results: [
      {
        id: 17,
        userId: "giovanne",
        nextRole: "Senior",
        system: 5,
        person: 4,
        technology: 5,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
      {
        id: 18,
        userId: "giovanne",
        nextRole: "Senior",
        system: 5,
        person: 4,
        technology: 5,
        process: 2,
        influence: 3,
        isValide: "Sim",
        createdAt: "2022-09-23",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
      {
        id: 19,
        userId: "giovanne",
        nextRole: "Junior",
        system: 2,
        person: 3,
        technology: 1,
        process: 4,
        influence: 3,
        isValide: "null",
        createdAt: "2022-09-21",
        updatedAt: new Date("2022-09-23T00:00:00.000Z"),
      },
    ],
  },
  
  
];

export const dataApi = [
  {
    id: 100000,
    userId: "giovanne",
    nextRole: "Junior",
    system: 2,
    person: 3,
    technology: 1,
    process: 2,
    influence: 3,
    isValide: "Sim",
    createdAt: "2022-09-23",
    updatedAt: new Date("2022-09-23T00:00:00.000Z"),
  },
  {
    id: 2,
    userId: "giovanne",
    nextRole: "Pleno",
    system: 1,
    person: 2,
    technology: 1,
    process: 2,
    influence: 2.2,
    isValide: "Sim",
    createdAt: "2022-09-25",
    updatedAt: new Date("2022-09-25T00:00:00.000Z"),
  },
  {
    id: 3,
    userId: "giovanne",
    nextRole: "Senior",
    system: 5,
    person: 2,
    technology: 1,
    process: 5,
    influence: 2.2,
    isValide: "Não",
    createdAt: "2022-09-26",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
  {
    id: 4,
    userId: "giovanne",
    nextRole: "Pleno",
    system: 1,
    person: 2,
    technology: 1,
    process: 5,
    influence: 2.2,
    isValide: "null",
    createdAt: "2022-09-27",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
  {
    id: 5,
    userId: "giovanne",
    nextRole: "Especialista",
    system: 1,
    person: 5,
    technology: 3,
    process: 5,
    influence: 5,
    isValide: "null",
    createdAt: "2022-09-27",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
  {
    id: 6,
    userId: "giovanne",
    nextRole: "Especialista",
    system: 1,
    person: 5,
    technology: 3,
    process: 5,
    influence: 5,
    isValide: "null",
    createdAt: "2022-09-27",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
  {
    id: 7,
    userId: "giovanne",
    nextRole: "Especialista",
    system: 1,
    person: 5,
    technology: 3,
    process: 5,
    influence: 5,
    isValide: "null",
    createdAt: "2022-09-27",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
  {
    id: 8,
    userId: "giovanne",
    nextRole: "Especialista",
    system: 1,
    person: 5,
    technology: 3,
    process: 5,
    influence: 5,
    isValide: "null",
    createdAt: "2022-09-27",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
  {
    id: 9,
    userId: "giovanne",
    nextRole: "Especialista",
    system: 1,
    person: 5,
    technology: 3,
    process: 5,
    influence: 5,
    isValide: "null",
    createdAt: "2022-09-27",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
  {
    id: 10,
    userId: "giovanne",
    nextRole: "Especialista",
    system: 1,
    person: 5,
    technology: 3,
    process: 5,
    influence: 5,
    isValide: "null",
    createdAt: "2022-09-27",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
  {
    id: 11,
    userId: "giovanne",
    nextRole: "Especialista",
    system: 1,
    person: 5,
    technology: 3,
    process: 5,
    influence: 5,
    isValide: "null",
    createdAt: "2022-09-27",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
  {
    id: 12,
    userId: "Junior",
    nextRole: "Especialista",
    system: 1,
    person: 5,
    technology: 3,
    process: 5,
    influence: 5,
    isValide: "null",
    createdAt: "2022-09-27",
    updatedAt: new Date("2022-09-26T00:00:00.000Z"),
  },
];

export const user = {
  id: 100,
  name: "Giovanne Berteli Comba",
  email: "joebcomba@gmail.com",
  password: "123456",
  team: "credito",
  chapter: "backend",
  role: "junior",
  isAdmin: false,
  createdAt: new Date("2022-09-23T00:00:00.000Z"),
  updatedAt: new Date("2022-09-23T00:00:00.000Z"),
};
