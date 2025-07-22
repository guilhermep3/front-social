import { GroupsAside } from "@/components/layout/aside/group";
import { Profile } from "@/components/layout/profile/profile";
import { RecentAside } from "@/components/layout/aside/recent";
import { Skills } from "@/components/layout/profile/skills";
import { Header } from "@/components/layout/header";

type props = {
  children: string;
}
export default function Layout({ children }: props) {

  return (
    <div className="relative flex justify-center items-start mx-auto mt-24 md:mt-28 h-auto">
      <Header />
      <aside className={`sticky top-28 hidden xl:flex justify-center items-center flex-col gap-8 w-80 pb-4`}>
        <Profile />
        <Skills />
        <GroupsAside />
      </aside>
      <main className="flex-1 w-full max-w-2xl min-h-screen px-1 md:px-5">
        {children}
      </main>
      <aside className="sticky top-28 hidden xl:flex justify-center items-center flex-col w-96 bg-card rounded-xl border border-border p-4">
        <RecentAside />
      </aside>
    </div>
  )
}