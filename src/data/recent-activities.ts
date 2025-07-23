export type recentActivitiesType = {
  id: number;
  user_id: number;
  subject: 'followed' | 'liked';
  text: string;
  time: number;
}
export const recentActivitiesData: recentActivitiesType[] = [
  {
    id: 1,
    user_id: 4,
    subject: 'followed',
    text: 'Seguiu você',
    time: 3
  },
  {
    id: 2,
    user_id: 5,
    subject: 'liked',
    text: 'Curtiu sua publicação',
    time: 6
  },
  {
    id: 3,
    user_id: 6,
    subject: 'followed',
    text: 'Seguiu você',
    time: 15
  },
]