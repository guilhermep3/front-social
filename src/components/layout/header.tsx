import { containerStyle, flexCenter } from "@/utils/styles"
import { ThemeToggle } from "../theme/theme-toggle"
import { Logo } from "../logo"
import { HeaderNav } from "./header-nav"
import { HeaderPerfil } from "./header-perfil"
import { Input } from "../ui/input"

export const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0">
      <div className={`${containerStyle} flex justify-between items-center gap-6 p-3 sm:p-5`}>
        <div className={flexCenter + ' gap-3'}>
          <Logo />
          <Input className="w-fit" placeholder="Pesquisar..."></Input>
        </div>
        <HeaderNav className="hidden md:flex" />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <HeaderPerfil />
        </div>
      </div>
    </header>
  )
}