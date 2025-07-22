export type userType = {
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


export const userData: userType = {
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
}