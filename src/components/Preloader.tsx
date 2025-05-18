import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import theme from "../styles/theme";
import { useEffect, useState, useRef } from "react";

const PreloaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

const LogoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 2;
`;

const LogoText = styled(motion.div)`
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 600;
  letter-spacing: 4px;
  position: relative;
  display: flex;
  overflow: hidden;

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px ${theme.colors.primary};
    position: relative;
    display: inline-block;
  }

  .glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: difference;
    opacity: 0.8;
  }
`;

const TagLine = styled(motion.div)`
  color: ${theme.colors.textSecondary};
  font-size: clamp(0.875rem, 2vw, 1rem);
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.7;
`;

const ProgressBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ProgressBar = styled(motion.div)`
  width: 300px;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  position: relative;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.colors.primary};
  transform-origin: left;
`;

const ProgressText = styled(motion.div)`
  font-size: 0.75rem;
  color: ${theme.colors.textSecondary};
  letter-spacing: 2px;
  font-family: ${theme.fonts.mono};
`;

const GridOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
`;

const Circles = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
`;

const GlowingOrb = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(97, 255, 189, 0.2) 0%,
    rgba(97, 255, 189, 0.1) 30%,
    rgba(97, 255, 189, 0) 70%
  );
  filter: blur(20px);
`;

const FloatingParticles = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`;

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    if (particlesRef.current) {
      const particles = Array.from({ length: 20 }).map(() => {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = "2px";
        particle.style.height = "2px";
        particle.style.background = "rgba(255, 255, 255, 0.5)";
        particle.style.borderRadius = "50%";
        particlesRef.current?.appendChild(particle);

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = 3 + Math.random() * 2;

        particle.animate(
          [
            { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 },
            {
              transform: `translate(${x}px, ${y - 100}px) scale(1)`,
              opacity: 1,
            },
            {
              transform: `translate(${x}px, ${y - 200}px) scale(0)`,
              opacity: 0,
            },
          ],
          {
            duration: duration * 1000,
            iterations: Infinity,
            delay: Math.random() * 2000,
          }
        );

        return particle;
      });

      return () => {
        particles.forEach((particle) => particle.remove());
      };
    }
  }, []);

  useEffect(() => {
    const duration = 3000;
    const interval = 10;
    const steps = duration / interval;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(progressInterval);
        setTimeout(() => setIsComplete(true), 800);
      }
    }, interval);

    return () => clearInterval(progressInterval);
  }, []);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const logoVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const taglineVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 0.7,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const progressVariants = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: progress / 100,
      transition: {
        duration: 0.3,
        ease: "linear",
      },
    },
  };

  const circleVariants = {
    initial: { scale: 0, opacity: 0, rotate: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotate: i % 2 === 0 ? 90 : -90,
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.2,
      },
    }),
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <PreloaderContainer
          variants={containerVariants}
          initial={{ opacity: 1, scale: 1 }}
          exit="exit"
        >
          <FloatingParticles ref={particlesRef} />
          <GridOverlay
            animate={{
              opacity: [0.3, 0.1],
              scale: [1, 1.1],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
          <Circles>
            {[200, 300, 400, 500].map((size, i) => (
              <Circle
                key={size}
                size={size}
                custom={i}
                variants={circleVariants}
                initial="initial"
                animate="animate"
              />
            ))}
          </Circles>
          <GlowingOrb variants={glowVariants} animate="animate" />
          <LogoContainer
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <LogoText>
              <motion.span
                className="outline"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(97, 255, 189, 0)",
                    "0 0 10px rgba(97, 255, 189, 0.5)",
                    "0 0 0px rgba(97, 255, 189, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                ARC
              </motion.span>
              AGENCY
            </LogoText>
            <TagLine
              variants={taglineVariants}
              initial="initial"
              animate="animate"
            >
              Digital Innovation Studio
            </TagLine>
            <ProgressBarContainer>
              <ProgressBar>
                <ProgressFill
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                />
              </ProgressBar>
              <ProgressText>
                <motion.span
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  LOADING {Math.round(progress)}%
                </motion.span>
              </ProgressText>
            </ProgressBarContainer>
          </LogoContainer>
        </PreloaderContainer>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
