"use client"
import { GroupsAside } from "@/components/layout/aside/group-aside";
import { Profile } from "@/components/layout/profile/profile";
import { RecentAside } from "@/components/layout/aside/recent";
import { Highlights } from "@/components/layout/profile/highlights";
import { Header } from "@/components/layout/header";
import { useUsers } from "@/utils/useUsers";
import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";
import { HighlightsSkeleton } from "@/components/skeletons/highlights-skeleton";
import { Footer } from "@/components/layout/footer";

type props = {
  children: string;
}
export default function Layout({ children }: props) {
  const { users, loading } = useUsers();
  const user = users.find((i) => i.slug === 'username');

  return (
    <div className="relative flex justify-center items-start mx-auto pt-24 md:pt-32 pb-80 md:pb-72 h-auto">
      <Header />
      <aside className={`sticky top-28 hidden xl:flex justify-center items-center flex-col gap-8 w-80 pb-4`}>
        {loading && <>
          <ProfileSkeleton />
          <HighlightsSkeleton />
        </>}
        {!loading && user && <>
          <Profile user={user!} />
          <Highlights data={user!} />
        </>}
        <GroupsAside />
      </aside>
      <main className="flex-1 w-full max-w-2xl min-h-screen pb-5 px-1 md:px-5">
        {children}
      </main>
      <aside className="sticky top-28 hidden xl:flex justify-center items-center flex-col w-96 bg-card rounded-xl border border-border p-4">
        <RecentAside />
      </aside>
      <Footer />
    </div>
  )
}