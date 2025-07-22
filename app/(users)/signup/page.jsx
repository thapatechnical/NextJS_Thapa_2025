"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegistrationForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [state, setState] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Simulate successful registration
    setState({
      success: true,
      message: "Registration successful! Welcome aboard.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[rgb(14,14,14)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Create Account
          </h1>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
            <div className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="Create a password"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Status Message */}
          {state && (
            <div
              className={`p-4 mt-5 text-center capitalize rounded-lg ${
                state.success
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
              }`}
            >
              {state.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
