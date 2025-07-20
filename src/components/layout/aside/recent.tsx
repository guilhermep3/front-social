import { asideTitleStyle } from "@/utils/styles"
import { RecentItem } from "./recent-item"
import { recentActivitiesData } from "@/data/recent-activities"

export const RecentAside = () => {

  return (
    <div className="w-full">
      <p className={asideTitleStyle}>Atividades recentes</p>
      <div className="flex flex-col gap-4">
        {recentActivitiesData.map((i) => (
          <RecentItem key={i.id} data={i}/>
        ))}
      </div>
    </div>
  )
}