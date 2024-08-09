import { useSession } from '@/hooks/useSession'
import { Redirect, Slot, Stack } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'

export default function Layout() {
  const { loading, session } = useSession()

  if (loading) {
    console.log('loading')
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }

  if (!session) {
    // Redirect to login page if not authenticated
    return <Redirect href="/(auth)/login" />
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="checkout"
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </Stack>
  )
}
