import { User } from "@/types/Users";
import DeleteButton from "./DeleteButton";
import CreateButton from "./CreateButton";

interface Props {
  users: User[],
  currentPage: number
}
function UsersTable({ users, currentPage } : Props) {
  const emptyCount = Array(20 - users.length).fill(null);

  return (
    <div className="flex flex-col gap-y-2 overflow-x-auto">
      <CreateButton/>
      <table className="bg-white rounded-lg shadow-lg table-fixed">
        <thead className="text-left text-xs">
          <tr>
            <th className="w-12 border-b text-left px-6 py-2"></th>
            <th className="w-32 bg-blue-100 border text-left px-4 py-2">First Name</th>
            <th className="w-32 bg-blue-100 border text-left px-4 py-2">Last Name</th>
            <th className="w-64 bg-blue-100 border text-left px-4 py-2">Email</th>
            <th className="w-36 bg-blue-100 border text-left px-4 py-2">Phone Number</th>
            <th className="w-60 bg-blue-100 border text-left px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((currUser, i) => (
              <tr key={i} className="hover:bg-stone-100 text-sm duration-300 group">
                <th className="border text-left px-4 py-2 text-xs">{currUser.id}</th>
                <td className="border-b px-4 py-2 break-words">{currUser.first_name}</td>
                <td className="border-b px-4 py-2 break-words">{currUser.last_name}</td>
                <td className="max-w-64 border-b px-4 py-2 break-words">{currUser.email}</td>
                <td className="border-b px-4 py-2 break-words">{currUser.phone_number}</td>
                <td className="flex gap-x-4 justify-between items-center border-b px-4 py-2">
                  {(new Date(currUser.created_at)).toLocaleString()}
                  <DeleteButton userId={currUser.id} currentPage={currentPage}/>
                </td>
                
              </tr>
            ))
          }
          {
            emptyCount.map((val, i) => (
            <tr key={i} className="hover:bg-stone-100 text-sm duration-300 h-[37px]">
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