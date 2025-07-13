import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GetAppIcon from '@mui/icons-material/GetApp';
import { GitHub } from '@mui/icons-material';
import logo from '/img/logo.png';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const FooterContainer = styled.div`
  width: 100%;
  padding: 1rem 0; /* Reduced from 2rem */
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* Reduced gap between items */
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const LogoImg = styled.img`
  height: 12rem; /* Reduced height */
  width: 12rem;
  padding: 0.3rem; /* Slightly smaller padding */
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 1.5rem; /* Made responsive */
  margin: 0;
  color: #854CE6;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem; /* Reduced from 2rem */
  margin-top: 0.5rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 0.5rem; /* Reduced margin */
  gap: 1rem; /* Use gap instead of margin for consistency */
`;

const SocialMediaIcon = styled.a`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const InstallIconWrapper = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  margin-top: 1rem; /* Reduced */
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = ({ footerData, links = [] }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <a href="" style={{ height: "150px" }}>
          <LogoImg src={logo} alt="Logo" />
        </a>
        <Logo>Heena Kapoor</Logo>
        <Nav>
          {links.map((link, index) => (
            <NavLink
              to={link.toLowerCase()}
              smooth={true}
              duration={100}
              offset={-80}
              key={index}
              aria-label={`${link} section`}
            >
              {link}
            </NavLink>
          ))}
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon
            href={'https://www.github.com/Heena-Kapoor' || '#'}
            target="_blank"
            aria-label="GitHub profile"
          >
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={'https://www.linkedin.com/in/heena-kap00r/' || '#'}
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={`mailto:${'hkkapoor257@gmail.com' || 'hkkapoor257@gmail.com'}`}
            target="_blank"
            aria-label="Send email"
          >
            <EmailIcon />
          </SocialMediaIcon>
          {deferredPrompt && (
            <InstallIconWrapper onClick={handleInstallClick} aria-label="Install App">
              <GetAppIcon />
            </InstallIconWrapper>
          )}
        </SocialMediaIcons>
        <Copyright>
          &copy; {new Date().getFullYear()} Heena Kapoor. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
