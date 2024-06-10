'use client'
import CreateButton from "@/components/CreateButton";
import Pagination from "@/components/Pagination";
import UsersTable from "@/components/UsersTable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const { data, isLoading, error, isError } = useQuery({
		queryKey: ["users", page],
		queryFn: async() => {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}users?page=${page}`);
			setCount(data.count);
      return data;
		}
	});

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      <main className="flex flex-col gap-y-2 justify-center items-center h-screen bg-gradient-to-b from-stone-200 to-gray-300">

        <UsersTable currentPage={page} users={data?.users || []}/>
        <Pagination count={count} currentPage={page} setPage={setPage}/>
      </main>
    </>
  );
}
