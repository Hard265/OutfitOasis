import { Slot } from "expo-router";
import "../global.css"
import SessionProvider from "@/providers/SessionProvider";

export default function RootLayout() {
    return (
        <SessionProvider>
            <Slot initialRouteName="/(app)/(tabs)/products/index" />
        </SessionProvider>
    )
}