"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { flexCenter } from "@/utils/styles"
import { Star } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { TabsPerfil } from "./tabs"

type props = {
  moreInfos?: boolean;
}
export const Profile = ({ moreInfos }: props) => {
  const router = useRouter();

  return (
    <Card className={`relative bg-card rounded-xl text-center shadow-lg py-0 gap-3 overflow-hidden w-full`}>
      <div className="flex items-center justify-center h-36">
        <Image src="/code-bg.jpg" alt="code-bg"
          width={200} height={144}
          className="w-full h-full"
        />
      </div>
      <div className={flexCenter + ' flex-col p-4 pb-6 pt-0'}>
        <div className={`flex justify-between items-start w-full ${moreInfos ? 'md:justify-around' : ''}`}>
          <div className="flex flex-col">
            <p className="font-bold text-lg">1984</p>
            <p className="text-sm text-muted-foreground">Seguidores</p>
          </div>
          <div className="flex flex-col">
            <div className={`${moreInfos ? 'w-36 h-36' : 'w-28 h-28'} mx-auto -mt-16 mb-4 overflow-hidden rounded-xl z-[5] p-1 bg-muted`}>
              <Image src="/users/user-profile.jpg" alt="User"
                width={160} height={160}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <p className="font-bold text-lg">Nome do usuário</p>
            <span className="text-muted-foreground text-sm">@username</span>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-lg">1002</p>
            <p className="text-sm text-muted-foreground">Seguindo</p>
          </div>
        </div>
        <p className="flex mt-4">
          <Star className="w-5 h-5 fill-yellow-500 stroke-yellow-600 mr-1" />
          Olá, sou desenvolvedor front-end
          <Star className="w-5 h-5 fill-yellow-500 stroke-yellow-600 ml-1" />
        </p>
        {!moreInfos &&
          <Button className="mt-6 w-full text-white py-2 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-600"
            onClick={() => router.push('/profile')}
          >
            Meu perfil
          </Button>
        }
        {moreInfos && (<>
          <div className="my-4">
            <p>Sou desenvolvedor front-end com conhecimento em HTML, CSS, Javascript, Typescript, React.js, Next.js, Tailwind, Git e Sass.</p>
          </div>
          <TabsPerfil />
        </>
        )}
      </div>
    </Card>
  )
}