import { asideTitleStyle } from "@/utils/styles"
import { RecentItem } from "./recent-item"
import { recentActivitiesData } from "@/data/recent-activities"
import { usersData } from "@/data/users"

export const RecentAside = () => {
  const activitiesWithUsers = recentActivitiesData.map((activity) => {
    const user = usersData.find((user) => user.id === activity.user_id);
    return { activity, user };
  });

  return (
    <div className="w-full">
      <p className={asideTitleStyle}>Atividades recentes</p>
      <div className="flex flex-col gap-4">
        {activitiesWithUsers.map((item) => (
          <RecentItem
            key={item.activity.id}
            activitiesData={item.activity}
            userData={item.user!}
          />
        ))}
      </div>
    </div>
  )
}