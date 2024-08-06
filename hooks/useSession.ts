import { SessionContext } from "@/providers/SessionProvider"
import { useContext } from "react"

export function useSession() {
    const ctx = useContext(SessionContext)

    return ctx
}