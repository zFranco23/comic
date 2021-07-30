import React from 'react'

const LoginScreen = ({history}) => {

    const handleLogin = () => {
        // history.push('/');
        history.replace('/');//Reemplaza la historia
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
