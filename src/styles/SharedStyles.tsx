import styled, { css, keyframes } from "styled-components";
import theme from "./theme";

// Interfaces
interface SectionProps {
  spacing?: "sm" | "md" | "lg" | "xl";
}

interface SectionDividerProps {
  variant?: "gradient" | "line";
}

// Components
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

export const Section = styled.section<SectionProps>`
  padding: ${(props) => {
    switch (props.spacing) {
      case "sm":
        return `${theme.spacing.xl} 0`;
      case "md":
        return `${theme.spacing["3xl"]} 0`;
      case "lg":
        return `${theme.spacing["4xl"]} 0`;
      case "xl":
        return `${theme.spacing["5xl"]} 0`;
      default:
        return `${theme.spacing["4xl"]} 0`;
    }
  }};
  position: relative;

  & + & {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: ${theme.spacing["5xl"]};
  }
`;

export const SectionDivider = styled.div<SectionDividerProps>`
  height: ${(props) => (props.variant === "gradient" ? "120px" : "1px")};
  width: 100%;
  position: relative;
  margin: ${theme.spacing["3xl"]} 0;

  ${(props) =>
    props.variant === "gradient"
      ? css`
          background: linear-gradient(
            to bottom,
            ${theme.colors.background},
            ${theme.colors.lightBackground}
          );

          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              ${theme.colors.primary},
              transparent
            );
          }
        `
      : css`
          background: linear-gradient(
            90deg,
            transparent,
            ${theme.colors.primary},
            transparent
          );
          opacity: 0.3;
        `}
`;

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${(props) => props.gap || theme.spacing.md};
`;

export const Grid = styled.div<{
  columns?: string;
  gap?: string;
}>`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "repeat(12, 1fr)"};
  gap: ${(props) => props.gap || theme.spacing.md};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button<{
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  padding: ${(props) =>
    props.size === "sm"
      ? "0.5rem 1rem"
      : props.size === "lg"
      ? "1rem 2rem"
      : "0.75rem 1.5rem"};
  font-size: ${(props) =>
    props.size === "sm"
      ? "0.875rem"
      : props.size === "lg"
      ? "1.125rem"
      : "1rem"};
  font-weight: 500;
  border-radius: ${theme.borderRadius.full};
  transition: all ${theme.transitions.default};
  cursor: pointer;
  border: none;
  outline: none;
  font-family: ${theme.fonts.secondary};

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.text};

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(110, 68, 255, 0.2);
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background: ${theme.colors.secondary};
      color: ${theme.colors.background};

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 240, 255, 0.2);
      }
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      background: transparent;
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.text};

      &:hover {
        background: ${theme.colors.primary};
        transform: translateY(-2px);
      }
    `}
`;

export const Text = styled.p<{
  size?: "sm" | "md" | "lg";
  weight?: number;
  color?: string;
}>`
  font-size: ${(props) =>
    props.size === "sm"
      ? "0.875rem"
      : props.size === "lg"
      ? "1.125rem"
      : "1rem"};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.color || theme.colors.textSecondary};
  line-height: 1.6;
`;

export const Title = styled.h2<{
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
}>`
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "1.5rem";
      case "md":
        return "2rem";
      case "lg":
        return "2.5rem";
      case "xl":
        return "clamp(2rem, 5vw, 3.5rem)";
      default:
        return "clamp(2rem, 5vw, 3.5rem)";
    }
  }};
  text-align: ${(props) => props.align || "left"};
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text};
`;

export const Subtitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
`;

export const Card = styled.div<{
  hover?: boolean;
}>`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};

  ${(props) =>
    props.hover &&
    css`
      &:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.03);
        border-color: rgba(255, 255, 255, 0.1);
      }
    `}
`;

export const GradientText = styled.span`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const Badge = styled.span<{
  variant?: "primary" | "secondary";
}>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: ${theme.borderRadius.full};
  background: ${(props) =>
    props.variant === "secondary"
      ? `rgba(0, 240, 255, 0.1)`
      : `rgba(110, 68, 255, 0.1)`};
  color: ${(props) =>
    props.variant === "secondary"
      ? theme.colors.secondary
      : theme.colors.primary};
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: ${theme.spacing.lg} 0;
`;

export const Heading = styled.h2<{
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
}>`
  font-family: ${theme.fonts.heading};
  text-align: ${(props) => props.align || "left"};
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "1.5rem";
      case "md":
        return "2rem";
      case "lg":
        return "2.5rem";
      case "xl":
        return "clamp(2rem, 5vw, 3.5rem)";
      default:
        return "2rem";
    }
  }};
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text};
`;

const glitchAnimation = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

export const GlitchText = styled.span<{ isActive?: boolean }>`
  position: relative;
  display: inline-block;
  animation: ${(props) =>
    props.isActive
      ? css`
          ${glitchAnimation} 0.2s ease-in-out infinite
        `
      : "none"};

  &:before,
  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  &:before {
    animation: ${(props) =>
      props.isActive
        ? css`
            ${glitchAnimation} 0.3s ease-in-out reverse infinite
          `
        : "none"};
    color: #ff0000;
    z-index: -1;
  }

  &:after {
    animation: ${(props) =>
      props.isActive
        ? css`
            ${glitchAnimation} 0.3s ease-in-out infinite
          `
        : "none"};
    color: #0000ff;
    z-index: -2;
  }
`;
