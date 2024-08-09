import { Stack, useLocalSearchParams } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

export default function CategoryPage() {
  const { collection } = useLocalSearchParams<{ collection: string }>()

  return (
    <>
      <View></View>
      <Stack.Screen options={{ title: collection }} />
    </>
  )
}
