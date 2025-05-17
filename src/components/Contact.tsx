import styled from "styled-components";
import { motion } from "framer-motion";
import { Container, Section, GradientText } from "../styles/SharedStyles";
import theme from "../styles/theme";

const ContactSection = styled(Section)`
  position: relative;
  overflow: hidden;
  padding: ${theme.spacing.xxl} 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.2;
  }

  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing.xl};
    font-size: ${theme.fontSizes.lg};
    max-width: 500px;
  }
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const Label = styled.label`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.sm};
  margin-bottom: ${theme.spacing.xs};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.md};
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })`
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled(motion.button)`
  background: ${theme.colors.primary};
  color: ${theme.colors.text};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.md};
  font-weight: 600;
  cursor: pointer;
  transition: ${theme.transitions.default};
  margin-top: ${theme.spacing.sm};

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <ContactGrid>
          <ContactInfo>
            <h2>
              Let's create something <GradientText>amazing</GradientText>{" "}
              together
            </h2>
            <p>
              Have a project in mind? We'd love to hear more about it. Reach out
              to us and let's start a conversation.
            </p>
            <div>
              <Label>Email</Label>
              <p>hello@arcagency.com</p>
              <Label style={{ marginTop: theme.spacing.md }}>Phone</Label>
              <p>+1 (234) 567-890</p>
              <Label style={{ marginTop: theme.spacing.md }}>Address</Label>
              <p>
                123 Innovation Street
                <br />
                Tech District, CA 90210
              </p>
            </div>
          </ContactInfo>
          <FormContainer>
            <Form>
              <InputGroup>
                <Label>Your Name</Label>
                <Input type="text" placeholder="John Doe" />
              </InputGroup>
              <InputGroup>
                <Label>Email Address</Label>
                <Input type="email" placeholder="john@example.com" />
              </InputGroup>
              <InputGroup>
                <Label>Subject</Label>
                <Input type="text" placeholder="Project Inquiry" />
              </InputGroup>
              <InputGroup>
                <Label>Message</Label>
                <TextArea placeholder="Tell us about your project..." />
              </InputGroup>
              <SubmitButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </SubmitButton>
            </Form>
          </FormContainer>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
