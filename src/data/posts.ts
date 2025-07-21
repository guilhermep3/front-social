export type postType = {
  id: number;
  image_user: string;
  image_post?: string;
  username: string;
  label: string;
  time: number;
  description: string;
  likes: number;
  amount_commentaries: number;
  shares: number;
  commentaries?: {
    id: number;
    username: string;
    label: string;
    image_user: string;
    comment: string;
    likes: number;
  }[];
};

export const postsData = [
  {
    id: 1,
    image_user: 'netflix.png',
    image_post: 'netflix-stranger_things.jpg',
    username: 'Netflix',
    label: 'netflix',
    time: 30,
    description: 'A aventura começou a anos atrás. Agora começa o capítulo final. Teaser de STRANGER THINGS 5 amanhã!!',
    likes: 755,
    amount_commentaries: 456,
    shares: 243,
    commentaries: [
      {
        id: 1,
        username: 'Nome usuário 1',
        label: 'primeirouser',
        image_user: 'user1.png',
        comment: 'Amo demais essa série! Ansioso pelo teaser! 😍',
        likes: 18,
      },
      {
        id: 2,
        username: 'Nome usuário 2',
        label: 'segundouser',
        image_user: 'user2.jpg',
        comment: 'Stranger Things sempre entrega. Mal posso esperar!',
        likes: 9,
      },
    ],
  },
  {
    id: 2,
    image_user: 'giveon.jpg',
    image_post: 'giveon-beloved.jpg',
    username: 'Giveon',
    label: 'giveon',
    time: 50,
    description: 'My new album BELOVED is Out!',
    likes: 824,
    amount_commentaries: 456,
    shares: 194,
    commentaries: [
      {
        id: 1,
        username: 'Nome usuário 3',
        label: 'terceirauser',
        image_user: 'user3.jpg',
        comment: 'Esse álbum está maravilhoso! Obrigada por isso 💜',
        likes: 21,
      },
      {
        id: 2,
        username: 'Nome usuário 2',
        label: 'segundouser',
        image_user: 'user2.jpg',
        comment: 'Giveon nunca erra!',
        likes: 12,
      },
    ],
  },
  {
    id: 3,
    image_user: 'user1.png',
    image_post: 'represa.jpg',
    username: 'Nome usuário 1',
    label: 'primeirouser',
    time: 72,
    description: 'Dia lindo aqui na represa',
    likes: 110,
    amount_commentaries: 34,
    shares: 6,
    commentaries: [
      {
        id: 1,
        username: 'Nome usuário 2',
        label: 'segundouser',
        image_user: 'user2.jpg',
        comment: 'Lugar incrível! Que paz 🙌',
        likes: 5,
      },
    ],
  },
  {
    id: 4,
    image_user: 'user2.jpg',
    image_post: 'wirtz.webp',
    username: 'Nome usuário 2',
    label: 'segundouser',
    time: 120,
    description: 'Atenção! Liverpool anuncia a contratação de Florian Wirtz para a nova temporada, o meio-campista chega ao clube com mais de 70 gols e 70 assistências em sua carreira, e aí o que achou?',
    likes: 424,
    amount_commentaries: 259,
    shares: 160,
    commentaries: [
      {
        id: 1,
        username: 'Nome usuário 2',
        label: 'segundouser',
        image_user: 'user2.jpg',
        comment: 'Compra de peso! Liverpool vem forte.',
        likes: 14,
      },
    ],
  },
  {
    id: 5,
    image_user: 'user3.jpg',
    username: 'Nome usuário 3',
    label: 'terceirauser',
    time: 120,
    description: 'Passei mais um dia estudando desenvolvimento web, estou evoluindo muito! estou muito feliz!',
    likes: 42,
    amount_commentaries: 17,
    shares: 2,
    commentaries: [
      {
        id: 1,
        username: 'Nome usuário 1',
        label: 'primeirouser',
        image_user: 'user1.png',
        comment: 'Força total! Continua assim 💪',
        likes: 7,
      },
    ],
  },
  {
    id: 6,
    image_user: 'user-profile.jpg',
    username: 'Nome do usuário',
    label: 'username',
    time: 25,
    description: 'Estudar node está me fazendo enteder bem mais como funciona o desenvolvimento web, APIs e banco de dados, vou continuar estudando para conseguir meu primeiro emprego na área.',
    likes: 14,
    amount_commentaries: 3,
    shares: 1,
    commentaries: [
      {
        id: 1,
        username: 'Nome usuário 3',
        label: 'terceirauser',
        image_user: 'user3.jpg',
        comment: 'Parabéns, sou dev Full-Stack, continua nesse caminho!',
        likes: 3,
      },
    ],
  },
  {
    id: 7,
    image_user: 'user-profile.jpg',
    image_post: 'h2002d.jpg',
    username: 'Nome do usuário',
    label: 'username',
    time: 62,
    description: 'Estou curtindo muito a minha compra do fone Havit h2002d, espero conseguir minha primeira entrevista e emprego com ele.',
    likes: 41,
    amount_commentaries: 7,
    shares: 2,
    commentaries: [
      {
        id: 1,
        username: 'Nome usuário 1',
        label: 'primeirouser',
        image_user: 'user1.png',
        comment: 'Parabéns, também tenho um e é bom mesmo!',
        likes: 2,
      },
    ],
  },
]