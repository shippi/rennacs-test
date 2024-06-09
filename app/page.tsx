'use client'
import UsersTable from "@/components/UsersTable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  
  const { data, isLoading, error, isError } = useQuery({
		queryKey: ["users", page],
		queryFn: async() => {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}users?page=${page}`);
			return data;
		}
	});

  const [count, setCount] = useState(data ? data.count : 0);
  
  return (
    <main className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-stone-200 to-gray-300">
      {
        !isLoading &&
        <UsersTable users={data.users}/>
      }
    </main>
  );
}
