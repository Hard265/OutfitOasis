import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function NotificationScreen() {
  const notifications = [
    { id: 1, title: 'Order Success', message: 'Your order #12345 has been placed successfully.', time: '2 hours ago' },
    { id: 2, title: 'Special Offer', message: 'Get 20% off on all shoes today!', time: 'Yesterday' },
    { id: 3, title: '30% Discount', message: 'Limited time offer: 30% off on all accessories!', time: '2 days ago' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView>
        <View className="p-4">
          <Text className="text-2xl font-bold mb-6">Notifications</Text>

          <View className="space-y-4">
            {notifications.map((notification) => (
              <TouchableOpacity key={notification.id} className="bg-gray-100 p-4 rounded-lg">
                <Text className="font-bold text-lg">{notification.title}</Text>
                <Text className="text-gray-600 mt-1">{notification.message}</Text>
                <Text className="text-gray-400 text-sm mt-2">{notification.time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}