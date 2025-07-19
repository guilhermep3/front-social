import { GroupsAside } from "@/components/layout/aside/group-aside";
import { PerfilAside } from "@/components/layout/aside/perfil-aside";
import { Header } from "@/components/layout/header";

type props = {
  children: string;
}
export default function Layout({ children }: props) {

  return (
    <div>
      <Header />
      <aside>
        <PerfilAside />
        <GroupsAside />
      </aside>
      {children}
      <aside>

      </aside>
    </div>
  )
}