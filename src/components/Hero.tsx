// import styled, { keyframes } from "styled-components";
// import { Container } from "../styles/SharedStyles";
// import theme from "../styles/theme";
// import InteractiveParticles from "./InteractiveParticles";

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const HeroSection = styled.section`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   position: relative;
//   padding: 120px 0;
//   overflow: hidden;

//   @media (max-width: ${theme.breakpoints.md}) {
//     padding: 0;
//     min-height: auto;
//     align-items: center;
//   }
// `;

// const ParticleContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   pointer-events: none;
// `;

// const Content = styled.div`
//   position: relative;
//   max-width: 1200px;
//   z-index: 2;
//   animation: ${fadeIn} 1s ease-out;

//   @media (max-width: ${theme.breakpoints.md}) {
//     margin-top: 0;
//   }
// `;

// const MainHeading = styled.h1`
//   font-size: clamp(3rem, 8vw, 7.5rem);
//   line-height: 1;
//   margin-bottom: 2rem;
//   font-weight: 600;
//   position: relative;

//   @media (max-width: ${theme.breakpoints.md}) {
//     font-size: clamp(3rem, 8vw, 7.5rem);
//     margin-bottom: 1rem;
//     line-height: 1.4;

//     br {
//       margin-bottom: 0.5rem;
//       content: "";
//       display: block;
//     }
//   }

//   .outline {
//     color: transparent;
//     -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
//     transition: all 0.3s ease;
//     position: relative;
//     display: inline-block;

//     @media (max-width: ${theme.breakpoints.md}) {
//       -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.8);
//     }

//     &:hover {
//       color: rgba(255, 255, 255, 0.1);
//       -webkit-text-stroke: 2px white;
//       transform: translateY(-5px);
//     }
//   }
// `;

// const Description = styled.p`
//   font-size: clamp(1rem, 1.8vw, 1.25rem);
//   line-height: 1.6;
//   color: ${theme.colors.textSecondary};
//   max-width: 600px;
//   margin-bottom: 2rem;
//   opacity: 0;
//   animation: ${fadeIn} 1s ease-out forwards;
//   animation-delay: 0.5s;

//   @media (max-width: ${theme.breakpoints.md}) {
//     font-size: 1.1rem;
//     margin-bottom: 1rem;
//     max-width: 100%;
//     line-height: 1.5;
//   }
// `;

// const ScrollIndicator = styled.div`
//   position: absolute;
//   bottom: 40px;
//   left: 40px;
//   color: ${theme.colors.textSecondary};
//   font-size: 0.875rem;
//   letter-spacing: 1px;
//   writing-mode: vertical-rl;
//   transform: rotate(180deg);
//   cursor: pointer;
//   transition: color 0.3s ease;

//   @media (max-width: ${theme.breakpoints.md}) {
//     bottom: 20px;
//     left: 10px;
//     font-size: 0.7rem;
//   }

//   &:hover {
//     color: white;
//   }
// `;

// const Hero = () => {
//   const scrollToAbout = () => {
//     document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <HeroSection id="hero">
//       <ParticleContainer>
//         <InteractiveParticles />
//       </ParticleContainer>
//       <Container>
//         <Content>
//           <MainHeading>
//             SHOW THE <span className="outline">FUTURE</span>,
//             <br />
//             CREATE A <span className="outline">VISION</span>.
//           </MainHeading>
//           <Description>
//             We craft digital experiences that push boundaries and define the
//             future of design. Our innovative approach combines creativity with
//             cutting-edge technology to create unforgettable digital journeys.
//           </Description>
//         </Content>
//       </Container>
//       <ScrollIndicator onClick={scrollToAbout}>SCROLL</ScrollIndicator>
//     </HeroSection>
//   );
// };

// export default Hero;
import styled, { keyframes } from "styled-components";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";
import { useEffect, useRef, useCallback } from "react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: none;
    min-height: auto;
    align-items: center;
  }
`;

const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  max-width: 1200px;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

const MainHeading = styled.h1`
  font-size: clamp(3rem, 8vw, 7.5rem);
  line-height: 1;
  margin-bottom: 2rem;
  font-weight: 600;
  position: relative;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: clamp(3rem, 8vw, 7.5rem);
    margin-bottom: 1rem;
    line-height: 1.4;

    br {
      margin-bottom: 0.5rem;
      content: "";
      display: block;
    }
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;

    @media (max-width: ${theme.breakpoints.md}) {
      -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.8);
    }

    &:hover {
      color: rgba(255, 255, 255, 0.1);
      -webkit-text-stroke: 2px white;
      transform: translateY(-5px);
    }
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    max-width: 100%;
    line-height: 1.5;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: ${theme.colors.textSecondary};
  font-size: 0.875rem;
  letter-spacing: 1px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  animation: ${float} 3s ease-in-out infinite;
  cursor: pointer;
  transition: color 0.3s ease;

  @media (max-width: ${theme.breakpoints.md}) {
    bottom: 20px;
    left: 10px;
    font-size: 0.7rem;
  }

  &:hover {
    color: white;
  }
`;

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  const createParticle = useCallback((x?: number, y?: number): Particle => {
    return {
      x: x ?? Math.random() * window.innerWidth,
      y: y ?? Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.3 + 0.1,
      color: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
    };
  }, []);

  const initParticles = useCallback(() => {
    particlesRef.current = Array.from({ length: 50 }, () => createParticle());
  }, [createParticle]);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Mouse interaction - gentler repulsion
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 150) {
        particle.x -= dx * 0.02;
        particle.y -= dy * 0.02;
      }

      // Bounce off edges with dampening
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -0.95;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -0.95;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }
    });

    animationFrameRef.current = requestAnimationFrame(drawParticles);
  }, []);

  const handleResize = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    mouseRef.current = {
      x: event.clientX,
      y: event.clientY,
    };
  }, []);

  useEffect(() => {
    handleResize();
    initParticles();
    drawParticles();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleResize, initParticles, drawParticles, handleMouseMove]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection id="hero">
      <ParticleCanvas ref={canvasRef} />
      <Container>
        <Content>
          <MainHeading>
            SHOW THE <span className="outline">FUTURE</span>,
            <br />
            CREATE A <span className="outline">VISION</span>.
          </MainHeading>
          <Description>
            We craft digital experiences that push boundaries and define the
            future of design. Our innovative approach combines creativity with
            cutting-edge technology to create unforgettable digital journeys.
          </Description>
        </Content>
      </Container>
      <ScrollIndicator onClick={scrollToAbout}>SCROLL</ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
