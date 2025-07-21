import { Profile } from "@/components/layout/perfil/perfil";
import { Header } from "@/components/layout/header";

export default function Page() {

  return (
    <div className="w-full">
      <Header />
      <Profile moreInfos/>
    </div>
  )
}