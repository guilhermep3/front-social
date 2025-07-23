"use client"
import { Post } from "@/components/post/post";
import { PostSkeleton } from "@/components/skeletons/post-skeleton";
import { postType } from "@/data/posts";
import { userType } from "@/data/users";
import { usePosts } from "@/utils/usePosts";
import { useUsers } from "@/utils/useUsers";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Page() {
  const [post, setPost] = useState<postType | null>(null);
  const [user, setUser] = useState<userType | null>(null);
  const params = useParams();
  const id = Number(params.id);
  const { users: usersData, loading: loadingUsers } = useUsers();
  const { posts: postsData, loading: loadingPosts } = usePosts();

  useEffect(() => {
    const foundPost = postsData.find(p => p.id === id) as postType
    if (foundPost) {
      setPost(foundPost);
      const foundUser = usersData.find(i => i.id === foundPost.user_id);
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [usersData, postsData]);

  return (
    <div>
      {!loadingUsers && !loadingPosts && user && post &&
        <Post user={user} post={post} fullDesc liked={post.users_liked?.includes(user.id)} />
      }
      {loadingUsers || loadingPosts && <PostSkeleton />}
    </div>
  )
}