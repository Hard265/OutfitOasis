import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function VerificationPage() {
    const [code, setCode] = useState("")

    return (
        <View className="flex-1 bg-white dark:bg-black p-4 justify-center">
            <Text>We will send you a pin to continue your account</Text>
            <TextInput value={code} onChangeText={setCode} keyboardType="number-pad" />
            <TouchableOpacity>
                <Text>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Don't receive code? Resend the code</Text>
            </TouchableOpacity>
        </View>
    )
}