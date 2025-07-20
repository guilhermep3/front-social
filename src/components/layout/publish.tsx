"use client"
import { Card } from "../ui/card"
import Image from "next/image"
import { Button } from "../ui/button"
import { Camera, Video } from "lucide-react"
import { ButtonIcon } from "../button-icon"

export const Publish = () => {

  return (
    <Card className="py-3 px-3 md:px-5">
      <div className="flex gap-2">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden">
          <Image src="/users/user-profile.jpg" alt="user-profile"
            width={100} height={100}
            className="w-full h-full"
          />
        </div>
        <Button variant={"secondary"} className="border border-border text-sm md:text-base">Começe uma nova publicação...</Button>
      </div>
      <div className="flex justify-evenly">
        <ButtonIcon Icon={Video} label="Video" />
        <ButtonIcon Icon={Camera} label="Fotos" />
        <ButtonIcon Icon={Video} label="Video" />
      </div>
    </Card>
  )
}