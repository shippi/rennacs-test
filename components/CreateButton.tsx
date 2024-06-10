'use client'

import { useState } from "react"
import CreateUserModal from "./CreateUserModal";

function CreateButton() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <CreateUserModal closeHandler={() => setModalOpen(false)}/>}
      <button 
      className="flex gap-x-2 w-fit text-sm font-semibold text-white bg-blue-500 px-2 py-1 rounded-lg shadow-md hover:bg-blue-600"
      onClick={ () => setModalOpen(true) }
      >
        <i className="bi bi-pencil-square"/>
        Add User
      </button>
    </>

  )
}

export default CreateButton