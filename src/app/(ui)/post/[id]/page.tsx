"use client"
import { Post } from "@/components/post";
import { postsData } from "@/data/posts";
import { useParams } from "next/navigation"

export default function Page() {
  const params = useParams();
  const id = Number(params.id);

  const post = postsData.find(p => p.id === id);

  return (
    <div>
      <Post data={post!} />
    </div>
  )
}