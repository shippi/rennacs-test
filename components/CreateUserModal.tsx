import { FormEvent, useState } from "react"
import CloseButton from "./CloseButton";

interface Props {
  closeHandler: Function
}

function CreateUserModal({ closeHandler } : Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-40 z-10">  
      <form className="flex flex-col justify-center items-center gap-y-2 pb-6 text-sm bg-gradient-to-b from-stone-100 to-gray-200 rounded-lg shadow-md" onSubmit={ e => handleSubmit(e) }>
        <CloseButton className="self-end" closeHandler={closeHandler}/>
        <div className="flex w-full justify-between gap-x-2 pt-1 px-8">
          <label className="text-stone-800" htmlFor="firstName">First Name:</label>
          <input className="rounded-sm border-2 px-1" type="text" id="firstName" required value={firstName} onChange={e => setFirstName(e.target.value)}></input>
        </div>
        <div className="flex w-full justify-between gap-x-2 px-8">
          <label className="text-stone-800" htmlFor="lastName">Last Name:</label>
          <input className="rounded-sm border-2 px-1" type="text" id="lastName" required value={lastName} onChange={e => setLastName(e.target.value)}></input>
        </div>
        <div className="flex w-full justify-between gap-x-2 px-8">
          <label className="text-stone-800" htmlFor="email">Email:</label>
          <input className="rounded-sm border-2 px-1" type="text" id="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
        </div>
        <div className="flex w-full justify-between gap-x-2 px-8">
          <label className="text-stone-800" htmlFor="phoneNumber">Phone:</label>
          <input className="rounded-sm border-2 px-1" type="text" id="phoneNumber" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input>
        </div>
        <div className="w-5/6 h-[1px] bg-stone-300 my-2"/>
        <div className="flex w-full justify-between gap-x-2 px-8">
          <label className="text-stone-800" htmlFor="address">Address:</label>
          <input className="rounded-sm border-2 px-1" type="text" id="address" required value={address} onChange={e => setAddress(e.target.value)}></input>
        </div>
        <div className="flex w-full justify-between gap-x-2 px-8">
          <label className="text-stone-800" htmlFor="suburb">Town/Suburb:</label>
          <input className="rounded-sm border-2 px-1" type="text" id="suburb" required value={suburb} onChange={e => setSuburb(e.target.value)}></input>
        </div>
        <div className="flex w-full justify-between gap-x-2 px-8">
          <label className="text-stone-800" htmlFor="city">City:</label>
          <input className="rounded-sm border-2 px-1" type="text" id="city" required value={city} onChange={e => setCity(e.target.value)}></input>
        </div>
        <div className="flex w-full justify-between gap-x-2 px-8">
          <label className="text-stone-800" htmlFor="postalCode">Postal Code:</label>
          <input className="rounded-sm border-2 px-1" type="text" id="postalCode" required value={postalCode} onChange={e => setPostalCode(e.target.value)}></input>
        </div>
        <div className="w-full h-2"/>
        <button className="bg-blue-500 text-white w-32 py-1 rounded-md hover:bg-blue-600" type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateUserModal