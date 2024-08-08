import { useTheme } from '@/hooks/useTheme'
import { Link } from 'expo-router'
import { ScrollView, Text, TouchableOpacity } from 'react-native'

export default function PaymentPage() {
  const { onbackgroundColor } = useTheme()

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-black p-4 "
      contentContainerClassName="justify-center"
    >
      <Link href="/checkout/success" asChild push>
        <TouchableOpacity
          style={{
            borderRadius: 6,
            marginBottom: 8,
            marginTop: 32,
            padding: 12,
            backgroundColor: onbackgroundColor
          }}
        >
          <Text className="text-white dark:text-black text-center font-semibold">
            Complete order
          </Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  )
}
