import HomePage from "../pages/Home/Home.Page";
import LoginPage from "../pages/Login/Login.Page";
import RegistrPage from "../pages/Register/Register.Page";
import { useUserStore } from "../stores/useUserStore";

export const paths = {
  homePath: "/",
  loginPath: "/login",
  registrPage: "/register",
  anyPath: "/*",
};
const AllRoutes = () => {
  //   const { isLoggedIn } = useStore();
  // console.log(isLoggedIn)
  const user = useUserStore((state) => state.user);
  // console.log(user);

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
      isProtected: user.id ? true : false,
      redirectPath: "/",
      id: "LoginPage",
    },
    {
      path: paths.registrPage,
      element: <RegistrPage />,
      isProtected: user.id ? true : false,
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
