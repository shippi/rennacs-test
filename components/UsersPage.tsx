import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import CreateButton from "./CreateButton";
import Pagination from "./Pagination";
import UsersTable from "./UsersTable";
import { UsersPageContext } from "@/context/UsersPageContext";
import Alert from "./Alert";

function UsersPage() {
  const { alertOpen } = useContext(UsersPageContext);

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      {alertOpen && <Alert/>}
      <main className="flex flex-col gap-y-2 justify-center items-center min-h-screen pt-4 bg-gradient-to-b from-stone-200 to-gray-300">
        <div className="flex flex-col gap-y-2">
          <CreateButton/>
          <UsersTable/>
        </div>
        <Pagination/>
      </main>
    </>
  );
}

export default UsersPage