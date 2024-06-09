import { User } from "@/types/Users";

interface Props {
  users: User[]
}
function UsersTable({ users } : Props) {
  return (
<div className="overflow-x-auto">
  <table className="bg-white rounded-lg shadow-lg">
    <thead className="text-left text-xs">
      <tr>
        <th className="border-b text-left px-6 py-2"></th>
        <th className="bg-blue-100 border text-left px-4 py-2">First Name</th>
        <th className="bg-blue-100 border text-left px-4 py-2">Last Name</th>
        <th className="bg-blue-100 border text-left px-4 py-2">Email</th>
        <th className="bg-blue-100 border text-left px-4 py-2">Phone Number</th>
        <th className="bg-blue-100 border text-left px-4 py-2">Created At</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((currUser, i) => (
          <tr key={i} className="hover:bg-stone-100 text-sm duration-300">
            <th className="border text-left px-4 py-2 text-xs">{currUser.id}</th>
            <td className="border-b px-4 py-2">{currUser.first_name}</td>
            <td className="border-b px-4 py-2">{currUser.last_name}</td>
            <td className="border-b px-4 py-2">{currUser.email}</td>
            <td className="border-b px-4 py-2">{currUser.phone_number}</td>
            <td className="border-b px-4 py-2">{(new Date(currUser.created_at)).toLocaleString()}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>
  )
}

export default UsersTable