import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to register
    console.log('Register API call');
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold">Register</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-4">
          <label className="block w-full md:w-1/2 lg:w-1/3 p-4">
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Enter your name"
            />
          </label>
          <label className="block w-full md:w-1/2 lg:w-1/3 p-4">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-full md:w-1/2 lg:w-1/3 p-4">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Enter your password"
            />
          </label>
          <label className="block w-full md:w-1/2 lg:w-1/3 p-4">
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Confirm your password"
            />
          </label>
        </div>
        {error && (
          <div className ="text-red-500 text-sm mb-4">{error.message}</div>
        )}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
      <p className="text-lg text-gray-600 text-center">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Register;