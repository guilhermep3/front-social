"use client"
import { postType } from "@/data/posts";
import { useEffect, useState } from "react";

export function useGroups() {
  const [groups, setGroups] = useState<postType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('/data/groups.json')
      const data = await res.json();
      setGroups(data);
      setLoading(false);
    }

    getUsers();
  }, []);

  return { groups, loading };
}