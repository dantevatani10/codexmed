import { createContext, useState, useContext } from "react"
import type { ReactNode } from "react"

interface AuthState {
  token?: string
  role?: string
}

interface AuthContextProps extends AuthState {
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>(null as never)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({})

  const login = async (_email: string, _password: string) => {
    // TODO: call api
    setState({ token: 'fake', role: 'admin' })
  }

  const register = async () => {
    // TODO
  }

  const logout = () => setState({})

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
