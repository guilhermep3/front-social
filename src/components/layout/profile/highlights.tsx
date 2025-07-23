import { usersData, userType } from "@/data/users";
import { asideTitleStyle } from "@/utils/styles"

type props = {
  data: userType;
}
export const Highlights = ({ data }: props) => {
  const user = usersData.find((i) => i.slug === 'username');

  return (
    <div className="w-full">
      <p className={asideTitleStyle}>Destaques</p>
      <div className="flex flex-wrap gap-2">
        {data!.highlights.map((s) => (
          <p key={s}
            className="px-3 py-2 bg-card w-fit rounded-lg text-secondary-foreground text-sm shadow-md
              shadow-zinc-400 dark:shadow-black border border-border hover:border-primary transition cursor-pointer"
            >
            {s}
          </p>
        ))}
      </div>
    </div>
  )
}