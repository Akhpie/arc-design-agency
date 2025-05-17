import styled from "styled-components";
import { Container } from "../styles/SharedStyles";

const WorkSection = styled.section`
  min-height: 100vh;
  padding: 120px 0;
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const WorkTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const WorkDescription = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.25rem);
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 600px;
  margin-bottom: 2rem;
`;

// Placeholder project data
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Innovative digital solution",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Creative design implementation",
    category: "UI/UX Design",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Advanced technology integration",
    category: "Technology",
  },
];

const ProjectCard = styled.div`
  background: ${(props) => props.theme.colors.lightBackground};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 2rem;
  transition: ${(props) => props.theme.transitions.default};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.neon};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.colors.textSecondary};
    margin-bottom: 1rem;
  }

  span {
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.875rem;
  }
`;

const WorkPage = () => {
  return (
    <WorkSection>
      <Container>
        <WorkTitle>Our Work</WorkTitle>
        <WorkDescription>
          Explore our portfolio of innovative projects and creative solutions
          that push the boundaries of digital experience.
        </WorkDescription>
        <WorkGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.category}</span>
            </ProjectCard>
          ))}
        </WorkGrid>
      </Container>
    </WorkSection>
  );
};

export default WorkPage;
