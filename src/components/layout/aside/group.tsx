import { groupsData } from "@/data/groups"
import { asideTitleStyle } from "@/utils/styles"

export const GroupsAside = () => {

  return (
    <div className="w-full">
      <p className={asideTitleStyle}>Comunidades</p>
      <div className="flex flex-col gap-4">
        {groupsData.map((g) => (
          <div key={g.id} className="flex items-start gap-4">
            <img src={`/group/${g.image}`} alt={g.image} className="w-14 h-14 rounded-xl" />
            <div className="flex flex-col">
              <p>{g.name}</p>
              <div className="flex justify-between gap-4 text-sm text-muted-foreground">
                <p>{g.members} mem.</p>
                <p className="text-primary">{g.friends} amigos</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}