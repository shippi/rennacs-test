import { UsersPageContext } from "@/context/UsersPageContext"
import { useContext } from "react"

interface Props {
  className?: string
}

function CloseButton({ className } : Props) {
  const { setCreateUserModalOpen } = useContext(UsersPageContext);
  return (
    <button 
      className={`w-6 h-6 bg-red-500 rounded-sm text-white hover:bg-red-600 ${className}`} 
      onClick={() => setCreateUserModalOpen(false)}
    >
      <i className="bi bi-x"/>
    </button>
  )
}

export default CloseButton