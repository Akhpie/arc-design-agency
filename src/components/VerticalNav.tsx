import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? "#fff" : "rgba(255, 255, 255, 0.6)")};
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #fff;
  }

  &::before {
    content: "";
    width: ${(props) => (props.$active ? "2rem" : "1rem")};
    height: 1px;
    background: ${(props) =>
      props.$active ? "#fff" : "rgba(255, 255, 255, 0.6)"};
    transition: all 0.3s ease;
  }

  &:hover::before {
    width: 2rem;
    background: #fff;
  }
`;

const CubeButton = styled.div`
  margin-top: 2rem;
  width: 140px;
  height: 45px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
`;

const CubeFaces = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${CubeButton}:hover & {
    transform: rotateX(-90deg);
  }
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  letter-spacing: 1px;
  backface-visibility: hidden;
  border-radius: 2rem;
`;

const FrontFace = styled(Face)`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  transform: translateZ(22.5px);
  display: flex;
  gap: 0.5rem;
`;

const BottomFace = styled(Face)`
  background: rgba(97, 255, 189, 0.9);
  color: #000;
  transform: rotateX(90deg) translateZ(22.5px);
`;

const VerticalNav = () => {
  const [activeSection, setActiveSection] = useState("top");

  return (
    <NavContainer>
      <NavItem to="/" $active={activeSection === "top"}>
        Top
      </NavItem>
      <NavItem to="/about" $active={activeSection === "about"}>
        About Us
      </NavItem>
      <NavItem to="/solutions" $active={activeSection === "solutions"}>
        Solutions
      </NavItem>
      <NavItem to="/simulator" $active={activeSection === "simulator"}>
        Simulator
      </NavItem>
      <NavItem to="/member" $active={activeSection === "member"}>
        Member
      </NavItem>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <CubeButton>
          <CubeFaces>
            <FrontFace>
              Contact
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "1rem",
                  height: "1rem",
                  transform: "rotate(-45deg)",
                }}
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </FrontFace>
            <BottomFace>Let's Talk!</BottomFace>
          </CubeFaces>
        </CubeButton>
      </Link>
    </NavContainer>
  );
};

export default VerticalNav;
