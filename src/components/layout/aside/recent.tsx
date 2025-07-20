import { asideTitleStyle } from "@/utils/styles"
import { CheckCircle } from "lucide-react"

export const RecentAside = () => {

  return (
    <div>
      <p className={asideTitleStyle}>Atividades recentes</p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-5 bg-background p-4 rounded-xl">
          <div className="relative w-14 h-14">
            <img src="user.png" alt="user" className="rounded-lg" />
            <CheckCircle className="absolute -top-1/2 -right-1/2 translate-y-3/5 -translate-x-3/5 text-primary" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base">Nome de usuario</p>
            <p className="text-sm text-muted-foreground">Seguiu você <span className="text-primary ml-2">3 min atrás</span></p>
          </div>
        </div>
        <div className="flex gap-5 bg-background p-4 rounded-xl">
          <div className="relative w-14 h-14">
            <img src="user.png" alt="user" className="rounded-lg" />
            <CheckCircle className="absolute -top-1/2 -right-1/2 translate-y-3/5 -translate-x-3/5 text-primary" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base">Nome de usuario</p>
            <p className="text-sm text-muted-foreground">Seguiu você <span className="text-primary ml-2">3 min atrás</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}