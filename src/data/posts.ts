export type postType = {
  id: number;
  user_id: number;
  image_post?: string;
  time: number;
  description: string;
  likes: number;
  amount_commentaries: number;
  shares: number;
  commentaries?: {
    user_id: number;
    comment: string;
    likes: number;
  }[];
  users_liked?: number[];
};

export const postsData: postType[] = [
  {
    id: 1,
    user_id: 2,
    image_post: 'netflix-stranger_things.jpg',
    time: 30,
    description: 'A aventura começou a anos atrás. Agora começa o capítulo final. Teaser de STRANGER THINGS 5 amanhã!!',
    likes: 3755,
    amount_commentaries: 456,
    shares: 243,
    commentaries: [
      {
        user_id: 4,
        comment: 'Amo demais essa série! Ansioso pelo teaser! 😍',
        likes: 18,
      },
      {
        user_id: 5,
        comment: 'Stranger Things sempre entrega. Mal posso esperar!',
        likes: 9,
      },
    ],
    users_liked: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 2,
    user_id: 3,
    image_post: 'giveon-beloved.jpg',
    time: 50,
    description: 'My new album BELOVED is Out!',
    likes: 8524,
    amount_commentaries: 456,
    shares: 194,
    commentaries: [
      {
        user_id: 6,
        comment: 'Esse álbum está maravilhoso! Obrigada por isso 💜',
        likes: 21,
      },
      {
        user_id: 1,
        comment: 'Giveon nunca erra!',
        likes: 12,
      },
    ],
    users_liked: [1, 3, 6],
  },
  {
    id: 3,
    user_id: 4,
    image_post: 'represa.jpg',
    time: 72,
    description: 'Dia lindo aqui na represa',
    likes: 110,
    amount_commentaries: 34,
    shares: 6,
    commentaries: [
      {
        user_id: 5,
        comment: 'Lugar incrível! Que paz 🙌',
        likes: 5,
      },
    ],
    users_liked: [1, 2, 4, 6],
  },
  {
    id: 4,
    user_id: 5,
    image_post: 'wirtz.webp',
    time: 120,
    description: 'Atenção! Liverpool anuncia a contratação de Florian Wirtz para a nova temporada, o meio-campista chega ao clube com mais de 70 gols e 70 assistências em sua carreira, e aí o que achou?',
    likes: 424,
    amount_commentaries: 259,
    shares: 160,
    commentaries: [
      {
        user_id: 4,
        comment: 'Compra de peso! Liverpool vem forte.',
        likes: 14,
      },
    ],
    users_liked: [3, 4, 5],
  },
  {
    id: 5,
    user_id: 6,
    time: 120,
    description: 'Passei mais um dia estudando desenvolvimento web, estou evoluindo muito! estou muito feliz!',
    likes: 42,
    amount_commentaries: 17,
    shares: 2,
    commentaries: [
      {
        user_id: 5,
        comment: 'Força total! Continua assim 💪',
        likes: 7,
      },
    ],
    users_liked: [1, 3],
  },
  {
    id: 6,
    user_id: 1,
    time: 25,
    description: 'Estudar node está me fazendo enteder bem mais como funciona o desenvolvimento web, APIs e banco de dados, vou continuar estudando para conseguir meu primeiro emprego na área.',
    likes: 14,
    amount_commentaries: 3,
    shares: 1,
    commentaries: [
      {
        user_id: 6,
        comment: 'Parabéns, sou dev Full-Stack, continua nesse caminho!',
        likes: 3,
      },
    ],
    users_liked: [4, 5, 6],
  },
  {
    id: 7,
    user_id: 1,
    image_post: 'h2002d.jpg',
    time: 62,
    description: 'Estou curtindo muito a minha compra do fone Havit h2002d, espero conseguir minha primeira entrevista e emprego com ele.',
    likes: 41,
    amount_commentaries: 7,
    shares: 2,
    commentaries: [
      {
        user_id: 4,
        comment: 'Parabéns, também tenho um e é bom mesmo!',
        likes: 2,
      },
    ],
    users_liked: [4, 5, 6],
  },
]