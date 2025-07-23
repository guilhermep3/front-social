import { containerStyle, flexCenter } from "@/utils/styles"
import { ThemeToggle } from "../theme/theme-toggle"
import { Logo } from "../logo"
import { HeaderNav } from "../header-nav"
import { HeaderPerfil } from "../header-perfil"
import { HeaderDropdown } from "../header-dropdown"

export const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 bg-zinc-100 dark:bg-zinc-950 border-b z-40">
      <div className={`${containerStyle} flex justify-between items-center gap-6 p-3 sm:px-5 sm:py-5 md:pb-6`}>
        <div className={flexCenter}>
          <Logo />
        </div>
        <HeaderNav className="hidden md:flex md:-translate-y-1" />
        <div className="flex items-center gap-2">
          <div className="block md:hidden">
            <HeaderDropdown />
          </div>
          <ThemeToggle />
          <HeaderPerfil />
        </div>
      </div>
    </header>
  )
}