import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useProvider from '../../Hooks/useProvider';

const Login = () => {
    const [ newUser, setNewUser ] = useState(false)
    const [ passwordError, setPasswordError ] = useState([])
    const { signInUsingGoogle, signInUsingEmail, registerUsingEmail } = useProvider();
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || "/"
    const handleGoogleLogin = () => {
        setPasswordError([])
        signInUsingGoogle()
            .then(tmp => {
                history.push(redirect)
            })
            .catch(error => {
                const errorMessage = error.message;
                setPasswordError([errorMessage])
            });
    };
    const handleRegisters = () => {
        setPasswordError([]);
        setNewUser(!newUser)
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const email = e.target.elements.email?.value;
        const password = e.target.elements.password?.value;

        const passwordErrors = [];
        setPasswordError([])
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
            setPasswordError(passwordErrors);
            return false;
        }

        newUser ? (
            registerUsingEmail(email, password)
                .then(tmp => {
                    history.push(redirect)
                })
                .catch(error => {
                    const errorMessage = error.message;
                    alert(errorMessage)
                })
        ) : (
            signInUsingEmail(email, password)
                .then(tmp => {
                    history.push(redirect)
                })
                .catch(error => {
                    const errorMessage = error.message;
                    alert(errorMessage)
                })
        );

    };
    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="px-8 py-6 mt-4 text-left bg-blue-100 w-2/3 shadow-lg">
                <h3 class="text-2xl font-bold text-center">Login to your account</h3>
                <form onSubmit={handleFormSubmit}>
                    <div class="mt-4">
                        <div>
                            <label class="block" for="email">Email</label>
                            <input type="email" placeholder="Email" id="email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div class="mt-4">
                            <label class="block">Password</label>
                            <input type="password" placeholder="Password" id="password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            {
                                passwordError.length > 0 && <span class="text-xs tracking-wide text-red-600">{passwordError.join("\n")}</span>
                            }
                        </div>
                        <div class="mt-4">
                            <input type="checkbox" onChange={handleRegisters} className="form-checkbox h-4 w-4 text-blue-600" name="newUser" id="" />
                            <label for="newUser" className="text-xl">   New User ?</label>
                        </div>
                        <div class="md:flex items-baseline justify-between">
                            {
                                newUser ?
                                    <button class="px-10 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"><i className="fas fa-user-plus pr-3"></i>Register</button> :
                                    <button class="px-10 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"><i className="fas fa-sign-in-alt pr-3"></i>Login</button>
                            }
                        </div>
                    </div>
                </form>
                <button onClick={handleGoogleLogin} class="px-2 md:px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-blue-900"><i className="fab fa-google pr-3"></i>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;