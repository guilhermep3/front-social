export type postType = {
  id: number;
  image_user: string;
  image_post?: string;
  user: string;
  label: string;
  time: number;
  description: string;
  likes: number;
  commentaries: number;
  shares: number;
}
export const postsData = [
  {
    id: 1,
    image_user: 'netflix.png',
    image_post: 'netflix-stranger_things.jpg',
    user: 'Netflix',
    label: 'netflix',
    time: 30,
    description: 'A aventura começou a anos atrás. Agora começa o capítulo final. Teaser de STRANGER THINGS 5 amanhã!!',
    likes: 755,
    commentaries: 456,
    shares: 243,
  },
  {
    id: 2,
    image_user: 'giveon.jpg',
    image_post: 'giveon-beloved.jpg',
    user: 'Giveon',
    label: 'giveon',
    time: 50,
    description: 'My new album BELOVED is Out!',
    likes: 824,
    commentaries: 456,
    shares: 194,
  },
  {
    id: 3,
    image_user: 'user1.png',
    image_post: 'represa.jpg',
    user: 'Nome usuário 1',
    label: 'primeirouser',
    time: 72,
    description: 'Dia lindo aqui na represa',
    likes: 110,
    commentaries: 34,
    shares: 6,
  },
  {
    id: 4,
    image_user: 'user2.jpg',
    image_post: 'wirtz.webp',
    user: 'Nome usuário 2',
    label: 'segundouser',
    time: 120,
    description: 'Atenção! Liverpool anuncia a contratação de Florian Wirtz para a nova temporada, o meio-campista chega ao clube com mais de 70 gols e 70 assistências em sua carreira, e aí o que achou?',
    likes: 424,
    commentaries: 259,
    shares: 160,
  },
  {
    id: 5,
    image_user: 'user3.jpg',
    user: 'Nome usuário 3',
    label: 'terceirauser',
    time: 120,
    description: 'Passei mais um dia estudando desenvolvimento web, estou evoluindo muito! estou muito feliz!',
    likes: 42,
    commentaries: 17,
    shares: 2,
  },
]