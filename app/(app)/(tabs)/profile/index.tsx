import { useSession } from '@/hooks/useSession'
import { useTheme } from '@/hooks/useTheme'
import { Feather } from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import colors from 'tailwindcss/colors'

const links: {
  name: string
  icon: keyof typeof Feather.glyphMap
  href: string
}[] = [
  {
    name: 'Edit Profile',
    icon: 'edit-3',
    href: 'profile/edit'
  },
  {
    name: 'My Orders',
    icon: 'shopping-cart',
    href: '/(app)/tabs/orders'
  },
  {
    name: 'Notifications',
    icon: 'bell',
    href: '/(app)/notifications'
  },
  {
    name: 'Settings',
    icon: 'settings',
    href: '/(app)/settings'
  }
]

export default function ProfilePage() {
  const { logout, session } = useSession()

  return (
    <ScrollView
      contentContainerClassName="justify-center"
      className="flex-1 bg-white flex dark:bg-black p-4"
    >
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
        {links.map((link) => (
          <ListButton {...link} key={link.name} />
        ))}
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
function ListButton(link: (typeof links)[0]) {
  const { elevatedBackgroundColor, elevatedOnbackgroundColor } = useTheme()
  return (
    <Link key={link.name} href={link.href} asChild push>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 12,
          gap: 8,
          borderRadius: 6,
          backgroundColor: elevatedBackgroundColor
        }}
      >
        <Feather name={link.icon} color={elevatedOnbackgroundColor} size={20} />
        <Text className="flex-1 dark:text-white font-semibold">
          {link.name}
        </Text>
        <Feather
          name="chevron-right"
          color={elevatedOnbackgroundColor}
          size={20}
        />
      </TouchableOpacity>
    </Link>
  )
}
