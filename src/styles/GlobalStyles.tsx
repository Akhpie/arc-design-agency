import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    --background: ${theme.colors.background};
    --text: ${theme.colors.text};
    --primary: ${theme.colors.primary};
    --secondary: ${theme.colors.secondary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    
    @media (max-width: ${theme.breakpoints.xl}) {
      font-size: 15px;
    }
    
    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: 14px;
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 13px;
    }
  }

  body {
    font-family: ${theme.fonts.secondary};
    background-color: var(--background);
    color: var(--text);
    line-height: 1.5;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 700;
    line-height: 1.2;
  }

  /* Noise background */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url("data:image/png;base64,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");
    opacity: 0.5;
    z-index: -1;
  }

  /* Selection */
  ::selection {
    background-color: var(--primary);
    color: var(--text);
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    background-color: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: ${theme.borderRadius.full};
  }

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
    transition: all ${theme.transitions.default};
  }

  /* Focus styles */
  :focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  /* Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  }

  /* Grid */
  .grid {
    display: grid;
    gap: ${theme.spacing.md};
  }

  /* Responsive utilities */
  .hide-on-mobile {
    @media (max-width: ${theme.breakpoints.md}) {
      display: none !important;
    }
  }

  .show-on-mobile {
    @media (min-width: ${theme.breakpoints.md}) {
      display: none !important;
    }
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  /* Spacing utilities */
  .mt-1 { margin-top: ${theme.spacing.xs}; }
  .mt-2 { margin-top: ${theme.spacing.sm}; }
  .mt-3 { margin-top: ${theme.spacing.md}; }
  .mt-4 { margin-top: ${theme.spacing.lg}; }
  .mt-5 { margin-top: ${theme.spacing.xl}; }

  .mb-1 { margin-bottom: ${theme.spacing.xs}; }
  .mb-2 { margin-bottom: ${theme.spacing.sm}; }
  .mb-3 { margin-bottom: ${theme.spacing.md}; }
  .mb-4 { margin-bottom: ${theme.spacing.lg}; }
  .mb-5 { margin-bottom: ${theme.spacing.xl}; }

  /* Flex utilities */
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }
`;

export default GlobalStyles;
