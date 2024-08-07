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
import { useSession } from '@/hooks/useSession'

export default function SignupPage() {
  const { login } = useSession()
  const { onbackgroundColor } = useTheme()
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })
  const usernameRef = useRef<TextInput>(null)
  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const password2Ref = useRef<TextInput>(null)

  const handleSignup = () => {
    login({ token: 'xxxxxx' })
    router.replace('/(app)/(tabs)/products')
  }

  const disableSubmit = !Object.values(form).every(Boolean)

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-black p-4 "
      contentContainerClassName="justify-center"
    >
      <View className="mt-8">
        <Text className="text-lg font-semibold mt-2 dark:text-white">
          Username
        </Text>
        <TextInput
          ref={usernameRef}
          value={form.username}
          onChangeText={(username) => setForm({ ...form, username })}
          onSubmitEditing={() => emailRef.current?.focus()}
          blurOnSubmit={false}
          placeholder="Username"
          autoComplete="username-new"
          returnKeyType="next"
          placeholderClassName="text-gray-300 dark:text-gray-400"
          className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
        />
      </View>

      <View>
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

      <View className="flex-row justify-between flex gap-4">
        <View className="flex-1">
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
            onSubmitEditing={() => password2Ref.current?.focus()}
            blurOnSubmit={false}
            placeholder="Password"
            secureTextEntry
            autoComplete="password-new"
            returnKeyType="next"
            placeholderClassName="text-gray-300 dark:text-gray-400"
            className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
          />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-semibold mt-2 dark:text-white">
            Re-Password
          </Text>
          <TextInput
            ref={password2Ref}
            value={form.password2}
            onChangeText={(password2) => setForm({ ...form, password2 })}
            onSubmitEditing={handleSignup}
            placeholder="Password"
            secureTextEntry
            autoComplete="password-new"
            returnKeyType="done"
            placeholderClassName="text-gray-300 dark:text-gray-400"
            className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
          />
        </View>
      </View>

      <Text>
        By clicking signup you agree to the{' '}
        <Link href="">Terms and Conditions</Link>
      </Text>

      <TouchableOpacity
        disabled={disableSubmit}
        style={{
          borderRadius: 6,
          marginBottom: 8,
          padding: 12,
          opacity: disableSubmit ? 0.5 : 1,
          backgroundColor: onbackgroundColor
        }}
        onPress={handleSignup}
      >
        <Text className="text-white dark:text-black text-center font-semibold">
          Register
        </Text>
      </TouchableOpacity>

      <Link href="/login" asChild>
        <TouchableOpacity>
          <Text className="text-center text-gray-500 dark:text-gray-300">
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  )
}
