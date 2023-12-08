import { FC, useContext } from "react"
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

type IProps = {
    children: JSX.Element
}

export const PublicRoute: FC<IProps> = ({children}) => {
    const {logged} = useContext(AuthContext);
    return (
        !logged ? children : <Navigate to="/marvel" />
    )
}
