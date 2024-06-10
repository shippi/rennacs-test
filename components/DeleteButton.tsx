import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"

interface Props {
  userId: number,
  currentPage: number,
  className?: string
}

function DeleteButton({ userId, currentPage, className } : Props) {
  const queryClient = useQueryClient();
  const deleteUser = useMutation({
    mutationFn: async() => await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}users/${userId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", currentPage]});
    }
  })

  return (
    <button 
      className={`px-[4px] py-[1px] bg-red-500 rounded-sm text-white hover:bg-red-600 ${className}`}
      onClick={ () => deleteUser.mutate() }
    >
      <i className="bi bi-trash-fill"/>
    </button>
  )
}

export default DeleteButton