import { createContext } from "react";

export interface ContextProps {
    logged: boolean;
    user: {
        id: string
        name: string,
    } | null,
    login: (name: string) => void,
    logout: () => void,
}


export const AuthContext = createContext({} as ContextProps);