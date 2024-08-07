import { Stack, Tabs } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

export default function EditProfilePage() {
  return (
    <ScrollView
      contentContainerClassName="justify-center"
      className="flex-1 bg-white flex dark:bg-black p-4"
    >
      <Text>Edit profile</Text>
    </ScrollView>
  )
}
