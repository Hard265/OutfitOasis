import { useSession } from '@/hooks/useSession'
import { useTheme } from '@/hooks/useTheme'
import { Stack } from 'expo-router'
import { Image } from 'react-native'

export default function ProductsLayout() {
  const { backgroundColor, onbackgroundColor } = useTheme()
  const { session } = useSession()

  const greeting = `Hi, ${session?.username || session?.email}!`
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: { backgroundColor },
        headerTintColor: onbackgroundColor,
        headerShadowVisible: false
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: greeting,
          headerLeft(props) {
            return (
              <Image
                source={require('@/assets/splash.png')}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full mr-2"
              />
            )
          }
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{ headerShown: false, animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="collections"
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </Stack>
  )
}
