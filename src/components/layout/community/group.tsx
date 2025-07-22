import { Card, CardTitle } from "@/components/ui/card"
import { groupType } from "@/data/groups"

type props = {
  group: groupType
}
export const Group = ({ group }: props) => {

  return (
    <Card key={group.id} className="flex-row items-start gap-4 p-3 w-full">
      <img src={`/group/${group.image}`} alt={group.image} className="w-14 h-14 rounded-xl" />
      <div className="flex flex-col gap-2">
        <CardTitle>{group.name}</CardTitle>
        <div className="flex justify-between gap-4 text-sm text-muted-foreground">
          <p>{group.members} mem.</p>
          <p className="text-primary">{group.friends} amigos</p>
        </div>
      </div>
    </Card>
  )
}