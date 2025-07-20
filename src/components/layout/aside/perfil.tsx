import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { flexCenter } from "@/utils/styles"
import { Star } from "lucide-react"

export const PerfilAside = () => {

  return (
    <Card className="relative bg-card rounded-xl w-80 text-center shadow-lg py-0 gap-3 overflow-hidden">
      <div className=" flex items-center justify-center h-36">
        <img src="code-bg.jpg" alt="code-bg" className="w-full h-full" />
      </div>
      <div className={flexCenter + ' flex-col p-4 pb-6 pt-0'}>
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col">
            <p>1984</p>
            <p className="text-sm text-muted-foreground">Seguidores</p>
          </div>
          <div className="flex flex-col">
            <div className="w-28 h-28 mx-auto -mt-16 mb-4 overflow-hidden rounded-xl z-[5] p-1 bg-background">
              <img src="user-profile.jpg" alt="User" className="w-full h-full rounded-xl object-cover" />
            </div>
            <p>Nome do usuário</p>
            <span className="text-muted-foreground text-sm">@username</span>
          </div>
          <div className="flex flex-col">
            <p>1002</p>
            <p className="text-sm text-muted-foreground">Seguindo</p>
          </div>
        </div>
        <p className="flex mt-4">
          <Star className="w-5 h-5 fill-yellow-500 stroke-yellow-600" />
          Hello ,I’m UI / UX designer. Open to the new Project
          <Star className="w-5 h-5 fill-yellow-500 stroke-yellow-600" />
        </p>
        <Button className="mt-6 w-full text-white py-2 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-600">
          Meu perfil
        </Button>
      </div>
    </Card>
  )
}