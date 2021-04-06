import { createContext } from "react";

export const SenderContext = createContext<{ state?: any, send: (val: any) => void }>({
    send: () => { }
})