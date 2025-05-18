import styled from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";
import { useState } from "react";
import { motion } from "framer-motion";

const BlogsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 120px 0;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 80px 0;
  }
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

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

const HeadingWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

const MainHeading = styled(motion.h2)`
  font-size: clamp(3rem, 8vw, 7.5rem);
  line-height: 1;
  font-weight: 600;
  margin-bottom: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: clamp(2.5rem, 6vw, 3rem);
    margin-bottom: 1.5rem;
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px white;

    @media (max-width: ${theme.breakpoints.md}) {
      -webkit-text-stroke: 0.5px white;
    }
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

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const BlogCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const BlogDate = styled.div`
  font-size: 0.875rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const BlogExcerpt = styled.p`
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SummaryModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${theme.colors.background};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  z-index: 1000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${theme.colors.textSecondary};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;

  &:hover {
    color: white;
  }
`;

const SummaryContent = styled.div`
  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      position: relative;
      color: ${theme.colors.textSecondary};

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${theme.colors.primary};
      }
    }
  }
`;

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const blogs = [
    {
      date: "2024-03-15",
      title: "The Future of Digital Design",
      excerpt:
        "Exploring emerging trends in digital design and how they're shaping the future of user experiences.",
      summary: [
        "AI-driven design systems are becoming mainstream",
        "Increased focus on accessibility and inclusive design",
        "Rise of micro-interactions and subtle animations",
        "Integration of AR/VR in everyday digital experiences",
      ],
    },
    {
      date: "2024-03-10",
      title: "Sustainable Digital Solutions",
      excerpt:
        "How digital agencies can contribute to sustainability through thoughtful design and development practices.",
      summary: [
        "Green hosting solutions and their impact",
        "Energy-efficient code optimization techniques",
        "Sustainable design principles for digital products",
        "Measuring and reducing digital carbon footprint",
      ],
    },
    {
      date: "2024-03-05",
      title: "Innovation in User Experience",
      excerpt:
        "Breaking down the latest innovations in UX design and their impact on user engagement.",
      summary: [
        "Voice user interfaces becoming more sophisticated",
        "Gesture-based interactions gaining popularity",
        "Emotional design principles in digital products",
        "Personalization through machine learning",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <BlogsSection>
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
              INSIGHTS & <span className="outline">THOUGHTS</span>
            </MainHeading>
            <SmallHeading>BLOG</SmallHeading>
          </HeadingWrapper>

          <BlogGrid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                variants={cardVariants}
                custom={index}
                onClick={() => setSelectedBlog(index)}
              >
                <BlogDate>{blog.date}</BlogDate>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
              </BlogCard>
            ))}
          </BlogGrid>
        </Content>
      </Container>

      <Overlay
        isOpen={selectedBlog !== null}
        onClick={() => setSelectedBlog(null)}
      />
      <SummaryModal isOpen={selectedBlog !== null}>
        {selectedBlog !== null && (
          <>
            <CloseButton onClick={() => setSelectedBlog(null)}>×</CloseButton>
            <SummaryContent>
              <h4>{blogs[selectedBlog].title}</h4>
              <ul>
                {blogs[selectedBlog].summary.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </SummaryContent>
          </>
        )}
      </SummaryModal>
    </BlogsSection>
  );
};

export default Blogs;
