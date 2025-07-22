import { Post } from "@/components/post/post"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { postsData } from "@/data/posts"

export const TabsPerfil = () => {
  const myPosts = postsData.filter((p) => p.label === 'username');
  const likedPosts = postsData.filter((post) => post.liked === true);

  return (
    <Tabs className="w-full" defaultValue="posts">
      <TabsList className="w-full">
        <TabsTrigger value="posts" className="cursor-pointer border-border">Postagens</TabsTrigger>
        <TabsTrigger value="likedPosts" className="cursor-pointer border-border">Curtidas</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="flex flex-col gap-6 text-start">
        {myPosts.map((i) => (
          <Post key={i.id} data={i} userPost />
        ))}
      </TabsContent>
      <TabsContent value="likedPosts" className="flex flex-col gap-6 text-start">
        {likedPosts.map((i) => (
          <Post key={i.id} data={i} liked />
        ))}
      </TabsContent>
    </Tabs>
  )
}