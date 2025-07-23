import { flexCenter } from "@/utils/styles"
import { useUsers } from "@/utils/useUsers"
import Image from "next/image"
import Link from "next/link"

export const HeaderPerfil = () => {
  const { users, loading } = useUsers();

  const user = users.find((i) => i.id === 1);

  return (
    <Link href={`/profile/username`} className={flexCenter + ' gap-2 px-2 py-1 border rounded-lg bg-card'}>
      <div className="bg-zinc-400 dark:bg-zinc-700 rounded-full block w-10 h-10 overflow-hidden">
        <Image src={'/users/user-profile.jpg'} alt="user-profile"
          width={44} height={44}
          className="w-full h-full"
        />
      </div>
      {user ?
        <p className="hidden md:block">
          {user.name.length > 16 ? user.name.slice(0, 16) : user.name}
        </p>
        : <p className="hidden md:block">Nome de usuário</p>
      }
    </Link>
  )
}