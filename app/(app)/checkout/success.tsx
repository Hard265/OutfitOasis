import { useTheme } from '@/hooks/useTheme'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function CheckoutSuccessPage() {
  const { onbackgroundColor } = useTheme()

  return (
    <View className="flex-1 justify-center bg-white dark:bg-black p-4">
      <View className="flex-1 items-center justify-center p-10">
        <Text className="text-3xl font-bold dark:text-white uppercase mb-2">
          Congrates
        </Text>
        <Text className="text-lg dark:text-gray-400 text-center mb-12">
          You successfully completed the payment
        </Text>
        <View className="p-8 bg-green-500/15 rounded-full">
          <Feather name="check-circle" size={100} color={colors.green[500]} />
        </View>
      </View>
      <View className="flex-row gap-4 flex">
        <TouchableOpacity
          style={{
            borderRadius: 6,
            marginBottom: 8,
            padding: 12,
            flex: 1,
            backgroundColor: onbackgroundColor
          }}
        >
          <Text className="text-white dark:text-black text-center font-semibold">
            Track order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 6,
            marginBottom: 8,
            padding: 12,
            flex: 1,
            backgroundColor: onbackgroundColor
          }}
        >
          <Text className="text-white dark:text-black text-center font-semibold">
            Continue shopping
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
