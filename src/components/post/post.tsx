"use client"
import { ButtonIcon } from "@/components/button-icon";
import { PostButton } from "./post-button";
import { Card } from "@/components/ui/card";
import { postType } from "@/data/posts";
import { CircleEllipsis, Ellipsis, Heart, MessageSquareMore, Plus, Send } from "lucide-react";
import Image from "next/image";
import { PostTime } from "./post-time";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type props = {
  data: postType;
  userPost?: boolean;
}
export const Post = ({ data, userPost }: props) => {
  const [showCommentaries, setShowCommentaries] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isPostPage = pathname === `/post/${data.id}`;

  useEffect(() => {
    if (isPostPage) setShowCommentaries(true);
  }, [])

  function handlePush() {
    if (isPostPage) return;
    router.push(`/post/${data.id}`);
  }

  return (
    <Card className={`p-4 md:p-6`}>
      <div className="flex gap-4 w-full">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
          <Image src={`/users/${data.image_user}`} alt={`foto de perfil de ${data.username}`}
            width={56} height={56}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <p className="font-bold text-base md:text-lg">{data.username}</p>
            <p className="text-muted-foreground text-sm md:text-base">@{data.label}</p>
          </div>
          <PostTime time={data.time} />
        </div>
        {!userPost &&
          <ButtonIcon Icon={Plus}
            label="Seguir"
            className="ml-auto bg-transparent text-primary font-bold !gap-0 !p-2 h-fit border-transparent hover:border-border hover:shadow-md transition"
          />
        }
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className={`text-sm md:text-base ${!isPostPage && 'cursor-pointer'}`}
          onClick={handlePush}>
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
        <div onClick={() => setShowCommentaries(prev => !prev)}>
          <PostButton Icon={MessageSquareMore}
            quantity={data.amount_commentaries}
            color="green"
          />
        </div>
        <PostButton Icon={Send}
          quantity={data.shares}
          color="blue"
        />
        <PostButton Icon={CircleEllipsis}
          color="default"
        />
      </div>
      {showCommentaries && (
        <div className={`flex flex-col gap-8`}>
          {data.commentaries?.map((i) => (
            <div key={i.id} className="flex flex-col gap-2 px-3 md:px-6">
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <img src={`/users/${i.image_user}`} alt={i.image_user} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm md:text-base font-bold">{i.username}</p>
                  <p className="text-xs md:text-sm text-secondary-foreground">@{i.label}</p>
                </div>
                <Ellipsis className="ml-auto" />
              </div>
              <p className="text-sm md:text-base">{i.comment}</p>
              <div className="flex justify-start gap-8">
                <PostButton Icon={Heart}
                  quantity={i.likes}
                  color="red"
                  small
                />
                <PostButton Icon={MessageSquareMore}
                  quantity={0}
                  color="green"
                  small
                />
              </div>
            </div>
          ))}
        </div>
      )
      }
    </Card>
  )
}