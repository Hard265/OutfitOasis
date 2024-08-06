import { useSession } from "@/hooks/useSession";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";

export function LogoutButton() {
    const { logout } = useSession()

    return (
        <TouchableOpacity onPress={logout} style={styles.container}>
            <Text className="dark:text-white">Logout</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.red[500],
        padding: 12,
        borderRadius: 6
    }
})