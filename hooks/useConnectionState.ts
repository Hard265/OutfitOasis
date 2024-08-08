import { NetworkContext } from "@/providers/NetworkProvider";

export function useConnectionState(){
  const context = useContext(NetworkContext);
  return context;
}
