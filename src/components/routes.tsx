import HomePage from "../pages/Home/Home.Page";
import LoginPage from "../pages/Login/Login.Page";
import RegistrPage from "../pages/Register/Register.Page";

export const paths = {
  homePath: "/",
  loginPath: "/login",
  registrPage: "/register",
  anyPath: "/*",
};
const AllRoutes = () => {
  //   const { isLoggedIn } = useStore();
  // console.log(isLoggedIn)
  const routes = [
    {
      path: paths.homePath,
      element: <HomePage />,
      isProtected: false,
      redirectPath: "/",
      id: "HomePage",
    },
    {
      path: paths.loginPath,
      element: <LoginPage />,
      isProtected: false,
      redirectPath: "/",
      id: "LoginPage",
    },
    {
      path: paths.registrPage,
      element: <RegistrPage />,
      isProtected: false,
      redirectPath: "/",
      id: "RegistrPage",
    },
    {
      path: paths.anyPath,
      //   element: <404 />,
      isProtected: false,
      redirectPath: "/",
      id: "404Page",
    },
  ];

  return routes;
};

export default AllRoutes;
