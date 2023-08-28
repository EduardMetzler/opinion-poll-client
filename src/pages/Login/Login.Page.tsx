import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
// import routes, { paths } from "../routes";

// import { userStore } from "../store/userStore";

const LoginPage: React.FC<any> = () => {
  //   const { firstName, setFirstName, setlastName, setRole } = userStore();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        userLogin,
        { withCredentials: true }
      );
      console.log(response);
      // setUser(response.data.userWithoutPassword);
      // setMessage(response.data.message);
      // setIsLoggedIn(true);
      // if (response) {
      //   return navigate("/dashboard");
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) =>
                  setUserLogin({ ...userLogin, email: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) =>
                  setUserLogin({ ...userLogin, password: e.target.value })
                }
              />
            </div>
            <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
