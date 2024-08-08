import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren
} from 'react'
import NetInfo from '@react-native-community/netinfo'
import Snackbar from '@/components/Snackbar'

interface NetworkContextType {
  isConnected: boolean | null
  isInternetReachable: boolean | null
}

export const NetworkContext = createContext<NetworkContextType>({
  isConnected: false,
  isInternetReachable: false
})

export function NetworkProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<NetworkContextType>({
    isConnected: false,
    isInternetReachable: false
  })
  const [message, setMessage] = useState('')

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setStatus({
        isConnected: state.isConnected,
        isInternetReachable: state.isInternetReachable
      })
      setMessage(
        state.isConnected
          ? 'Connected to the internet'
          : 'No internet connection'
      )
    })

    return () => unsubscribe()
  }, [])

  return (
    <NetworkContext.Provider value={status}>
      {children}
      <Snackbar message={message} duration={3000} />
    </NetworkContext.Provider>
  )
}
