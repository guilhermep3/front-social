import { flexCenter } from "@/utils/styles"

export const HeaderPerfil = () => {

  return (
    <div className={flexCenter+' gap-2 px-2 py-1 border rounded-lg'}>
      <div className="bg-zinc-400 dark:bg-zinc-700 rounded-full block w-10 h-10">
      </div>
      <p className="hidden md:block">Nome usuário</p>
    </div>
  )
}