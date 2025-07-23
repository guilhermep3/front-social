"use client"
import { Header } from "@/components/layout/header";
import { Profile } from "@/components/layout/profile/profile";
import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";
import { useUsers } from "@/utils/useUsers";
import { useParams } from "next/navigation"

export default function Page() {
  const { slug } = useParams() as { slug: string };
  const { users: usersData, loading: loadingUsers } = useUsers();
  const user = usersData.find((i) => i.slug === slug);

  return (
    <div className="w-full">
      <Header />
      {!loadingUsers && user && slug &&
        <Profile user={user!} moreInfos />
      }
      {loadingUsers && <ProfileSkeleton />}
    </div>
  )
}