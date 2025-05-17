import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../styles/SharedStyles";
import theme from "../styles/theme";

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 120px 0;
  display: flex;
  align-items: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const ContactInfo = styled.div`
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 2rem;
    line-height: 1.1;
  }

  p {
    color: ${theme.colors.textSecondary};
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const InfoItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .label {
    color: ${theme.colors.primary};
    font-size: 0.875rem;
    font-weight: 500;
    min-width: 100px;
  }

  .value {
    color: ${theme.colors.textSecondary};
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled(motion.div)`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${theme.colors.text};
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    background: rgba(255, 255, 255, 0.02);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })`
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled(motion.button)`
  background: none;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const SuccessModal = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.2),
    0 0 1px 0 rgba(255, 255, 255, 0.1) inset;
  margin: 1rem;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: 500;
    text-shadow: 0 2px 10px rgba(103, 82, 255, 0.3);
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  ${SubmitButton} {
    background: rgba(103, 82, 255, 0.1);
    border: 1px solid rgba(103, 82, 255, 0.4);
    backdrop-filter: blur(5px);
    padding: 1rem 2.5rem;
    font-weight: 500;
    letter-spacing: 0.5px;

    &:hover {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      transform: translateY(-2px);
      box-shadow: 0 8px 16px -4px rgba(103, 82, 255, 0.3);
    }
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 999;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <ContactSection>
      <Container>
        <ContactGrid>
          <ContactInfo>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let's Create Something
              <br />
              <span style={{ color: theme.colors.primary }}>Amazing</span>{" "}
              Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind? We'd love to hear about it. Drop us a
              message and we'll get back to you as soon as possible.
            </motion.p>

            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <InfoItem variants={itemVariants}>
                <span className="label">Email</span>
                <span className="value">hello@arcagency.com</span>
              </InfoItem>
              <InfoItem variants={itemVariants}>
                <span className="label">Phone</span>
                <span className="value">+1 (234) 567-890</span>
              </InfoItem>
              <InfoItem variants={itemVariants}>
                <span className="label">Address</span>
                <span className="value">
                  123 Innovation Street, Tech District
                </span>
              </InfoItem>
            </motion.div>
          </ContactInfo>

          <ContactForm
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
          >
            <FormGroup variants={itemVariants}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup variants={itemVariants}>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup variants={itemVariants}>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup variants={itemVariants}>
              <TextArea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>

      <AnimatePresence>
        {showSuccess && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccess(false)}
            />
            <ModalContainer>
              <SuccessModal
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <SubmitButton onClick={() => setShowSuccess(false)}>
                  Close
                </SubmitButton>
              </SuccessModal>
            </ModalContainer>
          </>
        )}
      </AnimatePresence>
    </ContactSection>
  );
};

export default Contact;
