/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Yoom",
    description: "Website de Videos Chamadas em Tempo Real",
    date: "23-05-2024",
    demoLink: "https://yoom-zeta.vercel.app/",
  },
  {
    id: 2,
    name: "Chat-App",
    description: "Chat de conversa Online e em tempo Real!",
    date: "10-05-10",
    demoLink: "https://chat-app-zqf8.onrender.com/",
  },
  {
    id: 3,
    name: "ApiGithub",
    description: "WebSite para consulta de perfil do Github",
    date: "2023-08-15",
    demoLink: "https://rejett.github.io/Perfil-Github/",
  },
  {
    id: 4,
    name: "OuroBoros",
    description: "Divertido e desafiador Jogo da Cobrinha",
    date: "2022-07-30",
    demoLink: "https://rejett.github.io/Ouroboros/",
  },
  {
    id: 5,
    name: "Deus Está Aqui",
    description: "Rádio web Góspel",
    date: "2023-09-12",
    demoLink: "https://www.deusestaaqui.com/",
  },
];

export const BtnList = [
  { label: "Inicio", link: "/", icon: "home", newTab: false },
  { label: "Sobre", link: "/about", icon: "about", newTab: false },
  { label: "Projetos", link: "/projects", icon: "projects", newTab: false },
  { label: "Contatos", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Rejett",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/matheusdeara%C3%BAjocarmo-dev/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "TikTok",
    link: "https://www.tiktok.com/@matheusc.dev?_t=8mVj0t7SagP&_r=1",
    icon: "tiktok",
    newTab: true,
  },

  {
    label: "Currículo",
    link: "/fullstack-completo.docx",
    icon: "resume",
    newTab: true,
  },
];
