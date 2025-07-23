import { flexCenter } from "@/utils/styles"
import Image from "next/image"
import Link from "next/link"

export const HeaderPerfil = () => {

  return (
    <Link href={`/profile/username`} className={flexCenter + ' gap-2 px-2 py-1 border rounded-lg bg-card'}>
      <div className="bg-zinc-400 dark:bg-zinc-700 rounded-full block w-10 h-10 overflow-hidden">
        <Image src={'/users/user-profile.jpg'} alt="user-profile"
          width={44} height={44}
          className="w-full h-full"
        />
      </div>
      <p className="hidden md:block">Nome do usuário</p>
    </Link>
  )
}