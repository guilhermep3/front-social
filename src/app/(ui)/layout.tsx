import { GroupsAside } from "@/components/layout/aside/group";
import { PerfilAside } from "@/components/layout/aside/perfil";
import { RecentAside } from "@/components/layout/aside/recent";
import { SkillsAside } from "@/components/layout/aside/skills";
import { Header } from "@/components/layout/header";
import { flexCenter } from "@/utils/styles";

type props = {
  children: string;
}
export default function Layout({ children }: props) {

  return (
    <div className="flex justify-center items-start mx-auto mt-24">
      <Header />
      <aside className={`${flexCenter} flex-col gap-8 w-80`}>
        <PerfilAside />
        <SkillsAside />
        <GroupsAside />
      </aside>
      <main className="flex-1 max-w-2xl w-full">
        {children}
      </main>
      <aside className="w-96 bg-card rounded-xl p-4">
        <RecentAside />
      </aside>
    </div>
  )
}