import { useTheme } from '@/hooks/useTheme'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  const { backgroundColor, onbackgroundColor } = useTheme()
  return (
    <Stack
      initialRouteName="login"
      screenOptions={{
        headerStyle: { backgroundColor },
        headerTintColor: onbackgroundColor,
        animationTypeForReplace: 'push'
      }}
    />
  )
}
