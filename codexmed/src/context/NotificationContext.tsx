import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

interface Notification {
  message: string
  severity?: 'success' | 'info' | 'warning' | 'error'
}

interface NotificationContextProps {
  notify: (n: Notification) => void
}

const NotificationContext = createContext<NotificationContextProps>(null as never)

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [, setNotification] = useState<Notification | null>(null)

  const notify = (n: Notification) => {
    setNotification(n)
    // TODO: display toast
  }

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)
