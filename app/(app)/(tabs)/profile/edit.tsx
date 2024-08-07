import { useSession } from '@/hooks/useSession'
import { useTheme } from '@/hooks/useTheme'
import { Feather } from '@expo/vector-icons'
import { Link, router, Tabs } from 'expo-router'
import { useRef, useState } from 'react'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import colors from 'tailwindcss/colors'

export default function EditProfilePage() {
  const { session } = useSession()
  const { onbackgroundColor } = useTheme()
  const [form, setForm] = useState({
    email: session?.email,
    phone: ''
  })

  const emailRef = useRef<TextInput>(null)
  const phoneRef = useRef<TextInput>(null)

  const saveChanges = () => {
    console.log('saving', form)
  }

  const disableSave = session?.email === form.email && form.phone === ''

  return (
    <ScrollView
      contentContainerClassName="justify-center"
      className="flex-1 bg-white dark:bg-black p-4"
    >
      <Tabs.Screen
        options={{
          headerLeft(props) {
            return (
              <Link href="./" asChild replace>
                <TouchableOpacity>
                  <Feather
                    name="arrow-left"
                    size={24}
                    className="p-3"
                    color={props.tintColor}
                  />
                </TouchableOpacity>
              </Link>
            )
          }
        }}
      />
      <View>
        <Image
          source={require('@/assets/splash.png')}
          className="w-full h-36 mb-4"
        />
        <Text className="text-xl text-center dark:text-white font-semibold">
          {session?.username}
        </Text>
      </View>
      <View className="mt-8 flex-col gap-2">
        <View className="flex-row gap-4 items-center">
          <Feather name="mail" color={onbackgroundColor} size={20} />
          <TextInput
            ref={emailRef}
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
            onSubmitEditing={() => phoneRef.current?.focus()}
            blurOnSubmit={false}
            placeholder="Email"
            autoComplete="email"
            keyboardType="email-address"
            returnKeyType="next"
            placeholderClassName="text-gray-300 dark:text-gray-400"
            className="flex-1 border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
          />
        </View>
        <View className="flex-row gap-4 items-center">
          <Feather name="phone" color={onbackgroundColor} size={20} />
          <TextInput
            ref={phoneRef}
            value={form.phone}
            onChangeText={(phone) => setForm({ ...form, phone })}
            onSubmitEditing={saveChanges}
            placeholder="Phone number"
            keyboardType="phone-pad"
            returnKeyType="done"
            placeholderClassName="text-gray-300 dark:text-gray-400"
            className="flex-1 border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
          />
        </View>
      </View>

      <View className="flex flex-row gap-4 mt-8">
        <TouchableOpacity
          disabled={disableSave}
          onPress={saveChanges}
          style={{
            flex: 1,
            borderRadius: 6,
            marginBottom: 8,
            padding: 12,
            opacity: disableSave ? 0.5 : 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.red[500]
          }}
        >
          <Text className="text-red-100 font-semibold">Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace('./')}
          style={{
            flex: 1,
            borderRadius: 6,
            marginBottom: 8,
            padding: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: onbackgroundColor
          }}
        >
          <Text className="text-white dark:text-black font-semibold">
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <Text>Edit profile</Text>
    </ScrollView>
  )
}
