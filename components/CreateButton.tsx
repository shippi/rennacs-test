'use client'

import { useContext } from "react"
import CreateUserModal from "./CreateUserModal";
import { UsersPageContext } from "@/context/UsersPageContext";

function CreateButton() {
  const { createUserModalOpen, setCreateUserModalOpen } = useContext(UsersPageContext);

  return (
    <>
      {createUserModalOpen && <CreateUserModal/>}
      <button 
      className="flex gap-x-2 w-fit text-sm font-semibold text-white bg-blue-500 px-2 py-1 rounded-lg shadow-md hover:bg-blue-600"
      onClick={ () => setCreateUserModalOpen(true) }
      >
        <i className="bi bi-pencil-square"/>
        Add User
      </button>
    </>

  )
}

export default CreateButton