import { useTheme } from '@/hooks/useTheme'
import stores from '@/stores'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { observer } from 'mobx-react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default observer(() => {
  const { onbackgroundColor } = useTheme()

  const cartStore = stores.cartStore

  return (
    <View className="flex-1 justify-center bg-white dark:bg-black">
      <FlatList
        data={cartStore.items}
        className="flex-1"
        renderItem={({ item }) => (
          <View className="flex-row w-full items-center justify-between p-4">
            <View className="flex-1 flex-row items-center gap-3">
              <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-md"
              />
              <View className="flex-col flex-1 justify-start">
                <Text
                  className="dark:text-white font-semibold text-lg"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
                <Text
                  className="dark:text-white"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </Text>
                <Text
                  className="dark:text-white font-semibold  text-lg"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.price}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center space-x-2 border border-gray-300 dark:border-gray-700 rounded-full">
              <TouchableOpacity
                style={styles.quantityHandler}
                onPress={() => {
                  cartStore.updateItem({
                    id: item.id,
                    quantity: (item.quantity || 1) - 1
                  })
                }}
              >
                <Feather name="minus" size={20} color={onbackgroundColor} />
              </TouchableOpacity>
              <View className="p-1.5 px-2 border-l border-r border-gray-300 dark:border-gray-700">
                <Text className="dark:text-white  font-semibold">
                  {item.quantity || 1}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.quantityHandler}
                onPress={() => {
                  cartStore.updateItem({
                    id: item.id,
                    quantity: (item.quantity || 1) + 1
                  })
                }}
              >
                <Feather name="plus" size={20} color={onbackgroundColor} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View>
        <View className="flex-row items-center justify-between p-4">
          <Text className="dark:text-white text-lg">
            {cartStore.totalItems} items
          </Text>
          <Text className="dark:text-white font-semibold text-lg">
            {cartStore.totalPrice}
          </Text>
        </View>
        <View className="flex-row items-center justify-between p-4">
          <Text className="dark:text-white  text-lg">Shipping</Text>
          <Text className="dark:text-white font-semibold text-lg">
            {cartStore.shippingPrice}
          </Text>
        </View>
        <View className="flex-row items-center justify-between p-4">
          <Text className="dark:text-white text-lg">Total</Text>
          <Text className="dark:text-white font-semibold text-lg">
            {cartStore.totalPrice + cartStore.shippingPrice}
          </Text>
        </View>
      </View>
      <View className="p-4">
        <Link href="/(app)/checkout/add-address" asChild push>
          <TouchableOpacity
            style={{
              borderRadius: 6,
              marginBottom: 8,
              padding: 12,
              backgroundColor: onbackgroundColor
            }}
          >
            <Text className="text-white dark:text-black text-center font-semibold">
              Checkout
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  quantityHandler: {
    padding: 6
  }
})
