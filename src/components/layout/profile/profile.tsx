"use client"
import { Card } from "@/components/ui/card"
import { flexCenter } from "@/utils/styles"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ProfileTop } from "./profile-top"
import { ProfileBottom } from "./profile-bottom"
import { userType } from "@/data/users"

type props = {
  user: userType;
  moreInfos?: boolean;
}
export const Profile = ({ user, moreInfos }: props) => {
  if(!user) return null;
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [slug, setSlug] = useState(user.slug);
  const [bio, setBio] = useState(user.bio);
  const [description, setDescription] = useState(user.description);
  const pathname = usePathname();

  useEffect(() => {
    setIsEditing(pathname.includes('/edit') ? true : false);
  }, []);

  return (
    <Card className={`relative bg-card rounded-xl text-center shadow-lg py-0 gap-3 overflow-hidden w-full`}>
      <div className={`flex items-center justify-center ${moreInfos ? 'h-48' : 'h-36'}`}>
        <Image src="/code-bg.jpg" alt="code-bg"
          width={240} height={240}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={flexCenter + ' flex-col p-4 pb-6 pt-0'}>
        <ProfileTop data={user}
          moreInfos={moreInfos}
          isEditing={isEditing}
          name={name} setName={setName}
          slug={slug} setSlug={setSlug}
        />
        <ProfileBottom
          data={user}
          moreInfos={moreInfos}
          isEditing={isEditing}
          bio={bio} setBio={setBio}
          description={description} setDescription={setDescription}
        />
      </div>
    </Card>
  )
}