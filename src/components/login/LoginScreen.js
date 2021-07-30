import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({history}) => {
    
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/');

        //leer la ultima pagina visitada 
        const path = JSON.parse(localStorage.getItem('lastPath')) || "/";
        dispatch({
            type : types.login,
            payload:{
                name:"Franco",
                id:"zFranco23",
            }
        })
        history.replace(path);//Reemplaza la historia
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
