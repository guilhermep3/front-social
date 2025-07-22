import { userData } from "@/data/user"
import { asideTitleStyle } from "@/utils/styles"

export const Skills = () => {

  return (
    <div className="w-full">
      <p className={asideTitleStyle}>Skills</p>
      <div className="flex flex-wrap gap-2">
        {userData.skills.map((s) => (
          <p key={s}
            className="px-3 py-2 bg-card w-fit rounded-lg text-secondary-foreground text-sm shadow-md shadow-zinc-400 dark:shadow-black border border-border hover:border-primary transition cursor-pointer">
            {s}
          </p>
        ))}
      </div>
    </div>
  )
}