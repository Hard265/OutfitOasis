import { LogoutButton } from '@/components/LogoutButton'
import { useSession } from '@/hooks/useSession'
import { Feather } from '@expo/vector-icons'
import { Link, router, Tabs } from 'expo-router'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function ProfilePage() {
  const { logout, session } = useSession()

  return (
    <ScrollView
      contentContainerClassName="justify-center"
      className="flex-1 bg-white flex dark:bg-black p-4"
    >
      <Tabs.Screen
        options={{
          headerRight(props) {
            return (
              <View className="flex-row gap-2 px-4">
                <TouchableOpacity
                  onPress={() => router.push('/(app)/(tabs)/profile/edit')}
                >
                  <Feather name="edit-3" color={props.tintColor} size={20} />
                </TouchableOpacity>
              </View>
            )
          }
        }}
      />
      <View>
        <Image
          source={require('@/assets/splash.png')}
          className="w-full h-36 mb-4"
        />
      </View>
      <TouchableOpacity
        onPress={logout}
        style={{
          marginTop: 32,
          padding: 12,
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.red[500]
        }}
      >
        <Text className="text-red-100 font-semibold">Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
