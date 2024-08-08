import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Link, router } from 'expo-router'
import { useRef, useState } from 'react'
import { useTheme } from '@/hooks/useTheme'

export default function AddAddressPage() {
  const { onbackgroundColor } = useTheme()
  const [form, setForm] = useState({
    country: '',
    name: '',
    city: '',
    postalCode: '',
    address: '',
    phone: ''
  })

  const countryRef = useRef<TextInput>(null)
  const nameRef = useRef<TextInput>(null)
  const cityRef = useRef<TextInput>(null)
  const postalCodeRef = useRef<TextInput>(null)
  const addressRef = useRef<TextInput>(null)
  const phoneRef = useRef<TextInput>(null)

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-black p-4 "
      contentContainerClassName="justify-center"
    >
      <View className="mt-8">
        <Text className="text-lg font-semibold mb-1 dark:text-white">
          Country
        </Text>
        <TextInput
          ref={countryRef}
          value={form.country}
          onChangeText={(country) => setForm({ ...form, country })}
          onSubmitEditing={() => nameRef.current?.focus()}
          blurOnSubmit={false}
          autoComplete="country"
          returnKeyType="next"
          className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
        />
      </View>

      <View className="mt-2">
        <Text className="text-lg font-semibold mb-1 dark:text-white">
          Full Name
        </Text>
        <TextInput
          ref={nameRef}
          value={form.name}
          onChangeText={(name) => setForm({ ...form, name })}
          onSubmitEditing={() => cityRef.current?.focus()}
          blurOnSubmit={false}
          autoComplete="name"
          returnKeyType="next"
          className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
        />
      </View>

      <View className="flex-row justify-between mt-2 flex gap-4">
        <View className="flex-1">
          <Text className="text-lg font-semibold mb-1 dark:text-white">
            City
          </Text>
          <TextInput
            ref={cityRef}
            value={form.city}
            onChangeText={(city) =>
              setForm({
                ...form,
                city
              })
            }
            onSubmitEditing={() => postalCodeRef.current?.focus()}
            blurOnSubmit={false}
            autoComplete="postal-address-region"
            returnKeyType="next"
            className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
          />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-semibold mb-1 dark:text-white">
            Postal Code
          </Text>
          <TextInput
            ref={postalCodeRef}
            value={form.postalCode}
            onChangeText={(postalCode) => setForm({ ...form, postalCode })}
            onSubmitEditing={() => addressRef.current?.focus()}
            autoComplete="postal-code"
            returnKeyType="done"
            keyboardType="number-pad"
            className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
          />
        </View>
      </View>

      <View className=" mt-2">
        <Text className="text-lg font-semibold mb-1 dark:text-white">
          Delivery address
        </Text>
        <TextInput
          ref={addressRef}
          value={form.address}
          onChangeText={(address) => setForm({ ...form, address })}
          onSubmitEditing={() => phoneRef.current?.focus()}
          blurOnSubmit={false}
          autoComplete="street-address"
          returnKeyType="next"
          className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
        />
      </View>

      <View className="">
        <Text className="text-lg font-semibold mt-2 mb-1 dark:text-white">
          Number we can call
        </Text>
        <View className="flex-row justify-between flex gap-4">
          <View className="">
            <TextInput
              autoComplete="postal-address-region"
              returnKeyType="next"
              className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
            />
          </View>
          <View className="flex-1">
            <TextInput
              ref={phoneRef}
              value={form.phone}
              onChangeText={(phone) => setForm({ ...form, phone })}
              onSubmitEditing={() => router.push('/checkout/payment')}
              autoComplete="postal-code"
              returnKeyType="go"
              keyboardType="phone-pad"
              className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
            />
          </View>
        </View>
      </View>
      <Link href="/checkout/payment" asChild push>
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
            Continue to payment
          </Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  )
}
