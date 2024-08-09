import { useTheme } from '@/hooks/useTheme'
import { Slot, Stack } from 'expo-router'

export default function ProductLayout() {
  const { backgroundColor, onbackgroundColor } = useTheme()

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor },
        headerTintColor: onbackgroundColor
      }}
    />
  )
}
