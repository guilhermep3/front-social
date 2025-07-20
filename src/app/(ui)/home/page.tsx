"use client"
import { Publish } from "@/components/layout/publish";
import { Post } from "@/components/post";
import { postsData } from "@/data/posts";

export default function Page() {

  return (
    <div className="flex flex-col gap-5">
      <Publish />
      {postsData.map((i) => (
        <Post key={i.id} data={i} />
      ))}
    </div>
  )
}