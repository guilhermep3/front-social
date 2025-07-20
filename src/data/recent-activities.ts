export type recentActivities = {
  id: number;
  name: string;
  image: string;
  subject: 'followed' | 'liked';
  text: string;
  time: number;
}
export const recentActivitiesData: recentActivities[] = [
  {
    id: 1,
    name: 'Nome do usuario 1',
    image: 'user1.png',
    subject: 'followed',
    text: 'Seguiu você',
    time: 3
  },
  {
    id: 2,
    name: 'Nome do usuario 2',
    image: 'user2.jpg',
    subject: 'liked',
    text: 'Curtiu sua publicação',
    time: 6
  },
  {
    id: 3,
    name: 'Nome do usuario 3',
    image: 'user3.jpg',
    subject: 'followed',
    text: 'Seguiu você',
    time: 15
  },
]