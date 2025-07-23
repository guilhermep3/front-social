"use client"
import { userType } from '@/data/users';
import { useEffect, useState } from 'react';

export function useUsers() {
  const [users, setUsers] = useState<userType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('/data/users.json');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };

    getUsers();
  }, []);

  return { users, loading };
}
