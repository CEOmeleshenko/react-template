import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API to login
        console.log('Login API call');
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
            <form className="space-y-6">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        <i className="fas fa-envelope mr-2"></i>Email
                    </label>
                    <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Email" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        <i className="fas fa-lock mr-2"></i>Password
                    </label>
                    <div className="relative">
                        <input type="password" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Password" />
                    </div>
                </div>
                <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold">Log in</button>
                <div className="flex items-center">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
                </div>
            </form>
            <div className="my-6 flex items-center">
                <hr className="flex-grow border-gray-300" />
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
                <Link to={'/regiser'} className="mr-4">Don't have an account?</Link>
            </div>
        </div>
    );
}

export default Login;