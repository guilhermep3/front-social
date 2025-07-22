import { Post } from "@/components/post/post"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { postsData } from "@/data/posts"

export const TabsPerfil = () => {
  const myPosts = postsData.filter((p) => p.label === 'username')

  return (
    <Tabs className="w-full" defaultValue="posts">
      <TabsList className="w-full">
        <TabsTrigger value="posts">Postagens</TabsTrigger>
        <TabsTrigger value="aboutme">Curtidas</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="flex flex-col gap-6 text-start">
        {myPosts.map((i) => (
          <Post key={i.id} data={i} userPost />
        ))}
      </TabsContent>
      <TabsContent value="aboutme">
        <p className="text-muted-foreground my-5">Nenhuma curtida.</p>
      </TabsContent>
    </Tabs>
  )
}