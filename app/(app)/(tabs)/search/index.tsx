import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { View, FlatList, TextInput } from 'react-native'

export default function SearchScreen() {
  const [search, setSearch] = useState('')

  const data = [{}]
  return (
    <View className="flex-1 justify-center bg-white dark:bg-black">
      <FlatList
        data={data}
        className="p-4"
        ListHeaderComponent={
          <View className="flex-row items-center border border-gray-300 dark:text-white dark:border-gray-700 rounded-md">
            <Feather name="search" size={24} color="gray" className="mx-2" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              onSubmitEditing={() => {}}
              placeholder="Search"
              returnKeyType="search"
              keyboardType="web-search"
              placeholderClassName="text-gray-300 dark:text-gray-400"
              className="flex-1 focus:border-2 p-2 px-3"
            />
          </View>
        }
        renderItem={() => (
          <View className="flex-row items-center justify-between px-2 py-1" />
        )}
      />
    </View>
  )
}
