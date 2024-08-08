import { useTheme } from '@/hooks/useTheme'
import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  const { onbackgroundColor } = useTheme()
  return (
    <View className="flex-1 justify-center bg-white dark:bg-black p-4">
      {/* <Text className="text-2xl font-bold mb-4">With Old new Collection</Text> */}
      <Image
        source={require('../assets/splash.png')}
        className="w-full h-64 mb-4"
      />
      <Link href="/(app)/tabs/products" asChild>
        <TouchableOpacity
          style={{
            borderRadius: 6,
            marginBottom: 8,
            padding: 12,
            backgroundColor: onbackgroundColor
          }}
        >
          <Text className="text-white dark:text-black text-center font-semibold">
            Shop now
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}
