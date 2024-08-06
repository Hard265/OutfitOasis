import { router } from "expo-router";
import { createContext, PropsWithChildren } from "react";

export const SessionContext = createContext<{
    logout: () => void
}>({
    logout() { },
})

export default function SessionProvider(props: PropsWithChildren) {

    const logout = () => {
        router.replace("/login")
    }

    return (
        <SessionContext.Provider value={{
            logout
        }}>
            {props.children}
        </SessionContext.Provider>
    )
}