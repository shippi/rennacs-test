import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import CreateButton from "./CreateButton";
import Pagination from "./Pagination";
import UsersTable from "./UsersTable";
import { UsersPageContext } from "@/context/UsersPageContext";

function UsersPage() {
  const { page, setCount } = useContext(UsersPageContext);

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
        <div className="flex flex-col gap-y-2">
          <CreateButton/>
          <UsersTable users={data?.users || []}/>
        </div>
        
        <Pagination/>
      </main>
    </>
  );
}

export default UsersPage