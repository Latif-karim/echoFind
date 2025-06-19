import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full border-b border-gray-300 bg-transparent py-2 px-2 placeholder-gray-400 text-sm focus:outline-none focus:border-[#4318d1]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-gray-300 bg-transparent py-2 px-2 placeholder-gray-400 text-sm focus:outline-none focus:border-[#4318d1]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border-b border-gray-300 bg-transparent py-2 px-2 placeholder-gray-400 text-sm focus:outline-none focus:border-[#4318d1]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#4318d1] text-white text-sm font-semibold rounded-xl hover:bg-[#3513a6] transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center py-4">
          <span className="text-sm text-gray-500">or</span>
        </div>

        <button className="flex items-center justify-center w-full gap-3 border border-gray-300 py-3 rounded-xl text-sm hover:border-[#4318d1] hover:text-[#4318d1] transition">
          <FcGoogle className="h-5 w-5" />
          Sign up with Google
        </button>

        <p className="text-center text-xs text-gray-500 pt-4">
          Already have an account?{" "}
          <a href="#" className="text-[#4318d1] font-medium">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
