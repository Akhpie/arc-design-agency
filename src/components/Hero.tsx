import styled, { keyframes } from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0;
    min-height: auto;
    align-items: center;
  }
`;

const Content = styled.div`
  position: relative;
  max-width: 1200px;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

const MainHeading = styled.h1`
  font-size: clamp(3rem, 8vw, 7.5rem);
  line-height: 1;
  margin-bottom: 2rem;
  font-weight: 600;
  position: relative;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: clamp(3rem, 8vw, 7.5rem);
    margin-bottom: 1rem;
    line-height: 1.4;

    br {
      margin-bottom: 0.5rem;
      content: "";
      display: block;
    }
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;

    @media (max-width: ${theme.breakpoints.md}) {
      -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.8);
    }

    &:hover {
      color: rgba(255, 255, 255, 0.1);
      -webkit-text-stroke: 2px white;
      transform: translateY(-5px);
    }
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    max-width: 100%;
    line-height: 1.5;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: ${theme.colors.textSecondary};
  font-size: 0.875rem;
  letter-spacing: 1px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  cursor: pointer;
  transition: color 0.3s ease;

  @media (max-width: ${theme.breakpoints.md}) {
    bottom: 20px;
    left: 10px;
    font-size: 0.7rem;
  }

  &:hover {
    color: white;
  }
`;

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection id="hero">
      <Container>
        <Content>
          <MainHeading>
            SHOW THE <span className="outline">FUTURE</span>,
            <br />
            CREATE A <span className="outline">VISION</span>.
          </MainHeading>
          <Description>
            We craft digital experiences that push boundaries and define the
            future of design. Our innovative approach combines creativity with
            cutting-edge technology to create unforgettable digital journeys.
          </Description>
        </Content>
      </Container>
      <ScrollIndicator onClick={scrollToAbout}>SCROLL</ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
