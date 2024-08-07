import React from 'react';
import { View, Text, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView>
        <View className="p-4">
          <Text className="text-2xl font-bold mb-6">Settings</Text>

          <View className="space-y-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg">Notifications</Text>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
              />
            </View>

            <View className="flex-row justify-between items-center">
              <Text className="text-lg">Dark Mode</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
              />
            </View>

            <TouchableOpacity className="py-2">
              <Text className="text-lg text-blue-500">Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity className="py-2">
              <Text className="text-lg text-blue-500">Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity className="py-2">
              <Text className="text-lg text-blue-500">Terms of Service</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}