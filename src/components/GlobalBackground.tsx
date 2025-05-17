import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import noiseTexture from "../assets/noise.svg";
import theme from "../styles/theme";

interface ParticleProps {
  size?: string;
  top?: string;
  left?: string;
  opacity?: number;
  duration?: string;
  delay?: string;
  color?: string;
}

const floatAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }
  50% {
    transform: translateY(-40px) translateX(20px) scale(1.2);
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.4);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${theme.colors.background};
  overflow: hidden;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at top right,
        rgba(110, 68, 255, 0.2) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at bottom left,
        rgba(0, 240, 255, 0.2) 0%,
        transparent 50%
      );
  }
`;

const NoiseOverlay = styled.div`
  position: absolute;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  background: url(${noiseTexture});
  background-repeat: repeat;
  opacity: 0.1;
  mix-blend-mode: overlay;
  animation: noise 8s steps(10) infinite;
  pointer-events: none;

  @keyframes noise {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -5%);
    }
    20% {
      transform: translate(-10%, 5%);
    }
    30% {
      transform: translate(5%, -10%);
    }
    40% {
      transform: translate(-5%, 15%);
    }
    50% {
      transform: translate(-10%, 5%);
    }
    60% {
      transform: translate(15%, 0);
    }
    70% {
      transform: translate(0, 10%);
    }
    80% {
      transform: translate(-15%, 0);
    }
    90% {
      transform: translate(10%, 5%);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const Particle = styled.div<ParticleProps>`
  position: absolute;
  width: ${(props) => props.size || "8px"};
  height: ${(props) => props.size || "8px"};
  background: ${(props) => props.color || theme.colors.primary};
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  opacity: ${(props) => props.opacity || 0.8};
  animation: ${floatAnimation} ${(props) => props.duration || "8s"} ease-in-out
      infinite,
    ${pulseAnimation}
      ${(props) =>
        props.duration ? `${parseFloat(props.duration) * 0.5}s` : "4s"}
      ease-in-out infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  box-shadow: 0 0 20px ${(props) => props.color || theme.colors.primary},
    0 0 40px ${(props) => props.color || theme.colors.primary},
    0 0 60px ${(props) => props.color || theme.colors.primary};
  mix-blend-mode: screen;
  z-index: 2;
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px
    ),
    linear-gradient(-45deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: center;
  opacity: 0.2;
  z-index: 1;
`;

const GlobalBackground = () => {
  const [particles, setParticles] = useState<Array<ParticleProps>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
      return Array(particleCount)
        .fill(null)
        .map(() => {
          const colors = [
            theme.colors.primary,
            theme.colors.secondary,
            theme.colors.accent,
            theme.colors.neonPurple,
            "#00f0ff",
            "#ff2d55",
          ];
          return {
            size: `${Math.random() * 16 + 6}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.7,
            duration: `${Math.random() * 8 + 6}s`,
            delay: `${Math.random() * 4}s`,
            color: colors[Math.floor(Math.random() * colors.length)],
          };
        });
    };

    setParticles(generateParticles());

    const handleResize = () => {
      setParticles(generateParticles());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BackgroundWrapper>
      <GridOverlay />
      <NoiseOverlay />
      {particles.map((particle, index) => (
        <Particle
          key={index}
          size={particle.size}
          top={particle.top}
          left={particle.left}
          opacity={particle.opacity}
          duration={particle.duration}
          delay={particle.delay}
          color={particle.color}
        />
      ))}
    </BackgroundWrapper>
  );
};

export default GlobalBackground;
