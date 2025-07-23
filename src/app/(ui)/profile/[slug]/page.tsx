"use client"
import { Header } from "@/components/layout/header";
import { Profile } from "@/components/layout/profile/profile";
import { useUsers } from "@/utils/useUsers";
import { useParams } from "next/navigation"

export default function Page() {
  const { slug } = useParams();
  const { users: usersData, loading: loadingUsers } = useUsers();
  const user = usersData.find((i) => i.slug === slug);

  return (
    <div className="w-full">
      <Header />
      <Profile user={user!} moreInfos />
    </div>
  )
}