import { flexCenter } from "@/utils/styles"
import { Card } from "../ui/card"
import { ProfileTopSkeleton } from "./profile-top-skeleton"
import { ProfileBottomSkeleton } from "./profile-bottom-skeleton"

export const ProfileSkeleton = () => {

  return (
    <Card className={`relative bg-card rounded-xl text-center shadow-lg py-0 gap-3 overflow-hidden w-full`}>
      <div className={`flex items-center justify-center h-40 bg-muted opacity-50`}></div>
      <div className={flexCenter + ' flex-col p-4 pb-6 pt-0'}>
        <ProfileTopSkeleton />
        <ProfileBottomSkeleton />
      </div>
    </Card>
  )
}