import { useTheme } from '@/hooks/useTheme'
import stores from '@/stores'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View, SectionList, Pressable, Text, ScrollView } from 'react-native'
import { Iconify } from 'react-native-iconify'

export default function ProductsPage() {
  const { onbackgroundColor } = useTheme()
  const productsStore = stores.productsStore

  const data = [{}]

  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black p-4">
      <StatusBar style="auto" />
      <SectionList
        ListHeaderComponent={() => (
          <View className="flex-row gap-6 items-start justify-evenly flex-wrap">
            {[1, 3, 4, 4, 5].map((_, index) => (
              <Pressable className="items-center mx-2" key={index}>
                <View className="p-4 rounded-full bg-gray-200 dark:bg-gray-700">
                  <Iconify
                    icon="mynaui:shopping-bag"
                    size={24}
                    color={onbackgroundColor}
                  />
                </View>
                <Text>shoes</Text>
              </Pressable>
            ))}
            <Pressable className="items-center">
              <View className="p-3 rounded-full bg-gray-200 dark:bg-gray-700">
                <Iconify
                  icon="mynaui:plus-circle"
                  size={24}
                  color={onbackgroundColor}
                />
              </View>
              <Text>Others</Text>
            </Pressable>
          </View>
        )}
        renderSectionHeader={({ section }) => {
          return (
            <View>
              <View className="flex-row items-center justify-between">
                <Text className="text-2xl font-bold capitalize">
                  {section.title}
                </Text>
                <Link href="" className="font-bold dark:text-white">
                  see all
                </Link>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="gap-3"
              >
                {[
                  'all',
                  'shoes',
                  'bangles',
                  't-shirts',
                  'groves',
                  'trouser',
                  'socks',
                  'caps'
                ].map((filter, index) => (
                  <Pressable
                    className="items-center rounded-2xl bg-gray-50 px-3 py-2"
                    key={index}
                  >
                    <Text className="font-medium text-gray-600 ">{filter}</Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          )
        }}
        sections={[
          {
            title: 'most popular',
            data: [
              {
                id: 1,
                name: 'Product 1'
              },
              {
                id: 2,
                name: 'Product 2'
              }
            ]
          },
          {
            title: 'trending',
            data: [
              {
                id: 3,
                name: 'Product 3'
              }
            ]
          }
        ]}
        renderItem={({ item }) => {
          return (
            <Link
              href={`/products/${item.id}`}
              className="text-2xl font-bold text-blue-500"
            >
              {item.name}
            </Link>
          )
        }}
      />
    </View>
  )
}
