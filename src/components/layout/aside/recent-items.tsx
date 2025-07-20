import { Button } from "@/components/ui/button"
import { recentActivities } from "@/data/recent-activities"
import { BadgeCheck } from "lucide-react"

type props = {
  data: recentActivities;
}
export const RecentItem = ({ data }: props) => {

  return (
    <div className="flex gap-5 bg-background p-3 rounded-xl w-full">
      <div className="relative flex-shrink-0 w-14 h-14">
        <img src={`/${data.image}`} alt="user" className="rounded-lg" />
        <BadgeCheck className="absolute -top-1/2 -right-1/2 translate-y-3/5 -translate-x-3/5 text-primary fill-green-200 dark:fill-green-950" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col">
          <p className="text-base">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            {data.text} <span className="text-primary ml-2">{data.time} min</span>
          </p>
        </div>
        <div className="flex justify-between items-center gap-2 w-full p-1">
          {data.subject === 'followed' && (<>
            <Button size={"sm"}
              variant={"secondary"}
              className="flex-1 border border-zinc-400 dark:border-zinc-700 cursor-pointer"
            >
              Ignorar
            </Button>
            <Button size={"sm"}
              className="flex-1 cursor-pointer text-white"
            >
              Seguir de volta
            </Button>
          </>)}
          {data.subject === 'liked' && (
            <Button className="flex-1 border border-zinc-400 dark:border-zinc-700 cursor-pointer text-white ">Ver postagem</Button>
          )}
        </div>
      </div>
    </div>
  )
}