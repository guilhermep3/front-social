"use client"
import { flexCenter } from "@/utils/styles"
import { Globe, Home, Telescope } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const headerNavData = [
  {
    id: 1,
    icon: <Home />,
    name: 'Início',
    slug: 'home'
  },
  {
    id: 2,
    icon: <Globe />,
    name: 'Comunidade',
    slug: 'community'
  },
  {
    id: 3,
    icon: <Telescope />,
    name: 'Explorar',
    slug: 'explore'
  },
]

type props = {
  vertical?: boolean;
  className?: string;
}
export const HeaderNav = ({ vertical, className }: props) => {
  const pathname = usePathname();

  return (
    <div className={`${flexCenter} gap-5 ${vertical ? 'flex-col items-start' : 'flex-row'} ${className}`}>
      {headerNavData.map((i) => (
        <Link href={`/${i.slug}`} className="relative flex items-center gap-2">
          <div className={`p-2 rounded-full  border cursor-pointer hover:shadow-md shadow-zinc-300 dark:shadow-zinc-900 hover:shadow-zinc-400 dark:hover:shadow-zinc-800
            ${pathname.includes(i.slug)
              ? 'text-green-600 shadow-md border-green-300 dark:border-green-900 shadow-zinc-400 dark:shadow-zinc-800'
              : 'text-zinc-700 dark:text-zinc-400'}
          `}>
            {i.icon}
          </div>
          <p className={`absolute -bottom-6 right-1/2 translate-x-1/2 text-green-600 text-sm font-semibold
            ${pathname.includes(i.slug) ? 'block' : 'hidden'}`}>
            {i.name}
          </p>
        </Link>
      ))}
    </div>
  )
}