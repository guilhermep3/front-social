import { EllipsisVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { headerNavData } from "@/data/header-nav"
import Link from "next/link"

export const HeaderDropdown = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex justify-center items-center w-9 h-9 border border-border rounded-md cursor-pointer bg-background">
          <EllipsisVertical />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Navegue</DropdownMenuLabel>
        {headerNavData.map((i) => (
          <DropdownMenuItem key={i.id}>
            <Link href={`/${i.slug}`} className="flex gap-1">
              <DropdownMenuShortcut className="ml-0">{i.icon}</DropdownMenuShortcut>
              {i.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}