import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const CursorWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: opacity 0.3s ease;

  &.hidden {
    opacity: 0;
  }

  &.menu-open {
    mix-blend-mode: normal;
  }
`;

const CursorDot = styled.div`
  position: fixed;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;

  &.hover {
    width: 12px;
    height: 12px;
    background: rgba(97, 255, 189, 1);
  }
`;

const CursorCircle = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.15s ease;

  &.hover {
    width: 60px;
    height: 60px;
    border-color: rgba(97, 255, 189, 0.5);
    animation: ${pulse} 2s ease-in-out infinite;
  }

  &.clicked {
    width: 100px;
    height: 100px;
    border-width: 3px;
    opacity: 0;
    transition: all 0.5s ease;
  }
`;

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isVisible = useRef(true);
  let cursorTimeout: number;

  const onMouseMove = (e: MouseEvent) => {
    if (!isVisible.current) {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.classList.remove("hidden");
      if (circleRef.current) circleRef.current.classList.remove("hidden");
    }

    // Clear the previous timeout
    if (cursorTimeout) {
      window.clearTimeout(cursorTimeout);
    }

    // Set new timeout
    cursorTimeout = window.setTimeout(() => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.classList.add("hidden");
      if (circleRef.current) circleRef.current.classList.add("hidden");
    }, 3000);

    if (dotRef.current && circleRef.current) {
      // Smooth dot movement (immediate)
      dotRef.current.style.left = `${e.clientX}px`;
      dotRef.current.style.top = `${e.clientY}px`;

      // Smooth circle movement (delayed)
      circleRef.current.style.left = `${e.clientX}px`;
      circleRef.current.style.top = `${e.clientY}px`;
    }
  };

  const onMouseDown = () => {
    if (dotRef.current && circleRef.current) {
      circleRef.current.classList.add("clicked");
      setTimeout(() => {
        if (circleRef.current) {
          circleRef.current.classList.remove("clicked");
        }
      }, 500);
    }
  };

  const onMouseEnter = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches('button, a, input, [data-cursor="hover"]')) {
      if (dotRef.current) dotRef.current.classList.add("hover");
      if (circleRef.current) circleRef.current.classList.add("hover");
    }
  };

  const onMouseLeave = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches('button, a, input, [data-cursor="hover"]')) {
      if (dotRef.current) dotRef.current.classList.remove("hover");
      if (circleRef.current) circleRef.current.classList.remove("hover");
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseenter", onMouseEnter, true);
    document.addEventListener("mouseleave", onMouseLeave, true);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseenter", onMouseEnter, true);
      document.removeEventListener("mouseleave", onMouseLeave, true);
      if (cursorTimeout) {
        window.clearTimeout(cursorTimeout);
      }
    };
  }, []);

  useEffect(() => {
    const handleMenuState = () => {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        const isMenuOpen = document.body.style.overflow === "hidden";
        if (isMenuOpen) {
          wrapper.classList.add("menu-open");
        } else {
          wrapper.classList.remove("menu-open");
        }
      }
    };

    // Create a MutationObserver to watch for changes to body's style
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          handleMenuState();
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <CursorWrapper ref={wrapperRef} id="cursor-wrapper">
      <CursorDot ref={dotRef} />
      <CursorCircle ref={circleRef} />
    </CursorWrapper>
  );
};

export default Cursor;
