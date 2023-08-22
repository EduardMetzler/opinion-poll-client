import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./index.css";
import AllRoutes from "./components/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  const routes = AllRoutes();
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return route.isProtected ? (
            <Route
              key={route.id}
              path={route.path}
              element={<Navigate to={route.redirectPath} replace={true} />}
            />
          ) : (
            <Route key={route.id} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
