import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useUserStore } from "../src/stores/useUserStore";
import Layout from "./components/Layout";
import AllRoutes from "./components/routes";
import "./index.css";

function App() {
  const user = useUserStore((state) => state.user);
  // setInterval(() => {
  //   console.log(user);
  // });
  const routes = AllRoutes();
  const authenticationCompleted = true;
  console.log(user);
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
