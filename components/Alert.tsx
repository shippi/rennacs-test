import { UsersPageContext } from "@/context/UsersPageContext";
import { useContext } from "react";

function Alert() {
  const { alertMessage, alertSuccess } = useContext(UsersPageContext);

  return (
    <div className="flex justify-center items-center fixed w-fit m-auto top-4 left-0 right-0 z-10">
      <div className={`animate-alert [animation-fill-mode:forwards] flex justify-center gap-x-2 text-sm px-4 py-1 border-2 rounded-full text-white ${alertSuccess ? "bg-green-500 border-emerald-500" : "bg-red-500 border-red-600"}`}>
        <i className={`bi bi-${ alertSuccess ? "check-circle" : "x-circle" }`}/>
        {alertMessage}
      </div>
    </div>
  )
}

export default Alert