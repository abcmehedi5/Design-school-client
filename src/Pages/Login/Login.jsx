import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <div className="flex  justify-between">
          <div>
            <Link className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Link to="/register" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </div>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;