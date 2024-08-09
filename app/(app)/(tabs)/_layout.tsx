import { Tabs } from 'expo-router'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@/hooks/useTheme'
import { Iconify } from 'react-native-iconify'

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
        name="products"
        options={{
          title: 'Home',
          headerShown: false, // Hide the header for the home screen
          tabBarIcon: (props) => (
            <Feather color={props.color} name="home" size={props.size} />
          )
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
        name="orders"
        options={{
          title: 'Orders',
          headerShown: false, // Hide the header for the orders screen
          tabBarIcon: (props) => (
            <Iconify
              color={props.color}
              icon="mynaui:shopping-bag"
              size={props.size + 4}
            />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false, // Hide the header for the profile screen
          title: 'Profile',
          tabBarIcon: (props) => (
            <Feather color={props.color} name="user" size={props.size} />
          )
        }}
      />
    </Tabs>
  )
}
