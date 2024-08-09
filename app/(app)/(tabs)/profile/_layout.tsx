import { useTheme } from '@/hooks/useTheme'
import { Stack } from 'expo-router'

export default function ProfileLayout() {
  const { backgroundColor, onbackgroundColor } = useTheme()
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: { backgroundColor },
        headerTintColor: onbackgroundColor
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Profile' }} />
      <Stack.Screen
        name="edit"
        options={{
          title: 'Edit Profile',
          animation: 'slide_from_right'
        }}
      />
    </Stack>
  )
}
