import styled from "styled-components";

const SocialContainer = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.05);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const SocialLinks = () => {
  return (
    <SocialContainer>
      <SocialLink
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M17.5 6.51L17.51 6.49889"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SocialLink>
      <SocialLink
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.07 4.27 20.89 3.33 21.27 2.2C20.33 2.75 19.28 3.12 18.17 3.31C17.22 2.35 15.84 1.81 14.36 1.81C11.49 1.81 9.18 4.12 9.18 6.99C9.18 7.39 9.23 7.77 9.32 8.13C5.04 7.92 1.33 5.87 -0.12 2.8C-0.52 3.54 -0.75 4.39 -0.75 5.29C-0.75 6.97 0.14 8.47 1.5 9.34C0.67 9.31 -0.13 9.07 -0.84 8.68V8.73C-0.84 11.27 0.91 13.39 3.21 13.86C2.83 13.97 2.42 14.03 2 14.03C1.7 14.03 1.41 14 1.13 13.94C1.71 16.02 3.63 17.54 5.91 17.58C4.13 19 1.88 19.85 -0.57 19.85C-0.95 19.85 -1.33 19.83 -1.7 19.78C0.61 21.29 3.33 22.18 6.26 22.18C14.36 22.18 18.76 15.31 18.76 9.37C18.76 9.15 18.76 8.93 18.75 8.71C19.7 8.08 20.53 7.28 21.21 6.35L22 4.01Z"
            fill="currentColor"
          />
        </svg>
      </SocialLink>
    </SocialContainer>
  );
};

export default SocialLinks;
