import { Outlet } from "react-router-dom";
import Header from "./Header";
import { HeaderProps } from "../assets/types";

const Layout = ({ toggleTheme, isDark }: HeaderProps) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <Outlet />
    </>
  );
};

export default Layout;
