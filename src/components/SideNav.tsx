import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import theme from "../styles/theme";
import { useActiveSection, type Section } from "../hooks/useActiveSection";

const drawLine = keyframes`
  0% {
    transform: scaleY(0);
    transform-origin: top center;
  }
  100% {
    transform: scaleY(1);
    transform-origin: top center;
  }
`;

const pulseBeam = keyframes`
  0% {
    opacity: 0.1;
    filter: blur(4px);
  }
  50% {
    opacity: 0.3;
    filter: blur(8px);
  }
  100% {
    opacity: 0.1;
    filter: blur(4px);
  }
`;

const moveLight = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 200%;
  }
`;

const NavContainer = styled.nav`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: -4px;
  cursor: pointer;
`;

const Circle = styled.div<{ isActive?: boolean }>`
  width: 16px;
  height: 16px;
  border: 1.5px solid white;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;

  ${(props) =>
    props.isActive &&
    `
    border-color: #0099FF;
    &:after {
      background: #0099FF;
    }
  `}

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
`;

const TopText = styled.span<{ isActive?: boolean }>`
  color: ${(props) => (props.isActive ? "#0099FF" : "white")};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color 0.3s ease;
`;

const NavigationSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Line = styled.div`
  width: 2px;
  height: 180px;
  background: rgba(255, 255, 255, 0.8);
  margin-left: 7px;
  animation: ${drawLine} 1s ease-out forwards;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 153, 255, 0.6),
      rgba(255, 255, 255, 0)
    );
    background-size: 100% 200%;
    filter: blur(4px);
    pointer-events: none;
    animation: ${moveLight} 3s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 153, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
    background-size: 100% 200%;
    filter: blur(8px);
    pointer-events: none;
    animation: ${moveLight} 3s ease-in-out infinite;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-top: 20px;
`;

const NavLink = styled.a<{ isActive?: boolean }>`
  color: ${(props) =>
    props.isActive ? "#0099FF" : "rgba(255, 255, 255, 0.5)"};
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  transition: color 0.2s ease;
  line-height: 1;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.isActive ? "#0099FF" : "rgba(255, 255, 255, 1)"};
  }
`;

const CubeButton = styled(Link)`
  margin-left: 24px;
  margin-top: 20px;
  width: 160px;
  height: 45px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
  text-decoration: none;
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
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  backface-visibility: hidden;
  border-radius: 4px;
`;

const FrontFace = styled(Face)`
  background: white;
  color: black;
  transform: translateZ(22.5px);
  display: flex;
  gap: 8px;
`;

const BottomFace = styled(Face)`
  background: rgba(97, 255, 189, 0.9);
  color: #000;
  transform: rotateX(90deg) translateZ(22.5px);
`;

const sections: Section[] = [
  { id: "top", label: "TOP" },
  { id: "about", label: "ABOUT US" },
  { id: "services", label: "WHAT WE DO" },
  { id: "case-studies", label: "CASE STUDIES" },
  { id: "blog", label: "BLOG" },
  { id: "team", label: "TEAM" },
];

const SideNav = () => {
  const activeSection = useActiveSection(sections);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    window.scrollTo({
      top: sectionId === "top" ? 0 : element.offsetTop - 80, // Adjust for header height
      behavior: "smooth",
    });
  };

  // Ensure sections have IDs on mount
  useEffect(() => {
    // Add an ID to the top of the page if it doesn't exist
    if (!document.getElementById("top")) {
      const topElement = document.createElement("div");
      topElement.id = "top";
      topElement.style.position = "absolute";
      topElement.style.top = "0";
      topElement.style.height = "1px";
      document.body.prepend(topElement);
    }
  }, []);

  return (
    <NavContainer>
      <TopSection onClick={() => scrollToSection("top")}>
        <Circle isActive={activeSection === "top"} />
        <TopText isActive={activeSection === "top"}>TOP</TopText>
      </TopSection>
      <NavigationSection>
        <Line />
        <NavLinks>
          {sections.slice(1).map((section) => (
            <NavLink
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              isActive={activeSection === section.id}
            >
              {section.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavigationSection>
      <CubeButton to="/contact">
        <CubeFaces>
          <FrontFace>
            CONTACT
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
    </NavContainer>
  );
};

export default SideNav;
