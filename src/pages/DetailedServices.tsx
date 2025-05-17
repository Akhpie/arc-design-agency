import { useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";
import { motion } from "framer-motion";

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
`;

const ServiceSection = styled.section`
  margin-bottom: 8rem;
  position: relative;
`;

const SectionHeader = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .number {
    color: ${theme.colors.primary};
    font-size: 0.5em;
    font-weight: 400;
    opacity: 0.7;
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
`;

const SectionDescription = styled(motion.p)`
  color: ${theme.colors.textSecondary};
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  max-width: 600px;
  line-height: 1.6;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ServiceCard = styled(motion.div)`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.primary};
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

const CardDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${theme.colors.textSecondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProcessTimeline = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

const TimelineNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${theme.colors.primary};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const TimelineDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
`;

const DetailedServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Product Design",
      description:
        "Creating innovative digital products that solve real problems and delight users.",
      process: [
        {
          title: "Discovery & Research",
          description:
            "Understanding user needs, market analysis, and defining project scope.",
        },
        {
          title: "Ideation & Concept",
          description:
            "Brainstorming solutions, creating wireframes, and validating concepts.",
        },
        {
          title: "Design & Iteration",
          description:
            "Crafting the user interface, prototyping, and iterative improvements.",
        },
        {
          title: "Testing & Launch",
          description:
            "User testing, refinements, and preparing for product launch.",
        },
      ],
      offerings: [
        {
          title: "UX Research",
          description:
            "In-depth user research and analysis to inform design decisions.",
          tech: ["User Interviews", "Analytics", "Heatmaps", "A/B Testing"],
        },
        {
          title: "UI Design",
          description: "Creating beautiful and functional user interfaces.",
          tech: ["Figma", "Design Systems", "Prototyping", "Animation"],
        },
        {
          title: "Product Strategy",
          description: "Strategic planning and roadmap development.",
          tech: ["Market Research", "User Personas", "Journey Mapping", "KPIs"],
        },
      ],
    },
    {
      id: 2,
      title: "Development",
      description:
        "Building robust, scalable web applications with cutting-edge technologies.",
      process: [
        {
          title: "Architecture Planning",
          description:
            "Designing system architecture and selecting technologies.",
        },
        {
          title: "Development Sprint",
          description: "Agile development process with regular iterations.",
        },
        {
          title: "Testing & QA",
          description: "Comprehensive testing and quality assurance.",
        },
        {
          title: "Deployment & Monitoring",
          description: "Smooth deployment and continuous monitoring.",
        },
      ],
      offerings: [
        {
          title: "Frontend Development",
          description: "Building responsive and performant user interfaces.",
          tech: ["React", "Next.js", "TypeScript", "Tailwind"],
        },
        {
          title: "Backend Development",
          description: "Creating robust and scalable server solutions.",
          tech: ["Node.js", "Python", "PostgreSQL", "Redis"],
        },
        {
          title: "DevOps",
          description: "Streamlining deployment and operations.",
          tech: ["Docker", "AWS", "CI/CD", "Kubernetes"],
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageWrapper>
      <Container>
        {services.map((service, index) => (
          <ServiceSection key={service.id}>
            <SectionHeader>
              <SectionTitle
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="number">0{index + 1}</span>
                <span>
                  {service.title.split(" ")[0]}{" "}
                  <span className="outline">{service.title.split(" ")[1]}</span>
                </span>
              </SectionTitle>
              <SectionDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {service.description}
              </SectionDescription>
            </SectionHeader>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceGrid>
                {service.offerings.map((offering, idx) => (
                  <ServiceCard
                    key={idx}
                    variants={itemVariants}
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <CardTitle>{offering.title}</CardTitle>
                    <CardDescription>{offering.description}</CardDescription>
                    <TechStack>
                      {offering.tech.map((tech, techIdx) => (
                        <TechTag
                          key={techIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIdx * 0.1 }}
                        >
                          {tech}
                        </TechTag>
                      ))}
                    </TechStack>
                  </ServiceCard>
                ))}
              </ServiceGrid>

              <ProcessTimeline>
                {service.process.map((step, idx) => (
                  <TimelineItem
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <TimelineNumber>0{idx + 1}</TimelineNumber>
                    <TimelineContent>
                      <TimelineTitle>{step.title}</TimelineTitle>
                      <TimelineDescription>
                        {step.description}
                      </TimelineDescription>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </ProcessTimeline>
            </motion.div>
          </ServiceSection>
        ))}
      </Container>
    </PageWrapper>
  );
};

export default DetailedServices;
