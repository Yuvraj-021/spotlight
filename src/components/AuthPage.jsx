import React, { useState } from "react";
import eventlogo from "../assets/images/eventlogo.png";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate("/home"); // Navigate to the Events page
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-slate-600 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Logo and Website Name */}
        <div className="text-center mb-8">
          <img
            src={eventlogo}
            alt="Spotlight Logo"
            className="mx-auto w-14 h-14"
          />
          <h1 className="text-4xl font-bold text-gray-800 mt-2">Spotlight</h1>
        </div>

        {/* Toggle between Login and Signup */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? "Login to your account" : "Sign Up for Spotlight"}
        </h2>

        {/* Login / Signup Form */}
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {isLogin ? (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
              onClick={handleLoginClick}
            >
              Login
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </button>
          )}
        </form>

        {/* Toggle between Login and Signup */}
        <p className="text-gray-600 text-sm text-center mt-4">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            className="text-blue-500 font-semibold hover:underline"
            onClick={toggleAuthMode}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
