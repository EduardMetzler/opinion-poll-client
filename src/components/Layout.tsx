import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
