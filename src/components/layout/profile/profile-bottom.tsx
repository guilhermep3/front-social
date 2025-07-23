"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Highlights } from "./highlights";
import { editInputDivStyle, flexCenter } from "@/utils/styles";
import { TabsPerfil } from "./tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { userType } from "@/data/users";

type props = {
  data: userType;
  moreInfos: boolean | undefined;
  isEditing: boolean;
  bio: string;
  setBio: (newValue: string) => void;
  description: string;
  setDescription: (newValue: string) => void;
}
export const ProfileBottom = ({ data, moreInfos, isEditing, bio, setBio, description, setDescription }: props) => {
  const router = useRouter();

  return (
    <div className="w-full">
      {!isEditing && <>
        <p className="flex justify-center mt-4">
          Olá, sou desenvolvedor front-end
        </p>
      </>}
      {!moreInfos && isEditing && <>
        <p className="flex justify-center mt-4">
          Olá, sou desenvolvedor front-end
        </p>
      </>}
      {moreInfos && isEditing && <>
        <div className={editInputDivStyle}>
          <Label htmlFor="bio">Bio</Label>
          <Input id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>
      </>}
      {!moreInfos &&
        <Button className="mt-6 w-full text-white py-2 rounded-full bg-blue-500 hover:bg-blue-600"
          onClick={() => router.push(`/profile/${data.slug}`)}
        >
          Meu perfil
        </Button>
      }
      {moreInfos && (
        <div className={flexCenter + ' flex-col gap-6 mt-5'}>
          {!isEditing && <p>{data.description}</p>}
          {!moreInfos && isEditing && <p>{data.description}</p>}
          {moreInfos && isEditing &&
            <div className={editInputDivStyle}>
              <Label htmlFor="desc">Descrição</Label>
              <Textarea id="desc"
                value={description} onChange={(e) => setDescription(e.target.value)}
                className="h-28 resize-none border-border"
              />
            </div>
          }
          <div className="md:px-10 w-full">
            <Highlights data={data} />
          </div>
          <TabsPerfil user={data} />
        </div>
      )}
    </div>
  )
}