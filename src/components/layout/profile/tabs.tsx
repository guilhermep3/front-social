import { Post } from "@/components/post/post"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { postsData } from "@/data/posts"
import { usersData, userType } from "@/data/users";

type props = {
  user: userType;
}
export const TabsPerfil = ({ user }: props) => {
  
  const myPosts = postsData.filter(post => post.user_id === user.id)
    .map((post) => {
      const user = usersData.find(u => u.id === post.user_id);
      return { post, user };
    });

  const likedPosts = postsData.filter(post => post.users_liked?.includes(user.id))
    .map((post) => {
      const user = usersData.find(u => u.id === post.user_id);
      return { post, user };
    });

  return (
    <Tabs className="w-full" defaultValue="posts">
      <TabsList className="w-full">
        <TabsTrigger value="posts" className="cursor-pointer border-border">Postagens</TabsTrigger>
        <TabsTrigger value="likedPosts" className="cursor-pointer border-border">Curtidas</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="flex flex-col gap-6 text-start">
        {myPosts.map((i, index) => (
          <Post key={index} post={i.post} user={i.user!} userPost />
        ))}
      </TabsContent>
      <TabsContent value="likedPosts" className="flex flex-col gap-6 text-start">
        {likedPosts.map((i, index) => (
          <Post key={index} post={i.post} user={i.user!} liked />
        ))}
      </TabsContent>
    </Tabs>
  )
}