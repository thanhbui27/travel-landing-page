import React, { ReactNode } from "react";
import Header from "../Header";
import { LayoutContainer } from "./style";
import { ReactComponent as CircleRed } from "@/assets/icons/Ellipse 23.svg";
import Footer from "../Footer";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <LayoutContainer>
      <div className="circle-red">
        <CircleRed />
      </div>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
