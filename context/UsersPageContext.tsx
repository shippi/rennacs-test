'use client'

import { PropsWithChildren, createContext, useState } from "react"

export const UsersPageContext = createContext<any>(null);

export const UsersPageContextProvider = ({ children }: PropsWithChildren) => {
  const [createUserModalOpen, setCreateUserModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

	const values = {
    createUserModalOpen, setCreateUserModalOpen,
    page, setPage,
    count, setCount
	}

	return (
		<UsersPageContext.Provider value={values}>
			{ children }
		</UsersPageContext.Provider>
	)
}