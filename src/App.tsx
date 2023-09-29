import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useUserStore } from "../src/stores/useUserStore";
import Layout from "./components/Layout";
import AllRoutes from "./components/routes";
import Cookies from "js-cookie";

// import "./index.css";
import "../app/globals.css";

function App() {
  const [authenticationCompleted, setAuthenticationCompleted] = useState(false);
  const saveUser = useUserStore((state) => state.saveUser);
  const deleteUser = useUserStore((state) => state.deleteUser);
  console.log(import.meta.env.VITE_BASE_URL, "");

  useEffect(() => {
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/user/checkCookie`,
        // {
        //   withCredentials: true,
        // }
        { token: `${Cookies.get("token")}` }
        // { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
      )
      .then((response) => {
        console.log(response.data);
        saveUser(response.data);
        setAuthenticationCompleted(true);
      })
      .catch((err) => {
        console.log(err);
        setAuthenticationCompleted(true);
        deleteUser();
      });
  }, []);
  // setInterval(() => {
  //   console.log(user, authenticationCompleted);
  //   // setAuthenticationCompleted(true);
  // }, 1000);
  const routes = AllRoutes();
  // const authenticationCompleted = true;
  // console.log(user);
  return (
    <BrowserRouter>
      {authenticationCompleted && (
        <Layout>
          <div className="py-20 px-0">
            <Routes>
              {routes.map((route) => {
                return route.isProtected ? (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={
                      <Navigate to={route.redirectPath} replace={true} />
                    }
                  />
                ) : (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
            </Routes>
          </div>
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default App;
