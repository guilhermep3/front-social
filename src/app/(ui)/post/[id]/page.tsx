"use client"
import { Post } from "@/components/post/post";
import { postsData } from "@/data/posts";
import { usersData } from "@/data/users";
import { useParams } from "next/navigation"

export default function Page() {
  const params = useParams();
  const id = Number(params.id);

  const post = postsData.find(p => p.id === id);
  const user = usersData.find(i => i.id === id);

  return (
    <div>
      <Post user={user!} post={post!} />
    </div>
  )
}