'use client'

import { PropsWithChildren, createContext, useEffect, useState } from "react"

export const UsersPageContext = createContext<any>(null);

export const UsersPageContextProvider = ({ children }: PropsWithChildren) => {
  const [createUserModalOpen, setCreateUserModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

	const values = {
    createUserModalOpen, setCreateUserModalOpen,
    alertOpen, setAlertOpen,
    alertMessage, setAlertMessage,
    alertSuccess, setAlertSuccess,
    page, setPage,
    count, setCount,
	}

  useEffect(() => {
    if (alertOpen) setTimeout(() => { setAlertOpen(false); setAlertMessage(""); setAlertSuccess(false); }, 2000);
  }, [alertOpen]);

	return (
		<UsersPageContext.Provider value={values}>
			{ children }
		</UsersPageContext.Provider>
	)
}