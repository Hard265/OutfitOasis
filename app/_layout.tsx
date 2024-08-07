import { Slot } from 'expo-router'
import '../global.css'
import SessionProvider from '@/providers/SessionProvider'

export const unstable_settings = {
  initialRouteName: '/(app)/(tabs)/products/index'
}

export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot initialRouteName="/(app)/(tabs)/products/index" />
    </SessionProvider>
  )
}
