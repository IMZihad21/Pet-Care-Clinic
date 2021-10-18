import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useProvider from '../../Hooks/useProvider';

const Login = () => {
    const { signInUsingGoogle} = useProvider();
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || "/"
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
            .then(tmp =>{
                history.push(redirect)
            })
    };
    return (
        <div>
            <button onClick={handleGoogleLogin}>Login</button>
        </div>
    );
};

export default Login;