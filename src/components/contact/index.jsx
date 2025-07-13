import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// === STYLED COMPONENTS (Same as before, no change needed) ===

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const TcContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};

  input {
    margin-right: 8px;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    cursor: pointer; 
  }
`;

const TcText = styled.div`
  color: ${({ theme }) => theme.BgLight};
`;

const TC = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;

  &:hover{
    cursor: pointer;
    opacity: 0.9;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 20px 20px 60px #1f2634;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
    filter: brightness(0.5);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

// === COMPONENT ===

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();

  // Replace with your actual EmailJS values
  const SERVICE_ID = 'service_ebtky7k';
  const TEMPLATE_ID = 'template_3rrb4na';
  const PUBLIC_KEY = 'WmqFuEwcmwVWeMJ5X';

  const [formData, setFormData] = useState({
    from_email: '',
    from_name: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [open, setOpen] = useState({ open: false, message: '', severity: 'success' });

  const handleClick = () => navigate('/TermsandConditions');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const messageRegex = /^[\w\s.,!?'-]{10,1000}$/;

    if (!formData.from_name.trim() || !nameRegex.test(formData.from_name))
      errors.from_name = 'Please enter a valid name (letters only).';

    if (!emailRegex.test(formData.from_email))
      errors.from_email = 'Please enter a valid email address.';

    if (!formData.subject.trim() || formData.subject.length < 3)
      errors.subject = 'Subject must be at least 3 characters long.';

    if (!messageRegex.test(formData.message.trim()))
      errors.message = 'Message must be 10-1000 characters. No emoji or spam allowed.';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setOpen({ open: true, message: 'Please fix the errors before submitting.', severity: 'error' });
      return;
    }

    setFormErrors({});

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setOpen({ open: true, message: 'Email sent successfully!', severity: 'success' });
        form.current.reset();
        setFormData({ from_email: '', from_name: '', subject: '', message: '' });
        setTermsAccepted(false);
      })
      .catch((error) => {
        console.log(error.text);
        setOpen({ open: true, message: 'Failed to send email. Please try again.', severity: 'error' });
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>For any inquiries or collaboration opportunities, please don't hesitate to get in touch.</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactInput
            placeholder="Your Email"
            name="from_email"
            type="email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          {formErrors.from_email && <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.from_email}</span>}

          <ContactInput
            placeholder="Your Name"
            name="from_name"
            type="text"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          {formErrors.from_name && <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.from_name}</span>}

          <ContactInput
            placeholder="Subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {formErrors.subject && <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.subject}</span>}

          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {formErrors.message && <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.message}</span>}

          <TcContainer>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              aria-label="Accept terms and conditions"
            />
            <TcText>
              I agree with the <TC onClick={handleClick}>Terms and Conditions</TC>
            </TcText>
          </TcContainer>

          <ContactButton type="submit" value="Send" disabled={!termsAccepted} />
        </ContactForm>

        <Snackbar
          open={open.open}
          autoHideDuration={6000}
          onClose={() => setOpen(prev => ({ ...prev, open: false }))}
        >
          <Alert onClose={() => setOpen(prev => ({ ...prev, open: false }))} severity={open.severity}>
            {open.message}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;