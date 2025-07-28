import { containerStyle, flexCenter } from "@/utils/styles"
import { Github, Globe, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export const Footer = () => {

  return (
    <footer className="absolute bottom-0 w-full z-40 bg-white dark:bg-black border-t border-border">
      <div className={`${containerStyle} ${flexCenter} flex-col gap-10 py-10 px-4 text-sm`}>
        <div className={flexCenter + ' gap-6'}>
          <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank"
            className="hover:bg-muted p-2 shadow-md border shadow-zinc-400 dark:shadow-zinc-900 rounded-full transition"
            title="Linkedin"
          >
            <Linkedin className="stroke-primary" />
          </Link>
          <Link href={'https://github.com/guilhermep3'} target="_blank"
            className="hover:bg-muted p-2 shadow-md border shadow-zinc-400 dark:shadow-zinc-900 rounded-full transition"
            title="Github"
          >
            <Github className="stroke-primary" />
          </Link>
          <Link href={'mailto:guilhermepereiracolela@gmail.com'} target="_blank"
            className="hover:bg-muted p-2 shadow-md border shadow-zinc-400 dark:shadow-zinc-900 rounded-full transition"
            title="Email"
          >
            <Mail className="stroke-primary" />
          </Link>
          <Link href={'https://guilhermep3.vercel.app/'} target="_blank"
            className="hover:bg-muted p-2 shadow-md border shadow-zinc-400 dark:shadow-zinc-900 rounded-full transition"
            title="Portfolio"
          >
            <Globe className="stroke-primary" />
          </Link>
        </div>
        <div>
          <p>Layout de referência do figma: <Link href={'https://www.figma.com/community/file/1378391749789269446'} target="_blank" className="text-blue-900 dark:text-blue-300 hover:underline">Clique aqui</Link></p>
        </div>
        <div className={`${flexCenter} flex-col md:flex-row gap-6`}>
          <div className="md:border-r md:border-muted md:pr-6">
            &copy; Copyright - Todos os direitos reservados
          </div>
          <div>
            Desenvolvido por <Link href="https://github.com/guilhermep3" target="_blank" className="hover:underline">Guilherme Pereira</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}