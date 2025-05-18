import { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  life: number;
  maxLife: number;
}

const COLORS = [
  "rgba(255, 255, 255, 0.3)",
  "rgba(255, 255, 255, 0.2)",
  "rgba(255, 255, 255, 0.1)",
];

const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  const createParticle = (x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.2 + 0.1;
    return {
      x,
      y,
      radius: Math.random() * 2 + 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      baseVx: Math.cos(angle) * speed,
      baseVy: Math.sin(angle) * speed,
      life: 1,
      maxLife: Math.random() * 150 + 150,
    };
  };

  const initParticles = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const particles: Particle[] = [];
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    particlesRef.current = particles;
  };

  const animate = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current = particlesRef.current.filter((particle) => {
      // Update life
      particle.life++;
      if (particle.life > particle.maxLife) {
        // Reset particle
        const newParticle = createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
        Object.assign(particle, newParticle);
        return true;
      }

      // Mouse interaction
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const repelRadius = 150;

      if (distance < repelRadius) {
        // Calculate repulsion force
        const force = (1 - distance / repelRadius) * 1.5;
        particle.vx = particle.baseVx - (dx / distance) * force;
        particle.vy = particle.baseVy - (dy / distance) * force;
      } else {
        // Return to base velocity
        particle.vx = particle.baseVx;
        particle.vy = particle.baseVy;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around screen
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      return true;
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    handleResize();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default InteractiveParticles;
