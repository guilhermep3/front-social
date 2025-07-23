"use client"
import { postType } from "@/data/posts";
import { recentActivitiesType } from "@/data/recent-activities";
import { useEffect, useState } from "react";

export function useActivities() {
  const [activities, setActivities] = useState<recentActivitiesType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('/data/activities.json')
      const data = await res.json();
      setActivities(data);
      setLoading(false);
    }

    getUsers();
  }, []);

  return { activities, loading };
}