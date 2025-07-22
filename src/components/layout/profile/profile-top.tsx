"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userType } from "@/data/users";
import { editInputDivStyle } from "@/utils/styles";
import { Ban, Check, Pen } from "lucide-react";
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";

type props = {
  data: userType;
  moreInfos: boolean | undefined;
  isEditing: boolean;
  name: string;
  slug: string;
  setName: (newValue: string) => void;
  setSlug: (newValue: string) => void;
}
export const ProfileTop = ({ data, moreInfos, isEditing, name, setName, slug, setSlug }: props) => {
  const router = useRouter();

  const pathname = usePathname();
  const isMyProfile = pathname.includes('username')

  // const isMyProfile = data.id === 1;

  return (
    <div className={`flex justify-between items-start ${moreInfos ? 'md:justify-around gap-5 md:gap-10' : ''}`}>
      <div className="flex flex-col items-center">
        <p className="font-bold text-lg">{data.followers}</p>
        <p className="text-sm text-muted-foreground">Seguidores</p>
        {isEditing
          &&
          <Button variant={"secondary"}
            className={`mt-5 shadow-md border border-border !p-2 ${moreInfos && isEditing ? '' : 'hidden'}`}
            title="Cancelar"
            onClick={() => router.push(`/profile/${data.slug}`)}
          >
            <Ban className="stroke-red-600 !w-full !h-full" />
          </Button>
        }
      </div>
      <div className="flex flex-col">
        <div className={`${moreInfos ? 'w-32 h-32 md:w-36 md:h-36' : 'w-28 h-28'} mx-auto -mt-16 mb-4 overflow-hidden rounded-xl z-[5] p-1 bg-muted`}>
          <Image src={`/users/${data.image_user}`} alt="User"
            width={160} height={160}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        {!isEditing && <>
          <p className="font-bold text-lg">{name}</p>
          <span className="text-muted-foreground text-sm">@{slug}</span>
        </>}
        {!moreInfos && isEditing && <>
          <p className="font-bold text-lg">{name}</p>
          <span className="text-muted-foreground text-sm">@{slug}</span>
        </>}
        {moreInfos && isEditing && (<>
          <div className={editInputDivStyle + ' min-w-48'}>
            <Label htmlFor="name">Nome do usuário</Label>
            <Input id="name"
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={editInputDivStyle + ' min-w-48'}>
            <Label htmlFor="slug">Slug</Label>
            <Input id="slug"
              value={slug} onChange={(e) => setSlug(e.target.value)}
            />
          </div>
        </>)}
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-lg">{data.following}</p>
        <p className="text-sm text-muted-foreground">Seguindo</p>
        {isEditing
          ?
          <Button variant={"secondary"}
            className={`mt-5 shadow-md border border-border !p-2 ${moreInfos && isEditing ? '' : 'hidden'} ${!isMyProfile && 'hidden'}`}
            title="Salvar"
            onClick={() => router.push(`/profile/${data.slug}`)}
          >
            <Check className="stroke-green-600 !w-full !h-full scale-125" />
          </Button>
          :
          <Button variant={"secondary"}
            className={`mt-5 shadow-md border border-border !p-2 ${moreInfos && !isEditing ? '' : 'hidden'} ${!isMyProfile && 'hidden'}`}
            title="Editar"
            onClick={() => router.push('/profile/edit')}
          >
            <Pen className="!w-full !h-full" />
          </Button>
        }
      </div>
    </div>
  )
}