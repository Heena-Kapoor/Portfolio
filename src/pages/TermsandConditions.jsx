import { React, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../utils/Themes.js';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/index.jsx';

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  background-color: ${({ theme }) => theme.BgLight};
`;

const Body = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 60.83%);
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TermsContainer = styled.div`
  max-width: 992px;
  color: ${({ theme }) => theme.white};
  padding: 50px 30px;

  @media (max-width: 768px) {
    width: 95%;
    padding: 30px;
  }
  @media (max-width: 575px) {
    padding: 10px;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.5rem 0;
    color: ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p, li {
    line-height: 1.8;
    font-size: 1rem;
    padding-bottom: 10px;
    font-weight: 350;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  ul {
    list-style: inside;
    padding-left: 10px;

    @media (max-width: 768px) {
      padding-left: 5px;
    }
  }
`;

const BoldText = styled.span`
  font-weight: 600;
`;

const TermsandConditions = ({ firebaseData }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Body>
          <Header Title="Terms & Conditions" />
          <TermsContainer>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must refrain from using the website.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              All content on this website—including but not limited to text, images, graphics, logos, and code—is the intellectual property of <BoldText>Heena Kapoor</BoldText>, unless otherwise credited. Unauthorized use, copying, reproduction, or distribution is strictly prohibited without prior written consent.
            </p>

            <h2>3. Website Usage</h2>
            <p>When using this website, you agree not to:</p>
            <ul>
              <li>Use the content for commercial purposes without permission.</li>
              <li>Attempt to disrupt or compromise website security or performance.</li>
              <li>Misuse contact forms or details for spam or unsolicited messages.</li>
              <li>Engage in activities that may damage, disable, or impair website functionality.</li>
            </ul>

            <h2>4. User-Generated Content</h2>
            <p>
              If user interactions (such as comments, messages, or feedback) are permitted on this website, users are solely responsible for their content. <BoldText>Heena Kapoor</BoldText> reserves the right to remove or moderate content deemed inappropriate or harmful.
            </p>

            <h2>5. Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only. While efforts are made to keep the content accurate and up to date, <BoldText>Heena Kapoor</BoldText> makes no warranties regarding the completeness, accuracy, or reliability of the information.
            </p>

            <h2>6. External Links</h2>
            <p>
              This website may contain links to third-party websites or services. <BoldText>Heena Kapoor</BoldText> has no control over and assumes no responsibility for the content, privacy policies, or practices of any external sites.
            </p>

            <h2>7. Privacy</h2>
            <p>
              Any personal data collected via forms or interactions on this website will be handled in accordance with the Privacy Policy. No information will be shared with third parties without user consent, except as required by law.
            </p>

            <h2>8. Modifications</h2>
            <p>
              <BoldText>Heena Kapoor</BoldText> reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the website after changes constitutes your acceptance of the updated terms.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of India.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions, feedback, or collaboration opportunities, please reach out using the contact details provided on the website.
            </p>
          </TermsContainer>

        </Body>
        <FooterWrapper>
          <Footer links={["About", "Skills", "Experience", "Projects", "Education"]} />
        </FooterWrapper>
      </ThemeProvider>
    </>
  );
}

export default TermsandConditions;
