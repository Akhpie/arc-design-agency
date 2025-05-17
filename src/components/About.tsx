import styled from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 120px 0;
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(-45deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: center;
  opacity: 0.4;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
`;

const HeadingWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const MainHeading = styled.h2`
  font-size: clamp(3rem, 8vw, 7.5rem);
  line-height: 1;
  font-weight: 600;

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
`;

const SmallHeading = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: ${theme.colors.textSecondary};
  writing-mode: vertical-rl;
  transform: rotate(180deg) translateY(-100%);
  margin-right: -2rem;
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Stats = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  .number {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 1rem;
    color: ${theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <GridBackground />
      <Container>
        <Content>
          <HeadingWrapper>
            <MainHeading>
              PUSHING THE <span className="outline">BOUNDARIES</span>
              <br />
              OF DIGITAL DESIGN.
            </MainHeading>
            <SmallHeading>ABOUT US</SmallHeading>
          </HeadingWrapper>
          <Description>
            We are a team of creative thinkers and problem solvers who are
            passionate about creating innovative digital solutions. Our
            expertise spans across design, development, and strategy, allowing
            us to deliver comprehensive solutions that drive real business
            results.
          </Description>
          <Stats>
            <StatItem>
              <div className="number">50+</div>
              <div className="label">Happy Clients</div>
            </StatItem>
            <StatItem>
              <div className="number">120+</div>
              <div className="label">Projects Completed</div>
            </StatItem>
            <StatItem>
              <div className="number">10</div>
              <div className="label">Years Experience</div>
            </StatItem>
          </Stats>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
