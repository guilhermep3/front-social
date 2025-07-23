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
import { usersData, userType } from "@/data/users";

type props = {
  post: postType;
  user: userType;
  userPost?: boolean;
  liked?: boolean;
  fullDesc?: boolean;
}
export const Post = ({ post, user, userPost, liked, fullDesc }: props) => {
  const [showCommentaries, setShowCommentaries] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isPostPage = pathname === `/post/${post.id}`;
  const commentariesWithUser = post.commentaries!.map((comment) => {
    const commentUser = usersData.find(user => user.id === comment.user_id)
    return { ...comment, user: commentUser }
  })

  useEffect(() => {
    if (isPostPage) setShowCommentaries(true);
  }, [])

  function handlePush() {
    if (isPostPage) return;
    router.push(`/post/${post.id}`);
  }

  return (
    <Card className={`p-4 md:p-6`}>
      <div className="flex gap-4 w-full">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
          <Image src={`/users/${user.image_user}`} alt={`foto de perfil de ${user.name}`}
            width={56} height={56}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <p className="font-bold text-base md:text-lg">{user.name}</p>
            <p className="text-muted-foreground text-sm md:text-base">@{user.slug}</p>
          </div>
          <PostTime time={post.time} />
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
          {!fullDesc && post.description.length > 130 ? post.description.slice(0, 130) + '...' : post.description}
        </div>
        {post.image_post &&
          <div className="w-full">
            <Image src={`/posts/${post.image_post}`} alt="netflix-stranger_things"
              width={400} height={400}
              className="w-full"
            />
          </div>
        }
      </div>
      <div className="flex justify-around items-center w-full">
        <PostButton Icon={Heart}
          quantity={post.likes.toLocaleString('pt-BR')}
          color="red"
          liked={liked}
        />
        <div onClick={() => setShowCommentaries(prev => !prev)}>
          <PostButton Icon={MessageSquareMore}
            quantity={post.amount_commentaries}
            color="green"
          />
        </div>
        <PostButton Icon={Send}
          quantity={post.shares}
          color="blue"
        />
        <PostButton Icon={CircleEllipsis}
          color="default"
        />
      </div>
      {showCommentaries && (
        <div className={`flex flex-col gap-8`}>
          {commentariesWithUser?.map((i, index) => (
            <div key={index} className="flex flex-col gap-2 px-3 md:px-6">
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <img src={`/users/${i.user?.image_user}`} alt={i.user?.image_user} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm md:text-base font-bold">{i.user?.name}</p>
                  <p className="text-xs md:text-sm text-secondary-foreground">@{i.user?.slug}</p>
                </div>
                <Ellipsis className="ml-auto" />
              </div>
              <p className="text-sm md:text-base">{i.comment}</p>
              <div className="flex justify-start gap-8">
                <PostButton Icon={Heart}
                  quantity={i.likes.toLocaleString('pt-BR')}
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