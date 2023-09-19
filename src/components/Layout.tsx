import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
