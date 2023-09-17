import Error404Page from "../pages/Error404Page/Error404Page.Page";
import HomePage from "../pages/Home/Home.Page";
import LoginPage from "../pages/Login/Login.Page";
import RegistrPage from "../pages/Register/Register.Page";
import DashboardPage from "../pages/Dashboard/FF.Page";
import CreateOpinionPollPage from "../pages/CreateOpinionPoll/CreateOpinionPoll.Page";
import MyOpinionPollPage from "../pages/MyOpinionPoll/MyOpinionPoll.Page";
import PinionPollPage from "../pages/PinionPoll/PinionPoll.Page";

import { useUserStore } from "../stores/useUserStore";

export const paths = {
  homePath: "/",
  loginPath: "/login",
  registrPage: "/register",
  dashboardPage: "/dashboard",
  createOpinionPoll: "/create-opinion-poll",
  myOpinionPollPath: "/my-opinion-poll/:_id",
  pinionPollPath: "/:_id",

  Error404Page: "/*",
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
      redirectPath: "/dashboard",
      id: "LoginPage",
    },
    {
      path: paths.registrPage,
      element: <RegistrPage />,
      isProtected: user.id ? true : false,
      redirectPath: "/dashboard",
      id: "RegistrPage",
    },
    {
      path: paths.dashboardPage,
      element: <DashboardPage />,
      isProtected: !user.id ? true : false,
      redirectPath: "/login",
      id: "DashboardPage",
    },
    {
      path: paths.createOpinionPoll,
      element: <CreateOpinionPollPage />,
      isProtected: !user.id ? true : false,
      redirectPath: "/login",
      id: "CreateOpinionPollPage",
    },
    {
      path: paths.myOpinionPollPath,
      element: <MyOpinionPollPage />,
      isProtected: !user.id ? true : false,
      redirectPath: "/login",
      id: "MyOpinionPollPage",
    },
    {
      path: paths.pinionPollPath,
      element: <PinionPollPage />,
      isProtected: false,
      redirectPath: "/",
      id: "PinionPollPage",
    },
    {
      path: paths.Error404Page,
      element: <Error404Page />,
      isProtected: false,
      redirectPath: "/",
      id: "404Page",
    },
  ];

  return routes;
};

export default AllRoutes;
