"use client"
import { Button } from "@/components/ui/button"
import { groupsData } from "@/data/groups"
import { asideTitleStyle } from "@/utils/styles"
import { Group } from "../community/group"
import { useRouter } from "next/navigation"

export const GroupsAside = () => {
  const myGroups = groupsData.filter((i) => i.is_member);
  const router = useRouter();

  return (
    <div className="w-full">
      <p className={asideTitleStyle}>Comunidades</p>
      <div className="flex flex-col gap-4">
        {myGroups.map((g) => (
          <Group key={g.id} group={g} />
        ))}
        <Button className="text-white" onClick={() => router.push('/community')}>Ver mais</Button>
      </div>
    </div>
  )
}