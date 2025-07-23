"use client"
import { Post } from "@/components/post/post";
import { usePosts } from "@/utils/usePosts";
import { useUsers } from "@/utils/useUsers";
import { useParams } from "next/navigation"

export default function Page() {
  const params = useParams();
  const id = Number(params.id);
  const { users: usersData, loading: loadingUsers } = useUsers();
  const { posts: postsData, loading: loadingPosts } = usePosts();

  const post = postsData.find(p => p.id === id);
  const user = usersData.find(i => i.id === id);

  return (
    <div>
      <Post user={user!} post={post!} />
    </div>
  )
}