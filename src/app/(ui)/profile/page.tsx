import { Profile } from "@/components/layout/profile/profile";
import { Header } from "@/components/layout/header";
import { useUsers } from "@/utils/useUsers";
import { userType } from "@/data/users";

export default function Page() {
  const { users: usersData, loading: loadingUsers } = useUsers();
  const userData  = usersData.find((i) => i.id === 1);

  return (
    <div className="w-full">
      <Header />
      {!loadingUsers && userData &&
        <Profile user={userData} moreInfos />
      }
    </div>
  )
}