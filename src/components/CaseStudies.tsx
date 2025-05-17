import styled from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudiesSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 120px 0;
  overflow: hidden;
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
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
  }
`;

const HeadingWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const HeadingGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const TitleArea = styled.div`
  flex: 1;
`;

const MainHeading = styled.h2`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${theme.colors.textSecondary};
`;

const SubHeading = styled.div`
  font-size: clamp(3rem, 7vw, 5rem);
  line-height: 1.1;
  font-weight: 600;
  max-width: 800px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: clamp(2rem, 5vw, 3rem);
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

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const LearnMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.text};
  font-size: 1rem;
  text-decoration: none;
  padding-bottom: 0.25rem;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: ${theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.primary};

    &:after {
      width: 100%;
    }

    .arrow {
      transform: translateX(5px);
    }
  }

  .arrow {
    transition: transform 0.3s ease;
  }
`;

const ImagesContainer = styled.div`
  flex: 1.2;
  position: relative;
  height: 70vh;
  perspective: 1000px;
  transform-style: preserve-3d;

  @media (max-width: ${theme.breakpoints.md}) {
    height: 40vh;
    margin: 0 -1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotateY(-20deg) rotateX(5deg);
  border-radius: 4px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  @media (max-width: ${theme.breakpoints.md}) {
    transform: none;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.5rem;
`;

const Dot = styled.button<{ active?: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "white" : "rgba(255, 255, 255, 0.3)"};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.active ? "white" : "rgba(255, 255, 255, 0.5)"};
  }
`;

const NavigationArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: ${theme.colors.primary};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    border-color: ${theme.colors.primary};
    background: rgba(255, 255, 255, 0.03);
  }

  &.prev {
    left: -80px;
  }

  &.next {
    right: -80px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 36px;
    height: 36px;
    font-size: 1rem;

    &.prev {
      left: 10px;
    }
    &.next {
      right: 10px;
    }
  }
`;

const SlideContent = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cases = [
    {
      title: "FEATURED PROJECT",
      heading: "AI POWERED HEALTHCARE",
      description:
        "Revolutionizing patient care through an AI-driven healthcare platform that streamlines diagnostics and treatment planning. Achieved 40% reduction in diagnosis time and 98% accuracy rate.",
      image: "https://placehold.co/1200x800/111111/0099FF?text=Healthcare+AI",
    },
    {
      title: "FEATURED PROJECT",
      heading: "FINTECH INNOVATION",
      description:
        "Developed a next-generation financial platform that processes over 1 million transactions daily. Enhanced user engagement by 200% and reduced transaction time by 60%.",
      image:
        "https://placehold.co/1200x800/111111/0099FF?text=Fintech+Platform",
    },
    {
      title: "FEATURED PROJECT",
      heading: "E-COMMERCE REVOLUTION",
      description:
        "Created a seamless e-commerce experience with AI-powered recommendations and real-time inventory management. Increased sales conversion by 150% and customer retention by 85%.",
      image:
        "https://placehold.co/1200x800/111111/0099FF?text=E-Commerce+Platform",
    },
  ];

  const currentCase = cases[activeIndex];

  const handlePrevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <CaseStudiesSection>
      <GridBackground />
      <Container>
        <Content>
          <LeftContent>
            <HeadingWrapper>
              <HeadingGroup>
                <TitleArea>
                  <AnimatePresence mode="wait">
                    <SlideContent
                      key={activeIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MainHeading>{currentCase.title}</MainHeading>
                      <SubHeading>{currentCase.heading}</SubHeading>
                    </SlideContent>
                  </AnimatePresence>
                </TitleArea>
                <Dots>
                  {cases.map((_, index) => (
                    <Dot
                      key={index}
                      active={index === activeIndex}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </Dots>
              </HeadingGroup>
              <AnimatePresence mode="wait">
                <SlideContent
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Description>{currentCase.description}</Description>
                  <LearnMoreButton to="/case-studies">
                    Learn More <span className="arrow">→</span>
                  </LearnMoreButton>
                </SlideContent>
              </AnimatePresence>
              <SmallHeading>CASE STUDIES</SmallHeading>
            </HeadingWrapper>
          </LeftContent>
          <ImagesContainer>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={currentCase.image} alt={currentCase.heading} />
              </motion.div>
            </AnimatePresence>
          </ImagesContainer>
          <NavigationArrow className="prev" onClick={handlePrevSlide}>
            ⟪
          </NavigationArrow>
          <NavigationArrow className="next" onClick={handleNextSlide}>
            ⟫
          </NavigationArrow>
        </Content>
      </Container>
    </CaseStudiesSection>
  );
};

export default CaseStudies;
