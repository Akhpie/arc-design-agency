import { type ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import SocialLinks from "../components/SocialLinks";

import GlobalBackground from "../components/GlobalBackground";
import SideNav from "../components/SideNav";

interface MainLayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px;
`;

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <GlobalBackground />
      <Header />
      <Main>{children}</Main>
      <Footer />
      <SocialLinks />
      <SideNav />
    </>
  );
};

export default MainLayout;
