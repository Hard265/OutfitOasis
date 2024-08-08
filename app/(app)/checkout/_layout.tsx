import { useTheme } from '@/hooks/useTheme'
import { Stack } from 'expo-router'

export default function CheckoutLayout() {
  const { backgroundColor, onbackgroundColor } = useTheme()
  return (
    <Stack
      initialRouteName="add-address"
      screenOptions={{
        headerStyle: { backgroundColor },
        headerTintColor: onbackgroundColor,
        animationTypeForReplace: 'push'
      }}
    >
      <Stack.Screen
        name="add-address"
        options={{ title: 'Add Your Address' }}
      />
      <Stack.Screen name="payment" options={{ title: 'Payment Methods' }} />
      <Stack.Screen
        name="success"
        options={{
          title: 'Order Success',
          headerShown: false // Hide the header for the success screen
        }}
      />
    </Stack>
  )
}
