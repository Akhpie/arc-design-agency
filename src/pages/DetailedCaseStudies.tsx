import styled from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DetailedSection = styled.section`
  min-height: 100vh;
  padding: 120px 0;
  overflow: hidden;
  position: relative;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const MainHeading = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
`;

const SubHeading = styled(motion.p)`
  color: ${theme.colors.textSecondary};
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CaseStudyContainer = styled.div`
  margin-bottom: 8rem;
`;

const CaseStudy = styled(motion.div)`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  &:nth-child(even) {
    direction: rtl;

    .content {
      direction: ltr;
    }
  }
`;

const CaseStudyContent = styled.div.attrs({ className: "content" })`
  max-width: 600px;
`;

const CaseStudyTitle = styled(motion.h2)`
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: ${theme.colors.primary};
`;

const CaseStudyDescription = styled(motion.p)`
  color: ${theme.colors.textSecondary};
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Metric = styled(motion.div)`
  .value {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${theme.colors.primary};
  }

  .label {
    color: ${theme.colors.textSecondary};
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const ProcessTimeline = styled.div`
  margin-top: 3rem;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  .step {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  .content {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: white;
    }

    p {
      color: ${theme.colors.textSecondary};
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const DetailedCaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      title: "AI-Powered Healthcare Platform",
      description:
        "We developed an innovative AI-driven healthcare platform that revolutionizes how medical professionals diagnose and treat patients. The system uses advanced machine learning algorithms to analyze medical imaging, patient history, and symptoms to provide accurate diagnostic suggestions and treatment recommendations.",
      metrics: [
        { value: "40%", label: "Reduction in diagnosis time" },
        { value: "98%", label: "Diagnostic accuracy rate" },
        { value: "50K+", label: "Patients served monthly" },
        { value: "85%", label: "Doctor satisfaction rate" },
      ],
      process: [
        {
          title: "Research & Analysis",
          description:
            "Conducted extensive research with healthcare professionals to understand pain points and requirements.",
        },
        {
          title: "AI Model Development",
          description:
            "Developed and trained custom AI models using vast medical datasets while ensuring privacy compliance.",
        },
        {
          title: "Interface Design",
          description:
            "Created an intuitive interface that makes complex medical data easily accessible and actionable.",
        },
        {
          title: "Implementation & Training",
          description:
            "Rolled out the platform across multiple hospitals with comprehensive staff training programs.",
        },
      ],
      image: "https://placehold.co/1200x800/111111/0099FF?text=Healthcare+AI",
    },
    {
      title: "Next-Gen Fintech Platform",
      description:
        "Our team created a cutting-edge financial technology platform that handles millions of transactions daily while providing real-time insights and analytics. The platform integrates advanced security measures with a user-friendly interface to deliver a seamless banking experience.",
      metrics: [
        { value: "1M+", label: "Daily transactions processed" },
        { value: "200%", label: "Increase in user engagement" },
        { value: "60%", label: "Reduction in transaction time" },
        { value: "99.99%", label: "System uptime" },
      ],
      process: [
        {
          title: "Security Architecture",
          description:
            "Designed a robust security framework with multi-layer encryption and fraud detection.",
        },
        {
          title: "Platform Development",
          description:
            "Built a scalable architecture capable of handling millions of concurrent transactions.",
        },
        {
          title: "User Experience Design",
          description:
            "Created an intuitive interface that simplifies complex financial operations.",
        },
        {
          title: "Performance Optimization",
          description:
            "Implemented advanced caching and optimization techniques for real-time processing.",
        },
      ],
      image:
        "https://placehold.co/1200x800/111111/0099FF?text=Fintech+Platform",
    },
    {
      title: "E-commerce Revolution",
      description:
        "We revolutionized the e-commerce experience by creating a platform that combines AI-powered recommendations, real-time inventory management, and personalized shopping experiences. The solution has significantly improved sales conversion and customer retention rates.",
      metrics: [
        { value: "150%", label: "Increase in sales conversion" },
        { value: "85%", label: "Customer retention rate" },
        { value: "3X", label: "Increase in average order value" },
        { value: "45%", label: "Reduction in cart abandonment" },
      ],
      process: [
        {
          title: "Market Analysis",
          description:
            "Conducted comprehensive market research to identify key opportunities and pain points.",
        },
        {
          title: "AI Integration",
          description:
            "Implemented advanced recommendation algorithms and personalization features.",
        },
        {
          title: "Platform Development",
          description:
            "Built a scalable e-commerce platform with real-time inventory management.",
        },
        {
          title: "Optimization & Scale",
          description:
            "Continuously optimized the platform based on user behavior and performance metrics.",
        },
      ],
      image:
        "https://placehold.co/1200x800/111111/0099FF?text=E-Commerce+Platform",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <DetailedSection>
      <Container>
        <HeaderSection>
          <MainHeading
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            OUR <span className="outline">CASE STUDIES</span>
          </MainHeading>
          <SubHeading
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of successful digital transformations and
            innovative solutions that have helped businesses achieve their
            goals.
          </SubHeading>
        </HeaderSection>

        <CaseStudyContainer>
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <CaseStudyContent>
                <CaseStudyTitle variants={itemVariants}>
                  {study.title}
                </CaseStudyTitle>
                <CaseStudyDescription variants={itemVariants}>
                  {study.description}
                </CaseStudyDescription>

                <MetricsGrid>
                  {study.metrics.map((metric, i) => (
                    <Metric key={i} variants={itemVariants}>
                      <div className="value">{metric.value}</div>
                      <div className="label">{metric.label}</div>
                    </Metric>
                  ))}
                </MetricsGrid>

                <ProcessTimeline>
                  {study.process.map((step, i) => (
                    <TimelineItem key={i} variants={itemVariants}>
                      <div className="step">{i + 1}</div>
                      <div className="content">
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </TimelineItem>
                  ))}
                </ProcessTimeline>
              </CaseStudyContent>

              <ImageContainer variants={itemVariants}>
                <img src={study.image} alt={study.title} />
              </ImageContainer>
            </CaseStudy>
          ))}
        </CaseStudyContainer>
      </Container>
    </DetailedSection>
  );
};

export default DetailedCaseStudies;
