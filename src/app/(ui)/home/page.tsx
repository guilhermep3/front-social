"use client"
import { Publish } from "@/components/layout/publish";
import { Post } from "@/components/post/post";
import { postsData } from "@/data/posts";
import { usersData } from "@/data/users";

export default function Page() {
  const userId = 1;

  return (
    <div className="flex flex-col gap-5">
      <Publish />
      {postsData.map((post) => {
        const user = usersData.find((u) => u.id === post.user_id);
        const liked = post.users_liked?.includes(userId)
        return <Post key={post.id} post={post} user={user!} liked={liked} />
      })}
    </div>
  )
}