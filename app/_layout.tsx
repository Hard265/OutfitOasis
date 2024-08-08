import { Slot } from 'expo-router'
import '../global.css'
import SessionProvider from '@/providers/SessionProvider';
import { NetworkProvider } from '@/providers/NetworkProvider';

export const unstable_settings = {
  initialRouteName: '/(app)/(tabs)/products/index'
}

export default function RootLayout() {
  return (
    <NetworkProvider>
      <SessionProvider>
        <Slot initialRouteName="/(app)/(tabs)/products/index" />
      </SessionProvider>
    </NetworkProvider>
  )
}
