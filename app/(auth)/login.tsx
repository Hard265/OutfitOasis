import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Link, router } from 'expo-router'
import { useRef, useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { useSession } from '@/hooks/useSession'

export default function LoginPage() {
  const { login } = useSession()
  const { onbackgroundColor } = useTheme()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)

  const handleLogin = () => {
    login({ token: 'xxxxxx', email: form.email, username: form.email })
    router.replace('/(app)/(tabs)/products')
  }

  const disableLogin = !Object.values(form).every(Boolean)

  return (
    <View className="flex-1 bg-white dark:bg-black p-4 justify-center">
      <View className="mt-8">
        <Text className="text-lg font-semibold mt-2 dark:text-white">
          Email address
        </Text>
        <TextInput
          ref={emailRef}
          value={form.email}
          onChangeText={(email) => setForm({ ...form, email })}
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="next"
          placeholderClassName="text-gray-300 dark:text-gray-400"
          className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
        />
      </View>
      <View className="mt-2">
        <Text className="text-lg font-semibold mt-2 dark:text-white">
          Password
        </Text>
        <TextInput
          ref={passwordRef}
          value={form.password}
          onChangeText={(password) =>
            setForm({
              ...form,
              password
            })
          }
          onSubmitEditing={handleLogin}
          blurOnSubmit={false}
          placeholder="Password"
          secureTextEntry
          autoComplete="current-password"
          returnKeyType="done"
          placeholderClassName="text-gray-300 dark:text-gray-400"
          className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
        />
      </View>
      <View className="items-end mt-2 mb-4">
        <Link href="forgot-password" asChild>
          <Text className="text-center text-gray-500 dark:text-gray-300">
            Forgot your password?
          </Text>
        </Link>
      </View>

      <TouchableOpacity
        disabled={disableLogin}
        style={{
          borderRadius: 6,
          marginBottom: 8,
          padding: 12,
          opacity: disableLogin ? 0.25 : 1,
          backgroundColor: onbackgroundColor
        }}
        onPress={handleLogin}
      >
        <Text className="text-white dark:text-black text-center font-semibold">
          Login
        </Text>
      </TouchableOpacity>

      <Link href="/signup" asChild>
        <TouchableOpacity>
          <Text className="text-center text-gray-500 dark:text-gray-300">
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}
