import { User } from "@/types/Users";
import DeleteButton from "./DeleteButton";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import { UsersPageContext } from "@/context/UsersPageContext";
import axios from "axios";
import { useContext } from "react";


function UsersTable() {
  const { page, setCount } = useContext(UsersPageContext);

  const { data, isLoading, error, isError } = useQuery({
		queryKey: ["users", page],
		queryFn: async() => {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}users?page=${page}`);
			setCount(data.count);
      return data;
		}
	});
  
  const emptyCount = Array(20 - (data?.users.length || 0)).fill(null);

  return (
    <div className="relative overflow-x-auto rounded-lg">
      {
        isLoading &&
        <div className="flex justify-center items-center absolute w-full h-full bg-white bg-opacity-80">
          <Spinner/>
        </div>
      }

      <table className="bg-white  shadow-lg table-fixed">
        <thead className="text-left text-xs">
          <tr>
            <th className="w-20 border-b text-left px-6 py-2"></th>
            <th className="w-32 bg-blue-100 border text-left px-4 py-2">First Name</th>
            <th className="w-32 bg-blue-100 border text-left px-4 py-2">Last Name</th>
            <th className="w-64 bg-blue-100 border text-left px-4 py-2">Email</th>
            <th className="w-36 bg-blue-100 border text-left px-4 py-2">Phone Number</th>
            <th className="w-[452px] bg-blue-100 border text-left px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.users.map((currUser: User, i: number) => (
              <tr key={i} className="hover:bg-stone-100 text-sm duration-300 group">
                <th className="text-center border text-left px-4 py-2 text-xs">{currUser.id}</th>
                <td className="border-b px-4 py-2 break-words">{currUser.first_name}</td>
                <td className="border-b px-4 py-2 break-words">{currUser.last_name}</td>
                <td className="max-w-64 border-b px-4 py-2 break-words">{currUser.email}</td>
                <td className="border-b px-4 py-2 break-words">{currUser.phone_number}</td>
                <td className="flex gap-x-4 justify-between items-center border-b px-4 py-2">
                  {currUser.address}
                  <DeleteButton userId={currUser.id}/>
                </td>
              </tr>
            ))
          }
          {
            emptyCount.map((val, i) => (
            <tr key={i} className="hover:bg-stone-100 text-sm duration-300 h-[39px]">
              <th className="border text-left px-4 py-2 text-xs"></th>
              <td className="border-b px-4 py-2 break-words"></td>
              <td className="border-b px-4 py-2 break-words"></td>
              <td className="max-w-64 border-b px-4 py-2 break-words"></td>
              <td className="border-b px-4 py-2 break-words"></td>
              <td className="border-b px-4 py-2"></td>
            </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default UsersTable