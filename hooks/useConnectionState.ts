import { NetworkContext } from '@/providers/NetworkProvider'
import { useContext } from 'react'

export function useConnectionState() {
  const context = useContext(NetworkContext)
  if (process.env.NODE_ENV !== 'production' && !context) {
    throw new Error('useConnectionState must be used within a NetworkProvider')
  }
  return context
}
