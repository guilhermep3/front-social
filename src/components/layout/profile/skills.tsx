import { usersData } from "@/data/users";
import { asideTitleStyle } from "@/utils/styles"

export const Skills = () => {
  const user = usersData.find((i) => i.slug === 'username');

  return (
    <div className="w-full">
      <p className={asideTitleStyle}>Skills</p>
      <div className="flex flex-wrap gap-2">
        {user!.skills.map((s) => (
          <p key={s}
            className="px-3 py-2 bg-card w-fit rounded-lg text-secondary-foreground text-sm shadow-md shadow-zinc-400 dark:shadow-black border border-border hover:border-primary transition cursor-pointer">
            {s}
          </p>
        ))}
      </div>
    </div>
  )
}