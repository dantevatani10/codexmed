import { createContext, useContext } from "react"
import type { ReactNode } from "react"

export type User = {
  id: string
  name: string
  role: string
}

const UserContext = createContext<User | null>(null)

export const UserProvider = ({ children }: { children: ReactNode }) => (
  <UserContext.Provider value={null}>{children}</UserContext.Provider>
)

export const useUser = () => useContext(UserContext)
