import { FormEvent, useState } from "react"
import CloseButton from "./CloseButton";

interface Props {
  closeHandler: Function
}

function CreateUserModal({ closeHandler } : Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-40 z-10">
      
      <form className="flex flex-col gap-y-2 pb-6 text-sm bg-stone-200 rounded-lg shadow-md" onSubmit={ e => handleSubmit(e) }>
        <CloseButton className="self-end" closeHandler={closeHandler}/>
        <div className="flex w-full justify-between gap-x-2 pt-1 px-8">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" required value={firstName} onChange={e => setFirstName(e.target.value)}></input>
        </div>
        <div className="flex w-full justify-between gap-x-2 px-8">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" required value={lastName} onChange={e => setLastName(e.target.value)}></input>
        </div>
        <div className="flex w-full justify-between gap-x-2 px-8">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
        </div>
      </form>
    </div>
  )
}

export default CreateUserModal