"use client"
import { Button } from "@/components/ui/button"
import { recentActivitiesType } from "@/data/recent-activities";
import { userType } from "@/data/users";
import { BadgeCheck } from "lucide-react"
import Image from "next/image";
import { useRouter } from "next/navigation";

type props = {
  activitiesData: recentActivitiesType;
  userData: userType;
}
export const RecentItem = ({ activitiesData, userData }: props) => {
  const router = useRouter();

  return (
    <div className="flex gap-5 bg-background p-3 rounded-xl w-full cursor-pointer" onClick={() => router.push(`/profile/${userData.slug}`)}>
      <div className="relative flex-shrink-0 w-14 h-14">
        <Image src={`/users/${userData.image_user}`} alt="user"
          width={64} height={64}
          className="rounded-lg"
        />
        <BadgeCheck className="absolute -top-1/2 -right-1/2 translate-y-3/5 -translate-x-3/5 text-primary fill-green-200 dark:fill-green-950" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col">
          <p className="text-base">{userData.name}</p>
          <p className="text-sm text-muted-foreground">
            {activitiesData.text} <span className="text-primary ml-2">{activitiesData.time} min</span>
          </p>
        </div>
        <div className="flex justify-between items-center gap-2 w-full p-1">
          {activitiesData.subject === 'followed' && (<>
            <Button size={"sm"}
              variant={"secondary"}
              className="flex-1 border border-zinc-400 dark:border-zinc-700"
            >
              Ignorar
            </Button>
            <Button size={"sm"}
              className="flex-1 text-white"
            >
              Seguir de volta
            </Button>
          </>)}
          {activitiesData.subject === 'liked' && (
            <Button className="flex-1 border border-zinc-400 dark:border-zinc-700 text-white">Ver postagem</Button>
          )}
        </div>
      </div>
    </div>
  )
}