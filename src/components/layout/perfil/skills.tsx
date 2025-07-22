import { asideTitleStyle } from "@/utils/styles"

export const SkillsData = [
  "Javascript", "Typescript", "Python", "Java", "PHP", "React.js", "HTML", "CSS"
]

export const Skills = () => {

  return (
    <div className="w-full">
      <p className={asideTitleStyle}>Skills</p>
      <div className="flex flex-wrap gap-2">
        {SkillsData.map((s) => (
          <p key={s}
            className="px-3 py-2 bg-card w-fit rounded-lg text-secondary-foreground text-sm shadow-md shadow-background border border-transparent hover:border-primary transition cursor-pointer">
            {s}
          </p>
        ))}
      </div>
    </div>
  )
}