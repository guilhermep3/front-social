"use client"
import { Publish } from "@/components/layout/publish";
import { Post } from "@/components/post/post";
import { usePosts } from "@/utils/usePosts";
import { useUsers } from "@/utils/useUsers";

export default function Page() {
  const { users: usersData, loading: loadingUsers } = useUsers();
  const { posts: postsData, loading: loadingPosts } = usePosts();
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