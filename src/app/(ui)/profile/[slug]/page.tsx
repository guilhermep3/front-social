"use client"
import { Header } from "@/components/layout/header";
import { Profile } from "@/components/layout/profile/profile";
import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";
import { userType } from "@/data/users";
import { useUsers } from "@/utils/useUsers";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState<userType | undefined>(undefined);
  const { slug } = useParams();
  const { users: usersData, loading: loadingUsers } = useUsers();

  useEffect(() => {
    if (usersData) {
      setUser(usersData.find((i) => i.slug === slug));
    }
  }, [usersData])

  return (
    <div className="w-full">
      <Header />
      {loadingUsers && <ProfileSkeleton />}
      {!loadingUsers && usersData && user &&
        <Profile user={user} moreInfos />
      }
    </div>
  )
}