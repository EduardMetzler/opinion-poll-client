import HomePage from "../pages/Home/Home";

export const paths = {
  homePath: "/",
  anyPath: "/*",
};
const AllRoutes = () => {
  const routes = [
    {
      path: paths.homePath,
      element: <HomePage />,
      isProtected: false,
      redirectPath: "/",
      id: "HomePage",
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
