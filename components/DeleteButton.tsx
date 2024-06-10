import { UsersPageContext } from "@/context/UsersPageContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"
import { useContext } from "react";

interface Props {
  userId: number,
  className?: string
}

function DeleteButton({ userId, className } : Props) {
  const { setAlertOpen, setAlertMessage, setAlertSuccess, page } = useContext(UsersPageContext);

  const queryClient = useQueryClient();
  const deleteUser = useMutation({
    mutationFn: async() => await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}users/${userId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", page]});
      setAlertOpen(true);
      setAlertMessage("User successfully deleted.");
      setAlertSuccess(true);
    },
    onError: () => {
      setAlertOpen(true);
      setAlertMessage("Server error.");
      setAlertSuccess(false);
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