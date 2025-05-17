const theme = {
  colors: {
    primary: "#6E44FF", // Main purple - for primary actions and highlights
    secondary: "#00F0FF", // Cyan - for accents and secondary elements
    background: "#111111", // Dark background
    lightBackground: "#1A1A1A", // Lighter background for cards
    text: "#FFFFFF", // White text
    textSecondary: "rgba(255, 255, 255, 0.7)",
    overlay: "rgba(0, 0, 0, 0.7)",
    accent: "#FF2D55",
    neonPurple: "#9D00FF",
    gradients: {
      primary: "linear-gradient(135deg, #6E44FF 0%, #00F0FF 100%)",
      accent: "linear-gradient(135deg, #FF2D55 0%, #FF9500 100%)",
      futuristic: "linear-gradient(135deg, #00F0FF 0%, #6E44FF 100%)",
      cyber: "linear-gradient(135deg, #FF2D55 0%, #6E44FF 100%)",
    },
  },
  fonts: {
    primary: "'Space Grotesk', sans-serif", // Modern, tech-focused font for headings
    secondary: "'Inter', sans-serif", // Clean, readable font for body text
    mono: "'Fira Code', monospace",
    body: "'Inter', sans-serif", // Default body font
    heading: "'Space Grotesk', sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
    "5xl": "8rem",
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  transitions: {
    default: "all 0.3s ease",
    fast: "all 0.15s ease",
    slow: "all 0.5s ease",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 2px 4px rgba(0,0,0,0.1)",
    md: "0 4px 8px rgba(0,0,0,0.12)",
    lg: "0 8px 16px rgba(0,0,0,0.14)",
    neon: "0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)",
    neonIntense:
      "0 0 20px rgba(0, 240, 255, 0.7), 0 0 40px rgba(0, 240, 255, 0.4)",
  },
  effects: {
    glassMorphism: {
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      backdrop: "blur(10px)",
    },
    neonBorder: {
      border: "1px solid rgba(0, 240, 255, 0.5)",
      boxShadow:
        "0 0 10px rgba(0, 240, 255, 0.3), inset 0 0 10px rgba(0, 240, 255, 0.2)",
    },
  },
};

export default theme;
