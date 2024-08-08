import { Tabs } from 'expo-router'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@/hooks/useTheme'

export default function TabsLayout() {
  const { backgroundColor, onbackgroundColor, isDark } = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: { backgroundColor },
        headerTintColor: onbackgroundColor,
        tabBarStyle: { backgroundColor },
        tabBarIconStyle: { color: onbackgroundColor },
        tabBarActiveTintColor: onbackgroundColor,
        headerShadowVisible: !isDark
      }}
    >
      <Tabs.Screen
        name="products/index"
        options={{
          title: 'Home',
          tabBarIcon: (props) => (
            <Feather color={props.color} name="home" size={props.size} />
          )
        }}
      />
      <Tabs.Screen
        name="products/[id]"
        options={{
          title: 'Product details',
          href: null
        }}
      />

      <Tabs.Screen
        name="search/index"
        options={{
          title: 'Search',
          tabBarIcon: (props) => (
            <Feather color={props.color} name="search" size={props.size} />
          )
        }}
      />

      <Tabs.Screen
        name="search/filter"
        options={{
          title: 'Filters',
          href: null
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: (props) => (
            <Feather
              color={props.color}
              name="shopping-cart"
              size={props.size}
            />
          )
        }}
      />

      <Tabs.Screen
        name="orders/index"
        options={{
          title: 'Orders',
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              color={props.color}
              name="ticket-outline"
              size={props.size}
            />
          )
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: (props) => (
            <Feather color={props.color} name="user" size={props.size} />
          )
        }}
      />
      <Tabs.Screen
        name="profile/edit"
        options={{
          title: 'Edit',
          href: null
        }}
      />
    </Tabs>
  )
}
