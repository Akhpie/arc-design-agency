import { createGlobalStyle, keyframes } from "styled-components";
import theme from "./theme";

const glowKeyframes = keyframes`
  0% {
    text-shadow: 0 0 5px rgba(0, 153, 255, 0.3), 0 0 10px rgba(0, 153, 255, 0.2);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 153, 255, 0.5), 0 0 30px rgba(0, 153, 255, 0.3);
  }
  100% {
    text-shadow: 0 0 5px rgba(0, 153, 255, 0.3), 0 0 10px rgba(0, 153, 255, 0.2);
  }
`;

const scanlineKeyframes = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.body};
    line-height: 1.5;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
    position: relative;
    letter-spacing: -0.5px;
  }

  h1 {
    font-size: ${theme.fontSizes["4xl"]};
    
    &.glow {
      animation: ${glowKeyframes} 3s infinite;
    }
  }

  h2 {
    font-size: ${theme.fontSizes["3xl"]};
    
    &:after {
      display: none;
    }
    
    &:hover:after {
      width: 100px;
    }
  }

  h3 {
    font-size: ${theme.fontSizes["2xl"]};
  }

  h4 {
    font-size: ${theme.fontSizes.xl};
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  .highlight-text {
    display: inline;
    position: relative;
    
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 0;
      bottom: 2px;
      left: 0;
      background-color: rgba(0, 153, 255, 0.2);
      z-index: -1;
      transition: height 0.3s ease;
    }
    
    &:hover:after {
      height: 40%;
    }
  }

  a, button, [role="button"], input[type="submit"], input[type="button"], .clickable {
    cursor: none;
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.body};
    position: relative;
    overflow: hidden;
    
    &:after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.5s ease;
    }
    
    &:hover:after, &:focus:after {
      opacity: 1;
      transform: scale(1);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.lightBackground};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.full};
    
    &:hover {
      background: ${theme.colors.accent};
    }
  }

  ::selection {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
  }
  
  /* Advanced visual effects */
  .scanline {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, 
      rgba(0, 153, 255, 0) 0%,
      rgba(0, 153, 255, 0.03) 50%,
      rgba(0, 153, 255, 0) 100%);
    z-index: 9997;
    opacity: 0.5;
    pointer-events: none;
    animation: ${scanlineKeyframes} 8s linear infinite;
  }
  
  .text-glitch {
    position: relative;
    
    &:hover:before, &:hover:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    
    &:hover:before {
      left: 2px;
      color: rgba(255, 0, 85, 0.8);
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    }
    
    &:hover:after {
      left: -2px;
      color: rgba(0, 153, 255, 0.8);
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    }
  }
  
  .mono-text {
    font-family: 'Space Mono', monospace;
    letter-spacing: -0.5px;
  }
  
  /* Add neon light effect to grid */
  .grid-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 50px 50px;
    background-image: 
      linear-gradient(to right, rgba(0, 153, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 153, 255, 0.05) 1px, transparent 1px);
    z-index: -1;
    pointer-events: none;
  }
`;

export default GlobalStyles;
