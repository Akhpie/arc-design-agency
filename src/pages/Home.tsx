import { Section } from "../styles/SharedStyles.tsx";
import Hero from "../components/Hero";
import About from "../components/About";
import Blog from "../components/Blog.tsx";
import CaseStudies from "../components/CaseStudies.tsx";
import Services from "../components/Services.tsx";
import Team from "../components/Team.tsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Section id="about">
        <About />
      </Section>
      <Section id="services">
        <Services />
      </Section>
      <Section id="case-studies">
        <CaseStudies />
      </Section>
      <Section id="blog">
        <Blog />
      </Section>
      <Section id="team">
        <Team />
      </Section>
    </>
  );
};

export default Home;
