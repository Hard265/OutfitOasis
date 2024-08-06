import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {

    }

    return (
        <View className="flex-1 bg-white dark:bg-black p-4 justify-center">
            <Text className="text-2xl font-bold mb-4 dark:text-white">Log In</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                autoComplete='email'
                keyboardType='email-address'
                returnKeyType='next'
                placeholderClassName='text-gray-300 dark:text-gray-400'
                className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
                autoComplete='current-password'
                placeholderClassName='text-gray-300 dark:text-gray-400'
                className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
            />

            <TouchableOpacity onPress={handleLogin} className="bg-pink-500 p-3 rounded-md mb-2">
                <Text className="text-white text-center">Log In</Text>
            </TouchableOpacity>

            <Link href="/signup" asChild>
                <TouchableOpacity>
                    <Text className="text-center text-pink-500">Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}