import { useStorageState } from '@/hooks/useStorageState'
import { router } from 'expo-router'
import { createContext, PropsWithChildren } from 'react'

interface Session {
  token: string
  email: string
  username: string
}

export const SessionContext = createContext<{
  login(data: Session): void
  logout(): void
  loading: boolean
  session: Session | null
}>({
  login() {},
  logout() {},
  session: null,
  loading: true
})

export default function SessionProvider(props: PropsWithChildren) {
  const [[loading, session], setSession] = useStorageState('session')

  const sess = session ? (JSON.parse(session) as Session) : null

  const login = (data: Session) => {
    setSession(JSON.stringify(data))
  }

  const logout = () => {
    setSession(null)
    router.replace('/login')
  }

  return (
    <SessionContext.Provider
      value={{
        session: sess,
        login,
        logout,
        loading
      }}
    >
      {props.children}
    </SessionContext.Provider>
  )
}
