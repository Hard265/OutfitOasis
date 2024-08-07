import { Button } from '@/components/Button'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black p-4">
      {/* <Text className="text-2xl font-bold mb-4">With Old new Collection</Text> */}
      <Image
        source={require('../assets/splash.png')}
        className="w-full h-64 mb-4"
      />
      <Link href="/(app)/(tabs)/products" asChild>
        {/* <Button className='bg-red-200'> */}
        <Text className="text-white text-center">Shop Now</Text>
        {/* </Button> */}
      </Link>
    </View>
  )
}
