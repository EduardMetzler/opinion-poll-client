import HomePage from "../pages/Home/Home.Page";
import LoginPage from "../pages/Login/Login.Page";

export const paths = {
  homePath: "/",
  loginPath: "/login",
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
