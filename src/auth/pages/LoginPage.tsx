import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "..";

export const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath')  || '/'
        login("Cesar")
        navigate(lastPath,{
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button onClick={onLogin} className="btn btn-primary">
                Login
            </button>
        </div>
    )
}
