'use client'
import UsersPage from "@/components/UsersPage";
import { UsersPageContextProvider } from "@/context/UsersPageContext";

export default function Home() {
  return (
    <UsersPageContextProvider>
      <UsersPage/>
    </UsersPageContextProvider>
  );
}
