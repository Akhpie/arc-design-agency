import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Container, Text } from "../styles/SharedStyles.tsx";
import theme from "../styles/theme";

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const FooterWrapper = styled.footer`
  padding: 4rem 0 1.5rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(97, 255, 189, 0.2),
      rgba(0, 157, 255, 0.2),
      transparent
    );
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 3rem;
  margin-bottom: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterLogo = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  display: inline-block;
  letter-spacing: 1px;
  position: relative;
  transition: all 0.3s ease;
  text-decoration: none;

  span {
    background: linear-gradient(
      45deg,
      ${theme.colors.primary},
      #00ffcc,
      #0099ff
    );
    background-size: 200% 200%;
    animation: ${gradientMove} 3s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: -15px;
    left: 0;
    width: 25px;
    height: 2px;
    background: ${theme.colors.primary};
    opacity: 0.5;
  }
`;

const FooterHeading = styled.h4`
  color: ${theme.colors.text};
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.textSecondary};
  font-size: 0.95rem;
  transition: all 0.3s ease;
  opacity: 0.7;
  position: relative;
  width: fit-content;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background: ${theme.colors.primary};
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.primary};
    opacity: 1;
    transform: translateX(5px);

    &:before {
      width: 100%;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(Link)`
  color: ${theme.colors.textSecondary};
  font-size: 1.4rem;
  transition: all 0.3s ease;
  opacity: 0.7;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: ${theme.colors.primary};
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #000;
    opacity: 1;
    transform: translateY(-3px);
    border-color: transparent;

    &:before {
      opacity: 1;
      transform: scale(1);
    }
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const Copyright = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  font-size: 0.9rem;
  color: ${theme.colors.textSecondary};
  opacity: 0.7;
  letter-spacing: 1px;

  &:hover {
    opacity: 1;
    color: ${theme.colors.primary};
  }
`;

const ContactLink = styled.a`
  color: ${theme.colors.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  opacity: 0.7;
  position: relative;
  width: fit-content;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background: ${theme.colors.primary};
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.primary};
    opacity: 1;
    transform: translateX(5px);

    &:before {
      width: 100%;
    }
  }
`;

const AddressText = styled(Text)`
  font-size: 0.95rem;
  opacity: 0.7;
  line-height: 1.6;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateX(5px);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterLogo to="/">
              <span>ARC</span>AGENCY
            </FooterLogo>
            <AddressText color={theme.colors.textSecondary}>
              Transforming ideas into digital experiences that elevate
              businesses to new heights.
            </AddressText>
            <SocialLinks>
              <SocialIcon
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>𝕏</span>
              </SocialIcon>
              <SocialIcon
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>IG</span>
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>SERVICES</FooterHeading>
            <FooterLink to="/services/branding">Branding</FooterLink>
            <FooterLink to="/services/design">UI/UX Design</FooterLink>
            <FooterLink to="/services/development">Development</FooterLink>
            <FooterLink to="/services/marketing">Digital Marketing</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>COMPANY</FooterHeading>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/work">Our Work</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>CONTACT</FooterHeading>
            <AddressText color={theme.colors.textSecondary}>
              123 Innovation Street
              <br />
              Tech District, CA 90210
            </AddressText>
            <ContactLink href="mailto:hello@arcagency.com">
              hello@arcagency.com
            </ContactLink>
            <ContactLink href="tel:+1234567890">+1 (234) 567-890</ContactLink>
          </FooterColumn>
        </FooterContent>

        <Copyright>
          © {new Date().getFullYear()} ARC AGENCY. ALL RIGHTS RESERVED.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
