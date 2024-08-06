import { LogoutButton } from "@/components/LogoutButton";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ProfilePage() {
    return (
        <View className="flex-1 justify-center items-center bg-white dark:bg-black">
            <Text>Profile</Text>
            <Link href="./edit">edit</Link>
            <LogoutButton />
        </View>
    )
}