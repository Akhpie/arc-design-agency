import styled from "styled-components";
import noiseTexture from "../assets/noise.svg";
import theme from "../styles/theme";

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
  return (
    <BackgroundWrapper>
      <GridOverlay />
      <NoiseOverlay />
    </BackgroundWrapper>
  );
};

export default GlobalBackground;
