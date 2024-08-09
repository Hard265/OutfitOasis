import { useTheme } from '@/hooks/useTheme'
import stores from '@/stores'
import { formatCurreny } from '@/utils/intl'
import { Feather } from '@expo/vector-icons'
import { Redirect, Stack, useGlobalSearchParams } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function ProductDetailPage() {
  const { id } = useGlobalSearchParams<{ id: string }>()
  const { onbackgroundColor } = useTheme()

  const productsStore = stores.productsStore
  const cartStore = stores.cartStore

  const product = productsStore.items.find((product) => product.id === id)
  if (!product) {
    return <Redirect href="../" />
  }

  const addToCart = () => {
    cartStore.addItem(product)
  }

  return (
    <>
      <View className="flex-1 bg-white dark:bg-black p-4">
        <View className="flex-1 relative">
          <Image
            source={require('@/assets/splash.png')}
            resizeMode="cover"
            className="w-full h-full rounded-lg mb-4"
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              padding: 10,
              borderRadius: 50
            }}
          >
            <Feather name="heart" size={24} color={colors.rose[600]} />
          </TouchableOpacity>
        </View>
        <View>
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-2xl font-bold dark:text-white">
                {product.name}
              </Text>
              <View className="flex-row gap-1 mt-1 items-center">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Feather
                    name="star"
                    size={20}
                    key={item}
                    color={onbackgroundColor}
                  />
                ))}
                <Text className="dark:text-white">(100)</Text>
              </View>
            </View>
            <Text className="text-2xl font-bold dark:text-white">
              {formatCurreny(product.price)}
            </Text>
          </View>
          <View className="mt-5">
            <Text className="text-xl font-bold dark:text-white mb-2">
              Details
            </Text>
            <Text className="text-gray-800 dark:text-gray-200">
              {product.description}
            </Text>
          </View>
          <View className="flex-row gap-4 flex mt-6">
            <TouchableOpacity
              style={{
                borderRadius: 6,
                marginBottom: 8,
                padding: 10,
                flex: 2,
                backgroundColor: onbackgroundColor
              }}
              onPress={addToCart}
            >
              <Text className="text-white dark:text-black text-center font-semibold">
                Add to cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 6,
                marginBottom: 8,
                padding: 10,
                flex: 1,
                backgroundColor: onbackgroundColor
              }}
            >
              <Text className="text-white dark:text-black text-center font-semibold">
                Buy now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Stack.Screen
        options={{
          title: '',
          presentation: 'fullScreenModal',
          animation: 'slide_from_bottom',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerRight(props) {
            return (
              <View className="flex-row gap-4">
                <TouchableOpacity>
                  <Feather
                    name="share-2"
                    size={24}
                    className="p-2"
                    color={props.tintColor}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    name="more-vertical"
                    size={24}
                    className="p-2"
                    color={props.tintColor}
                  />
                </TouchableOpacity>
              </View>
            )
          }
        }}
      />
    </>
  )
}
