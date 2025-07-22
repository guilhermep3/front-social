"use client"
import { Button } from "@/components/ui/button";
import { groupsData } from "@/data/groups";
import { asideTitleStyle, flexCenter } from "@/utils/styles";
import { useState } from "react";
import { Group } from "./group";

export const Recommendations = () => {
  const [showAll, setShowAll] = useState(false);
  const recommendationsGroups = groupsData.filter((i) => !i.is_member);

  const groupsToDisplay = showAll
    ? recommendationsGroups
    : recommendationsGroups.slice(0, 3);

  return (
    <div className={flexCenter + " flex-col items-start mx-auto w-full"}>
      <p className={asideTitleStyle}>Comunidades Recomendadas</p>
      <div className="flex justify-center items-center flex-col gap-6 w-full">
        {groupsToDisplay.map((g) => (
          <Group key={g.id} group={g} />
        ))}
        {recommendationsGroups.length > 3 && (
          <Button
            className="w-full text-white"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Ver menos" : "Ver mais"}
          </Button>
        )}
      </div>
    </div>
  )
}