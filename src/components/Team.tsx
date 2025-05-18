import styled from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TeamSection = styled.section`
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeadingWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

const MainHeading = styled(motion.h2)`
  font-size: clamp(3.5rem, 8vw, 5rem);
  line-height: 1;
  font-weight: 600;
  margin-bottom: 2rem;

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin-bottom: 2rem;
`;

const TeamGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TeamMember = styled(motion.div)`
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const MemberImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const MemberInfo = styled.div`
  margin-top: 1.5rem;
  text-align: left;
`;

const MemberName = styled.h3`
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const MemberRole = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
  margin-bottom: 0.25rem;
  letter-spacing: 0.05em;
`;

const MemberCompany = styled.p`
  color: ${theme.colors.primary};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
`;

const ReadMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;

  .arrow {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.primary};

    .arrow {
      transform: translateX(5px);
    }
  }
`;

const Team = () => {
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

  const teamMembers = [
    {
      name: "AKHIL NANDYALA",
      role: "TEAM LEADER AND DEVELOPER",
      company: "SCMNOW",
      image: "/team/member1.jpg",
    },
    {
      name: "PUNEETH MYDADAM",
      role: "DEVELOPER",
      company: "COGNINE TECHNOLOGIES",
      image: "/team/member2.jpg",
    },
    {
      name: "SAI SHANKAR",
      role: "DEVELOPER",
      company: "DENTSU LIVE Inc.",
      image: "/team/member3.jpg",
    },
    {
      name: "KAILASH NISCHAL",
      role: "TESTER",
      company: "QUALCOMM",
      image: "/team/member4.jpg",
    },
  ];

  return (
    <TeamSection>
      <GridBackground />
      <Container>
        <Content>
          <HeadingWrapper>
            <MainHeading
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              MEET THE <span className="outline">TEAM</span>
            </MainHeading>
            <Description
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our team of creative visionaries and technical experts work
              together to push the boundaries of digital innovation and deliver
              exceptional results for our clients.
            </Description>
          </HeadingWrapper>

          <TeamGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* <MemberImage src={member.image} alt={member.name} /> */}
                <MemberInfo>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                  <MemberCompany>{member.company}</MemberCompany>
                  <ReadMoreButton
                    to={`/team/${member.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    Read More <span className="arrow">{">"}</span>
                  </ReadMoreButton>
                </MemberInfo>
              </TeamMember>
            ))}
          </TeamGrid>
        </Content>
      </Container>
    </TeamSection>
  );
};

export default Team;
