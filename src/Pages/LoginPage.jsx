import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../Context/Auth';

const Login = () => {
    const { login,user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(email, password)
        const users = JSON.parse(localStorage.getItem('loginuser'))
        if(users){
            navigate('/home')
        }

    }

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-2xl font-extrabold text-amber-100">
                    login in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-amber-100">
                    
                    <Link to="/register" className="font-medium text-amber-400 hover:text-amber-300">
                        create a new account
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-gray-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-amber-100">
                                Email address
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-400 focus:border-amber-400 bg-gray-700 text-white sm:text-sm"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span className="bi bi-envelope text-gray-400"></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-amber-100">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-400 focus:border-amber-400 bg-gray-700 text-white sm:text-sm"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span className="bi bi-lock text-gray-400"></span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-gray-700 rounded bg-gray-700"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-100">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="register"className="font-medium text-amber-400 hover:text-amber-300">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 `}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-800 text-amber-100">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-amber-100 hover:bg-gray-600"
                                >
                                    <span className="bi bi-google text-amber-300"></span>
                                    <span className="ml-2">Google</span>
                                </button>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-amber-100 hover:bg-gray-600"
                                >
                                    <span className="bi bi-facebook text-amber-300"></span>
                                    <span className="ml-2">Facebook</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;