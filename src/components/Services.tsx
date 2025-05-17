import styled from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";
import { useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = styled.section`
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
  max-width: 1200px;
  margin: 0 auto;
`;

const ArrowLink = styled(Link)`
  position: absolute;
  right: 20;
  bottom: -30px;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-size: 1.25rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 1;
    transform: translateX(5px);
  }

  &:before {
    content: "View All";
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

const MainHeading = styled.h2`
  font-size: clamp(3.5rem, 8vw, 5rem);
  line-height: 1;
  font-weight: 600;
  margin-bottom: 4rem;
  position: relative;

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 900px;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ServiceTitle = styled.h3<{ isActive: boolean }>`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 500;
  color: ${(props) => (props.isActive ? theme.colors.primary : "white")};
  transition: color 0.3s ease;
`;

const PlusIcon = styled.span<{ isActive: boolean }>`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 300;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.isActive ? "45deg" : "0")});
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const AccordionContent = styled.div<{ isActive: boolean }>`
  max-height: ${(props) => (props.isActive ? "500px" : "0")};
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: ${(props) => (props.isActive ? "2rem" : "0")};
`;

const Description = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  padding-right: 3rem;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Product Design",
      description:
        "Creating innovative digital products that solve real problems and delight users.",
      tags: [
        "User Research",
        "UI/UX Design",
        "Prototyping",
        "Testing",
        "Design Systems",
        "User Journey Mapping",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive interfaces and seamless user experiences that engage and convert.",
      tags: [
        "Visual Design",
        "Customer Experience",
        "Prototyping",
        "Usability Testing",
        "Accessibility",
        "Design Systems",
      ],
    },
    {
      title: "Webflow Development",
      description:
        "Building robust, scalable web applications with cutting-edge technologies.",
      tags: [
        "Frontend Development",
        "Responsive Design",
        "CMS Integration",
        "Performance Optimization",
        "SEO Implementation",
        "Custom Animations",
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ServicesSection>
      <GridBackground />
      <Container>
        <Content>
          <MainHeading>
            WHAT <span className="outline">WE DO</span>
            <ArrowLink to="/services">→</ArrowLink>
          </MainHeading>

          <AccordionContainer>
            {services.map((service, index) => (
              <AccordionItem key={index}>
                <AccordionHeader
                  isActive={activeIndex === index}
                  onClick={() => toggleAccordion(index)}
                >
                  <HeaderTitle>
                    <PlusIcon isActive={activeIndex === index}>+</PlusIcon>
                    <ServiceTitle isActive={activeIndex === index}>
                      {service.title}
                    </ServiceTitle>
                  </HeaderTitle>
                </AccordionHeader>

                <AccordionContent isActive={activeIndex === index}>
                  <Description>{service.description}</Description>
                  <TagContainer>
                    {service.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagContainer>
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionContainer>
        </Content>
      </Container>
    </ServicesSection>
  );
};

export default Services;
