import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../components/routes";
import { useUserStore } from "../../stores/useUserStore";
import Cookies from "js-cookie";

const RegisterPage: React.FC<any> = () => {
  // const navigate = useNavigate();

  const [userRegister, setUserRegister] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const saveUser = useUserStore((state) => state.saveUser);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        userRegister
        // { withCredentials: true }
      );
      console.log(response);
      Cookies.set("token", response.data.token);
      saveUser(response.data.userWithoutPassword);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign Up
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                User Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) =>
                  setUserRegister({ ...userRegister, userName: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) =>
                  setUserRegister({ ...userRegister, email: e.target.value })
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
                  setUserRegister({ ...userRegister, password: e.target.value })
                }
              />
            </div>
            <Link
              to={paths.registrPage}
              className="text-xs text-purple-600 hover:underline"
            >
              Forget Password?
            </Link>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <Link
              to={paths.loginPath}
              className="font-medium text-purple-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
