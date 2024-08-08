import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function ProductsPage() {
    return (
        <View className="flex-1 justify-center items-center bg-white dark:bg-black">
            <StatusBar style="auto" />
            <Text>Products</Text>
            <Link href="./aproduct">go to product</Link>
        </View>
    )
}