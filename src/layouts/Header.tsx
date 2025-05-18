import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../styles/SharedStyles.tsx";
import theme from "../styles/theme";

const beam = keyframes`
  0% {
    left: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    left: 0;
    width: 100%;
    opacity: 1;
  }
  40% {
    left: 100%;
    width: 0;
    opacity: 1;
  }
  40.1% {
    left: 100%;
    width: 0;
    opacity: 0;
  }
  40.2% {
    left: 0;
    width: 0;
    opacity: 0;
  }
  60% {
    left: 0;
    width: 100%;
    opacity: 1;
  }
  80% {
    left: 100%;
    width: 0;
    opacity: 1;
  }
  80.1% {
    opacity: 0;
  }
  100% {
    left: 0;
    width: 0;
    opacity: 0;
  }
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 2rem 0;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  /* Base line */
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    right: 10px;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%);
    z-index: 0;

    @media (max-width: ${theme.breakpoints.md}) {
      display: none;
    }
  }

  /* Animated beam */
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(97, 255, 189, 0.8),
      transparent
    );
    transform: translateY(-50%);
    z-index: 1;
    animation: ${beam} 4s linear infinite;

    @media (max-width: ${theme.breakpoints.md}) {
      display: none;
    }
  }

  /* Left dot */
  .dot-left {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    width: 4px;
    height: 4px;
    background: rgba(97, 255, 189, 0.8);
    border-radius: 50%;
    transform: translateY(-50%);
    z-index: 2;
    box-shadow: 0 0 5px rgba(97, 255, 189, 0.5);

    @media (max-width: ${theme.breakpoints.md}) {
      display: none;
    }
  }

  /* Right dot */
  .dot-right {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    width: 4px;
    height: 4px;
    background: rgba(97, 255, 189, 0.8);
    border-radius: 50%;
    transform: translateY(-50%);
    z-index: 2;
    box-shadow: 0 0 5px rgba(97, 255, 189, 0.5);

    @media (max-width: ${theme.breakpoints.md}) {
      display: none;
    }
  }
`;

const Logo = styled(Link)`
  font-family: ${theme.fonts.primary};
  font-size: 2.5rem;
  font-weight: 600;
  color: transparent;
  -webkit-text-stroke: 1px #6e44ff;
  text-decoration: none;
  letter-spacing: 2px;
  z-index: 2;
  position: relative;
  background: transparent;
  padding: 0 10px;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(110, 68, 255, 0.5),
    0 0 20px rgba(110, 68, 255, 0.3);

  &:hover {
    -webkit-text-stroke: 1.5px #8a6fff;
    text-shadow: 0 0 15px rgba(110, 68, 255, 0.8),
      0 0 30px rgba(110, 68, 255, 0.5);
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${theme.colors.text};
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  background: transparent;
  padding: 0 10px;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${theme.colors.background};
  z-index: 1000;
  display: flex;
  align-items: center;
  padding-left: 10%;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: ${theme.colors.text};
  font-size: 3rem;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  &:hover {
    color: ${theme.colors.primary};
    transform: rotate(90deg);
  }
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  position: relative;
  z-index: 1001;
`;

const MenuItem = styled(motion.div)`
  a {
    font-family: ${theme.fonts.primary};
    font-size: clamp(4rem, 10vw, 7rem);
    color: ${theme.colors.text};
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 400;
    letter-spacing: -2px;
    line-height: 1;
    display: inline-block;

    &:after {
      display: none !important;
    }

    &:hover {
      color: #fff;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
        0 0 15px rgba(255, 255, 255, 0.3);
      text-decoration: none;
      &:after {
        display: none !important;
      }
    }
  }
`;

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/case-studies", label: "Case Studies" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Update cursor z-index when menu opens/closes
    const cursor = document.querySelector("#cursor-wrapper") as HTMLElement;
    if (cursor) {
      cursor.style.zIndex = isMenuOpen ? "1002" : "9999";
    }

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo to="/">ARC</Logo>
          <div className="dot-left" />
          <div className="dot-right" />
          <MenuButton onClick={() => setIsMenuOpen(true)}>MENU</MenuButton>
        </HeaderContainer>
      </HeaderWrapper>

      <AnimatePresence>
        {isMenuOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={handleClose}>×</CloseButton>
            <MenuList>
              {menuItems.map((item, index) => (
                <MenuItem
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={item.path} onClick={handleClose}>
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
