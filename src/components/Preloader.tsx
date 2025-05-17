import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import theme from "../styles/theme";
import { useEffect, useState } from "react";

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
`;

const LogoText = styled(motion.div)`
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 600;
  letter-spacing: 4px;
  position: relative;

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px ${theme.colors.primary};
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
  width: 200px;
  height: 2px;
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
`;

const GridOverlay = styled(motion.div)`
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
  background-size: 40px 40px;
  background-position: center;
  opacity: 0.3;
`;

const Circles = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled(motion.div)`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
`;

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Animate progress from 0 to 100 smoothly
    const duration = 3000; // 3 seconds for progress
    const interval = 10; // Update every 10ms
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
      transition: {
        duration: 0.8,
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
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <PreloaderContainer
          variants={containerVariants}
          initial={{ opacity: 1 }}
          exit="exit"
        >
          <Circles>
            {[100, 200, 300].map((size, i) => (
              <Circle
                key={size}
                style={{ width: size, height: size }}
                variants={circleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: i * 0.2 }}
              />
            ))}
          </Circles>
          <GridOverlay
            animate={{
              opacity: [0.3, 0],
              scale: [1, 1.2],
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
          />
          <LogoContainer
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <LogoText>
              <span className="outline">ARC</span>AGENCY
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
              <ProgressText>{Math.round(progress)}%</ProgressText>
            </ProgressBarContainer>
          </LogoContainer>
        </PreloaderContainer>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
