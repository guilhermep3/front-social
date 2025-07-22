import { Group } from "@/components/layout/community/group";
import { Recommendations } from "@/components/layout/community/recommendations";
import { groupsData } from "@/data/groups";
import { asideTitleStyle, flexCenter } from "@/utils/styles";

export default function Page() {
  const myGroups = groupsData.filter((i) => i.is_member);

  return (
    <div className={flexCenter + ' flex-col gap-10 w-full px-2'}>
      <div className={flexCenter + " flex-col items-start mx-auto w-full"}>
        <p className={asideTitleStyle}>Suas Comunidades</p>
        <div className="flex justify-center items-center flex-col gap-6 w-full">
          {myGroups.map((g) => (
            <Group key={g.id} group={g} />
          ))}
        </div>
      </div>
      <Recommendations />
    </div>
  )
}