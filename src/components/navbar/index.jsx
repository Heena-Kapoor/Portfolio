import React, { useState, useEffect, useRef } from 'react';
import { Nav, NavbarContainer, Span, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { throttle } from 'lodash';
import { ScrollLink } from './NavbarStyledComponent';
import logo from '/img/Logo1.png';
import styled from 'styled-components';

const Navbar = ({ navbarData, sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const prevScrollPos = useRef(window.pageYOffset);
  const theme = useTheme();
  const navbarRef = useRef(null);
  const scrollThreshold = 25;

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos.current < currentScrollPos;
      const isBeyondThreshold = Math.abs(currentScrollPos - prevScrollPos.current) > scrollThreshold;

      if (isScrollingDown && isBeyondThreshold) {
        setScrollDirection('down');
      } else if (!isScrollingDown && isBeyondThreshold) {
        setScrollDirection('up');
      }

      prevScrollPos.current = currentScrollPos;

      if (isOpen) {
        setIsOpen(false);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const LogoImg = styled.img`
    height: 10rem;
    width: 10rem;
    padding: 0.5rem;
    margin-top:2pc;
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <Nav className={scrollDirection === 'down' ? 'hidden' : ''} ref={navbarRef}>
      <NavbarContainer>
        <a href="" target='_blank' style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer', textDecoration: 'none' }}>
          <LogoImg src={logo} alt="Logo" />
        </a>
        <MobileIcon aria-label="Open mobile menu">
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          {sections.map(section => (
            <li key={section}>
              <ScrollLink
                to={section.toLowerCase()}
                smooth={true}
                duration={100}
                offset={15}
                onClick={handleMenuItemClick}
              >
                {section}
              </ScrollLink>
            </li>
          ))}
        </NavItems>
        <ButtonContainer>
          <GitHubButton href='https://www.github.com/Heena-Kapoor' target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            {sections.map(section => (
              <li key={section} style={{
                listStyleType: 'none',
                padding: '10px 0',
                margin: 0,
                width: '100%',
              }}>
                <ScrollLink
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={100}
                  offset={10}
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </ScrollLink>
              </li>
            ))}
            <GitHubButton href="https://www.github.com/Heena-Kapoor" target="_blank">
              GitHub Profile
            </GitHubButton>

          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
