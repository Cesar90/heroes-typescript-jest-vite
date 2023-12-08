import { FC, useReducer, ReactNode  } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"
import { TYPES } from "../types/types";


export interface IInitialState{
    logged: boolean;
    user: {
        id: string
        name: string,
    } | null,
}

const UI_INITIAL_STATE: IInitialState = {
    logged: false,
    user: {
        id: "",
        name: "",
    }
}

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const init = () => {
    let user = localStorage.getItem('user');
    const luser = user ? JSON.parse(user) as IInitialState['user'] : null;
    
    return {
        logged: !!user,
        user: luser
    }

}

export const AppProvider:FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, UI_INITIAL_STATE, init);

    const login = (name = '') => {
        const user = {
            id: 'ABC',
            name: name
        }

        const action = {
            type: TYPES.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({
            type: TYPES.logout
        });
    }

    return (
        <AuthContext.Provider value={{...state, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}
