import { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
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
  opacity: number;
}

const COLORS = [
  "rgba(255, 255, 255, 1)", // We'll control opacity separately
];

const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  const createParticle = (x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.15 + 0.05; // Even slower movement
    return {
      x,
      y,
      radius: Math.random() * 1.5 + 0.5, // Smaller particles
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      baseVx: Math.cos(angle) * speed,
      baseVy: Math.sin(angle) * speed,
      life: 1,
      maxLife: Math.random() * 150 + 150,
      opacity: Math.random() * 0.3 + 0.1, // Random initial opacity
    };
  };

  const initParticles = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const particles: Particle[] = [];
    const particleCount = Math.min(40, Math.floor(window.innerWidth / 30)); // Even fewer particles

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
      const repelRadius = 100; // Smaller repel radius

      if (distance < repelRadius) {
        // Calculate repulsion force
        const force = (1 - distance / repelRadius) * 1.2;
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

      // Wrap around screen with fade effect
      const margin = 50; // Fade margin
      if (particle.x < -margin) particle.x = canvas.width + margin;
      if (particle.x > canvas.width + margin) particle.x = -margin;
      if (particle.y < -margin) particle.y = canvas.height + margin;
      if (particle.y > canvas.height + margin) particle.y = -margin;

      // Calculate opacity based on position
      const fadeDistance = 100; // Distance to start fading
      const edgeFadeX = Math.min(particle.x, canvas.width - particle.x);
      const edgeFadeY = Math.min(particle.y, canvas.height - particle.y);
      const edgeFade = Math.min(edgeFadeX, edgeFadeY);

      const normalOpacity = particle.opacity;
      const fadeOpacity =
        edgeFade < fadeDistance
          ? (edgeFade / fadeDistance) * normalOpacity
          : normalOpacity;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${fadeOpacity})`;
      ctx.fill();

      return true;
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    handleResize();
    animate();

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default InteractiveParticles;
