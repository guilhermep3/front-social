import { Profile } from "@/components/layout/profile/profile";
import { Header } from "@/components/layout/header";
import { usersData } from "@/data/users";

export default function Page() {
  const userData = usersData.find((i) => i.slug === 'username');

  return (
    <div className="w-full">
      <Header />
      <Profile user={userData!} moreInfos />
    </div>
  )
}