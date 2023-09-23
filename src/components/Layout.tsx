import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToastStore } from "../stores/useToastStore";
import { useEffect } from "react";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const toastData = useToastStore((state) => state.toast);

  const notify = (data: string) => {
    toast(data);
  };

  useEffect(() => {
    console.log(toastData);
    if (toastData) {
      notify(toastData);
    }
  }, [toastData]);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen">
        <Navbar />
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
