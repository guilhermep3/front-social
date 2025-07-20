import { ButtonIcon } from "@/components/button-icon";
import { PostButton } from "@/components/post-button";
import { Card } from "@/components/ui/card";
import { postType } from "@/data/posts";
import { CircleEllipsis, Heart, MessageSquareMore, Plus, Send } from "lucide-react";
import Image from "next/image";
import { PostTime } from "./post-time";

type props = {
  data: postType;
}
export const Post = ({ data }: props) => {

  return (
    <Card className="p-6">
      <div className="flex gap-4 w-full">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
          <Image src={`/users/${data.image_user}`} alt={`foto de perfil de ${data.user}`}
            width={56} height={56}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="font-bold text-base md:text-lg">{data.user}</p>
            <p className="text-muted-foreground text-sm md:text-base">@{data.label}</p>
          </div>
          <PostTime time={data.time} />
        </div>
        <ButtonIcon Icon={Plus}
          label="Seguir"
          className="ml-auto bg-transparent text-primary font-bold !gap-0 !p-2 h-fit border-transparent hover:border-border hover:shadow-md transition"
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="text-sm md:text-base">
          {data.description.length > 130 ? data.description.slice(0, 130) + '...' : data.description}
        </div>
        {data.image_post &&
          <div className="w-full">
            <Image src={`/posts/${data.image_post}`} alt="netflix-stranger_things"
              width={400} height={400}
              className="w-full"
            />
          </div>
        }
      </div>
      <div className="flex justify-around items-center w-full">
        <PostButton Icon={Heart}
          quantity={data.likes}
          color="red"
        />
        <PostButton Icon={MessageSquareMore}
          quantity={data.commentaries}
          color="green"
        />
        <PostButton Icon={Send}
          quantity={data.shares}
          color="blue"
        />
        <PostButton Icon={CircleEllipsis}
          color="default"
        />
      </div>
    </Card>
  )
}