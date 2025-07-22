export type userType = {
  id: number;
  name: string;
  slug: string;
  image_user: string;
  image_banner: string;
  bio: string;
  description: string;
  skills: string[];
  followers: number;
  following: number;
}

export const usersData: userType[] = [
  {
    id: 1,
    name: 'Nome do usuário',
    slug: 'username',
    image_user: 'user-profile.jpg',
    image_banner: 'code-bg.jpg',
    bio: 'Olá, sou desenvolvedor front-end',
    description: 'Sou desenvolvedor front-end com conhecimento em HTML, CSS, Javascript, Typescript, React.js, Next.js, Tailwind, Git e Sass.',
    skills: [
      "Javascript", "Typescript", "Python", "Java", "PHP", "React.js", "HTML", "CSS"
    ],
    followers: 1984,
    following: 1002
  },
  {
    id: 2,
    name: 'Netflix',
    slug: 'netflix',
    image_user: 'netflix.png',
    image_banner: 'code-bg.jpg',
    bio: 'Netflix Brasil',
    description: 'Reproduza, pause e continue assistindo a qualquer hora e em qualquer lugar.',
    skills: ['Filmes', 'Séries', 'Documentários', 'Shows', 'Arte'],
    followers: 12790173,
    following: 425,
  },
  {
    id: 3,
    name: 'Giveon',
    slug: 'giveon',
    image_user: 'giveon.jpg',
    image_banner: 'code-bg.jpg',
    bio: 'Artist / Singer',
    description: 'Música que toca a alma.',
    skills: ['R&B', 'Soul', 'Live Performance'],
    followers: 2084301,
    following: 104,
  },
  {
    id: 4,
    name: 'Nome usuário 1',
    slug: 'primeirouser',
    image_user: 'user1.png',
    image_banner: 'user-bg1.jpg',
    bio: 'Aventureiro e apaixonado por natureza',
    description: 'Adoro registrar momentos ao ar livre e compartilhar boas energias!',
    skills: ['Fotografia', 'Trilhas', 'Design', 'HTML'],
    followers: 634,
    following: 240,
  },
  {
    id: 5,
    name: 'Nome usuário 2',
    slug: 'segundouser',
    image_user: 'user2.jpg',
    image_banner: 'user-bg2.jpg',
    bio: 'Apaixonado por futebol e tecnologia',
    description: 'Postando sobre as últimas contratações e aprendendo sobre o mundo dev.',
    skills: ['Esportes', 'Javascript', 'Node.js'],
    followers: 1420,
    following: 389,
  },
  {
    id: 6,
    name: 'Nome usuário 3',
    slug: 'terceirauser',
    image_user: 'user3.jpg',
    image_banner: 'user-bg3.jpg',
    bio: 'Estudante de programação e futura dev Full-Stack',
    description: 'Compartilhando minha jornada no mundo do desenvolvimento web.',
    skills: ['HTML', 'CSS', 'Javascript', 'React'],
    followers: 879,
    following: 312,
  },
];
