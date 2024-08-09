import { useTheme } from '@/hooks/useTheme'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useRef, useState } from 'react'
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function PaymentPage() {
  const { onbackgroundColor } = useTheme()
  const [form, setForm] = useState({
    number: '',
    date: '',
    ccv: ''
  })

  const ccvRef = useRef<TextInput>(null)
  const dateRef = useRef<TextInput>(null)
  const numberRef = useRef<TextInput>(null)

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-black p-4 "
      contentContainerClassName="justify-center"
    >
      <Pressable className="flex-row p-3 rounded-md my-2 gap-4">
        <Feather name="circle" size={24} color={onbackgroundColor} />
        <Text className="text-lg font-semibold dark:text-white">PayPal</Text>
      </Pressable>
      <Pressable className="flex-row p-3 rounded-md my-2 gap-4">
        <Feather name="circle" size={24} color={onbackgroundColor} />
        <Text className="text-lg font-semibold dark:text-white">
          Credit or debit card
        </Text>
      </Pressable>

      <View className="mt-3">
        <Text className="text-lg font-semibold mb-1 dark:text-white">
          Card number
        </Text>
        <TextInput
          ref={numberRef}
          value={form.number}
          onChangeText={(number) => setForm({ ...form, number })}
          onSubmitEditing={() => dateRef.current?.focus()}
          blurOnSubmit={false}
          autoComplete="cc-number"
          returnKeyType="next"
          keyboardType="number-pad"
          textContentType="creditCardNumber"
          className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
        />
      </View>

      <View className="flex-row justify-between mt-3 flex gap-4">
        <View className="flex-1">
          <Text className="text-lg font-semibold mb-1 dark:text-white">
            Date
          </Text>
          <TextInput
            ref={dateRef}
            value={form.date}
            onChangeText={(date) =>
              setForm({
                ...form,
                date
              })
            }
            onSubmitEditing={() => ccvRef.current?.focus()}
            blurOnSubmit={false}
            autoComplete="cc-exp-day"
            keyboardType="numbers-and-punctuation"
            returnKeyType="next"
            textContentType="creditCardExpiration"
            className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
          />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-semibold mb-1 dark:text-white">
            CCV
          </Text>
          <TextInput
            ref={ccvRef}
            value={form.ccv}
            onChangeText={(ccv) => setForm({ ...form, ccv })}
            onSubmitEditing={() => null}
            autoComplete="cc-csc"
            returnKeyType="done"
            textContentType="creditCardSecurityCode"
            keyboardType="number-pad"
            className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
          />
        </View>
      </View>

      <Pressable className="flex-row p-3 rounded-md my-2 gap-4">
        <Feather name="plus-circle" size={24} color={onbackgroundColor} />
        <Text className="text-lg font-semibold dark:text-white">
          Add new methods
        </Text>
      </Pressable>

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
