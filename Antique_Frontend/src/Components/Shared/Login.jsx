import React, { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { Icon } from "@iconify/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const googleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("Google sign-in result:", result.user);
      
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7e1b5] px-4">
      <div className="w-full max-w-md bg-[#fff8f0] border-4 border-[#53310e] rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-[#53310e] text-center mb-6">
          Login
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-[#53310e] mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-[#53310e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#53310e]"
          />
        </div>

        {/* Password Input */}
        <div className="mb-2 relative">
          <label className="block text-[#53310e] mb-2">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-[#53310e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#53310e]"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-[#53310e]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {/* Remember Me */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            className="mr-2 accent-[#53310e]"
          />
          <label htmlFor="remember" className="text-[#53310e]">
            Remember me
          </label>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#53310e] text-[#f7e1b5] py-2 rounded-md font-bold hover:bg-[#40230b] transition-colors mb-4">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-[#53310e]" />
          <span className="px-2 text-[#53310e]">or</span>
          <hr className="flex-grow border-[#53310e]" />
        </div>

        {/* Google Sign-In */}
        <button onClick={googleSignIn} className="w-full flex items-center justify-center border-2 border-[#53310e] py-2 rounded-md hover:bg-[#ffe5c2] transition-colors cursor-pointer">
          <Icon icon="flat-color-icons:google" className="mr-2 text-xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
