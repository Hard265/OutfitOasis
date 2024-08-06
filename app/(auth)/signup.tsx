import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function SignupPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handleLogin = () => {

    }

    return (
        <View className="flex-1 bg-white dark:bg-black p-4 justify-center">

            <Text className="text-lg font-semibold mt-2 dark:text-white">Username</Text>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                autoComplete='username-new'
                returnKeyType='next'
                placeholderClassName='text-gray-300 dark:text-gray-400'
                className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
            />

            <Text className="text-lg font-semibold mt-2 dark:text-white">Email address</Text>
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
            <View className='flex-row justify-between flex gap-x-4'>
                <View className='flex-1'>
                    <Text className="text-lg font-semibold mt-2 dark:text-white">Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry
                        autoComplete='current-password'
                        placeholderClassName='text-gray-300 dark:text-gray-400'
                        className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
                    />
                </View>
                <View className='flex-1'>
                    <Text className="text-lg font-semibold mt-2 dark:text-white">Re-Password</Text>
                    <TextInput
                        value={password2}
                        onChangeText={setPassword2}
                        placeholder="Password"
                        secureTextEntry
                        autoComplete='current-password'
                        placeholderClassName='text-gray-300 dark:text-gray-400'
                        className="border border-gray-300 dark:text-white dark:border-gray-700 focus:border-2 dark:focus:border-gray-300 p-2 px-3 rounded-md mb-2"
                    />
                </View>
            </View>

            <Text>By clicking signup you agree to the <Link href="">Terms and Conditions</Link></Text>

            <TouchableOpacity onPress={handleLogin} className="bg-pink-500 p-3 rounded-md mb-2">
                <Text className="text-white text-center">Sign Up</Text>
            </TouchableOpacity>

            <Link href="/signup" asChild>
                <TouchableOpacity>
                    <Text className="text-center text-pink-500">Already have an account? Login</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}