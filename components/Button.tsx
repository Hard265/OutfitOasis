import { Children, PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import colors from "tailwindcss/colors"

export function Button({ children, ...props }: PropsWithChildren<{ onPress?: () => void } & TouchableOpacityProps>) {
    return (
        <TouchableOpacity style={[styles.buttonContainer]} {...props}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 12,
        borderRadius: 6
    }
})