import { createContext } from "react";

export const BehavContext = createContext<{
    behav: Set<string>,
    add: (value: string) => void,
    remove: (value: string) => void,
    count: number,
    setCount: (value: number) => void
}>({
    behav: new Set<string>(),
    add: () => { },
    remove: () => { },
    setCount: () => { },
    count: 0
})