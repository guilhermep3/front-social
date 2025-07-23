import { asideTitleStyle } from "@/utils/styles"

export const HighlightsSkeleton = () => {

  return (
    <div className="w-full animate-pulse">
      <p className={asideTitleStyle}>Destaques</p>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <p key={index}
            className="p-3 bg-card w-24 rounded-lg text-secondary-foreground text-sm shadow-md
              shadow-zinc-400 dark:shadow-black border border-border hover:border-primary transition cursor-pointer"
          >
          </p>
        ))}
      </div>
    </div>
  )
}