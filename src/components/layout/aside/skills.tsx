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
          <p key={s} className="px-3 py-2 bg-card w-fit rounded-lg text-muted-foreground text-sm">{s}</p>
        ))}
      </div>
    </div>
  )
}