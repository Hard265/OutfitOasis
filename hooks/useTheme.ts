import { useColorScheme } from "react-native";
import { black, gray, white } from "tailwindcss/colors";

export function useTheme() {
    const colorScheme = useColorScheme()
    const isDark = colorScheme === "dark"

    const backgroundColor = isDark ? black : white
    const onbackgroundColor = isDark ? white : black

    const elevatedBackgroundColor = isDark ? gray[900] : gray[200]
    const elevatedOnbackgroundColor = isDark ? gray[200] : gray[800]

    return {
        backgroundColor,
        onbackgroundColor,
        elevatedBackgroundColor,
        elevatedOnbackgroundColor,
        isDark
    }
}