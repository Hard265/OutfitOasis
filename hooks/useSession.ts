import { SessionContext } from '@/providers/SessionProvider'
import { useContext } from 'react'

export function useSession() {
  const ctx = useContext(SessionContext)
  if (process.env.NODE_ENV !== 'production' && !ctx) {
    throw new Error('useSession must be used within a SessionProvider')
  }
  return ctx
}
