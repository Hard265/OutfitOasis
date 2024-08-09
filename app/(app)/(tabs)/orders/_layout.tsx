import { useTheme } from '@/hooks/useTheme'
import { Stack } from 'expo-router'

export default function OrdersLayout() {
  const { backgroundColor, onbackgroundColor } = useTheme()
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor },
        headerTintColor: onbackgroundColor
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Orders' }} />
      {/* ... other screens ... */}
    </Stack>
  )
}
