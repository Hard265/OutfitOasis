import { useColorScheme } from "react-native";
import { black, white } from "tailwindcss/colors";

export function useTheme() {
    const colorScheme = useColorScheme()
    const isDark = colorScheme === "dark"

    const backgroundColor = isDark ? black : white
    const onbackgroundColor = isDark ? white : black

    return {
        backgroundColor,
        onbackgroundColor,
        isDark
    }
}