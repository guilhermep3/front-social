"use client"
import { postType } from "@/data/posts";
import { useEffect, useState } from "react";

export function usePosts() {
  const [posts, setPosts] = useState<postType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('/data/posts.json');
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }

    getUsers();
  }, []);

  return { posts, loading };
}