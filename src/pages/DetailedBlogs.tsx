import styled from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";
import { motion } from "framer-motion";
import { useState } from "react";

const BlogSection = styled.section`
  min-height: 100vh;
  padding: 120px 0;
  overflow: hidden;
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled(motion.article)`
  position: relative;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 380px;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

const BlogDate = styled.div`
  font-size: 0.875rem;
  color: ${theme.colors.primary};
  margin-bottom: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const BlogTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const BlogExcerpt = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  color: ${theme.colors.textSecondary};
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const ReadMore = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  overflow: visible;

  &:after {
    display: none;
  }

  &:hover,
  &:focus,
  &:active {
    background: none;
    outline: none;
    box-shadow: none;
    opacity: 0.9;
  }
`;

const DetailedBlogs = () => {
  const [isVisible, setIsVisible] = useState(true);

  const blogs = [
    {
      date: "March 15, 2024",
      title: "The Evolution of Digital Design: Trends Shaping the Future",
      excerpt:
        "Explore the latest trends in digital design and how they're transforming user experiences across platforms.",
      tags: ["Design Trends", "UX", "Innovation"],
      readTime: "5 min read",
    },
    {
      date: "March 12, 2024",
      title: "Building Scalable Systems: Architecture Best Practices",
      excerpt:
        "Learn about modern architectural patterns and practices for building highly scalable digital solutions.",
      tags: ["Architecture", "Scalability", "Best Practices"],
      readTime: "7 min read",
    },
    {
      date: "March 10, 2024",
      title: "AI in Modern Web Applications: A Practical Guide",
      excerpt:
        "Discover how to effectively integrate AI capabilities into your web applications for enhanced user experience.",
      tags: ["AI", "Web Development", "Innovation"],
      readTime: "6 min read",
    },
    {
      date: "March 8, 2024",
      title: "Sustainable Digital Solutions: The Future of Tech",
      excerpt:
        "Understanding the importance of sustainability in digital product development and implementation.",
      tags: ["Sustainability", "Technology", "Future"],
      readTime: "4 min read",
    },
    {
      date: "March 5, 2024",
      title: "The Impact of Motion Design on User Experience",
      excerpt:
        "How thoughtful animation and motion design can significantly improve digital product usability.",
      tags: ["Motion Design", "UX", "Animation"],
      readTime: "5 min read",
    },
    {
      date: "March 1, 2024",
      title: "Security First: Protecting Digital Products",
      excerpt:
        "Essential security practices and implementations for modern digital products and services.",
      tags: ["Security", "Best Practices", "Development"],
      readTime: "8 min read",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <BlogSection>
      <Container>
        <HeaderSection>
          <MainHeading
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            INSIGHTS & <span className="outline">THOUGHTS</span>
          </MainHeading>
          <SubHeading
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our latest articles and insights on digital innovation,
            design trends, and technology advancements.
          </SubHeading>
        </HeaderSection>

        <BlogGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {blogs.map((blog, index) => (
            <BlogCard key={index} variants={itemVariants}>
              <BlogDate>{blog.date}</BlogDate>
              <BlogTitle>{blog.title}</BlogTitle>
              <TagContainer>
                {blog.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagContainer>
              <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
              <ReadMore>
                Read More <span>→</span>
              </ReadMore>
            </BlogCard>
          ))}
        </BlogGrid>
      </Container>
    </BlogSection>
  );
};

export default DetailedBlogs;
