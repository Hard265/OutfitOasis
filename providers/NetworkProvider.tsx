import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren
} from 'react'
import NetInfo from '@react-native-community/netinfo'

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

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setStatus({
        isConnected: state.isConnected,
        isInternetReachable: state.isInternetReachable
      })
    })

    return () => unsubscribe()
  }, [])

  return (
    <NetworkContext.Provider value={status}>{children}</NetworkContext.Provider>
  )
}
