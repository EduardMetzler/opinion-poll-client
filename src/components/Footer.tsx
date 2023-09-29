import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto py-10 bg-black text-white">
      {/* <div className="footer__wrapper"> */}
      <div className=" flex flex-col aligen-center gap-y-7">
        <ul className="flex justify-center gap-x-8">
          <li className="w-7">
            <NavLink to="https://github.com/EduardMetzler">
              <i className="fa-brands fa-github fa-2xl"></i>
            </NavLink>
          </li>
          <li className="w-7">
            <NavLink to="https://www.linkedin.com/in/eduard-metzler-092a84216/">
              <i className="fa-brands fa-linkedin-in fa-2xl"></i>
            </NavLink>
          </li>
        </ul>
        <div className="mt-1 flex justify-center">
          <p>© 2022 Eduard Metzler</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
