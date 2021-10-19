import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useProvider from '../../Hooks/useProvider';

const Login = () => {
    const [ newUser, setNewUser ] = useState(false)
    const { signInUsingGoogle, signInUsingEmail, registerUsingEmail } = useProvider();
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || "/"
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(tmp => {
                history.push(redirect)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode + ' ' + errorMessage)
            });
    };
    const handleRegisters = () => {
        setNewUser(!newUser)
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const email = e.target.elements.email?.value;
        const password = e.target.elements.password?.value;

        const passwordErrors = [];
        if (password.length < 8) {
            passwordErrors.push("Your password must be at least 8 characters");
        }
        if (password.search(/[a-z]/i) < 0) {
            passwordErrors.push("Your password must contain at least one letter.");
        }
        if (password.search(/[0-9]/) < 0) {
            passwordErrors.push("Your password must contain at least one digit.");
        }
        if (passwordErrors.length > 0) {
            alert(passwordErrors.join("\n"));
            return false;
        }

        newUser ? (
            registerUsingEmail(email, password)
                .then(tmp => {
                    history.push(redirect)
                })
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode + ' ' + errorMessage)
                })
        ) : (
            signInUsingEmail(email, password)
                .then(tmp => {
                    history.push(redirect)
                })
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode + ' ' + errorMessage)
                })
        );

    };
    return (
        <div>
            <div>
                <h1>Log in to your account 🔐</h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='Your Email' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder='Your Password' />
                    </div>
                    <div>
                        <input type="checkbox" id="register" defaultChecked={newUser} onChange={handleRegisters} />
                        <label htmlFor="checkbox">New User?</label>
                    </div>
                    <div>
                        {
                            newUser ?
                                <button>Register</button> :
                                <button>Login</button>
                        }
                    </div>
                </form>
            </div>
            <div>
                <button onClick={handleGoogleLogin}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;