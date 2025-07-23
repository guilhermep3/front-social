"use client"
import { Profile } from "@/components/layout/profile/profile";
import { Header } from "@/components/layout/header";
import { useUsers } from "@/utils/useUsers";

export default function Page() {
  const { users: usersData, loading: loadingUsers } = useUsers();
  const user = usersData.find((i) => i.slug === 'username');

  return (
    <div className="w-full">
      <Header />
      {!loadingUsers &&
        <Profile user={user!} moreInfos />
      }
    </div>
  )
}