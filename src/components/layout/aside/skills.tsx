import { asideTitleStyle } from "@/utils/styles"

export const Skills = [
  "Javascript", "Typescript", "Python", "Java", "PHP", "React.js", "HTML", "CSS"
]

export const SkillsAside = () => {

  return (
    <div className="w-full">
      <p className={asideTitleStyle}>Skills</p>
      <div className="flex flex-wrap gap-2">
        {Skills.map((s) => (
          <p key={s}
            className="px-3 py-2 bg-card w-fit rounded-lg text-secondary-foreground text-sm shadow-md shadow-muted-foreground border border-transparent hover:border-primary transition cursor-pointer">
            {s}
          </p>
        ))}
      </div>
    </div>
  )
}