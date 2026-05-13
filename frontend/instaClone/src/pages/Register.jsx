import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Api"; // Axios instance or API utility for backend calls

// Register Component
const Register = () => {
  const navigate = useNavigate();

  // State to store form input values
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Function to handle form submission
  const submit = async () => {
    try {
      // Sending POST request to backend for user registration
      await API.post("/auth/register", form);

      // Success message
      alert("User registered successfully");
      navigate("/login");

    } catch (error) {
      // Logging error for debugging
      console.error(error.message);

      // Failure message
      alert("Registration failed");
    }
  };

  return (
    // Full screen container with center alignment
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
      {/* Card container */}
      <div className="w-full max-w-sm bg-white border rounded-lg p-6">
        
        {/* App Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          InstaClone
        </h2>

        {/* Form Inputs */}
        <div className="space-y-4">
          
          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={form.username}
            onChange={(e) =>
              // Updating username in state
              setForm({ ...form, username: e.target.value })
            }
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={form.email}
            onChange={(e) =>
              // Updating email in state
              setForm({ ...form, email: e.target.value })
            }
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={form.password}
            onChange={(e) =>
              // Updating password in state
              setForm({ ...form, password: e.target.value })
            }
          />

          {/* Submit Button */}
          <button
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
            onClick={submit} // Calls submit function on click
          >
            Register
          </button>
        </div>

        {/* Redirect to Login Page */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;