import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../cards/ExperienceCard';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 40px; // reduced from 60px
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 20px 0 0; // adjusted from 5px
  gap: 8px; // increased from 2px for better breathing space
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 4px; // fixed !important typo
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 14px; // slightly increased
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px; // reduced from 12px
  @media (max-width: 400px) {
    align-items: flex-end;
  }
`;

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const manualData = [
      {
        id: 1,
        role: 'Frontend Developer',
        company: 'TechPlek Technologies',
        date: 'Jun 2024 - Present',
        img: '/img/TechplekLogo.jpeg',
        link: 'https://www.techplek.com/',
        desc: 'Developed and maintained scalable, SEO-friendly web applications using React, Next.js, Redux, and TypeScript. Built and optimized 50+ reusable, responsive UI components with a strong focus on accessibility and cross-browser compatibility. Collaborated closely with backend and SEO teams to ensure seamless API integration and optimal search engine visibility. Led a team of interns, providing technical guidance and enforcing best practices in front-end architecture, code quality, and user interface consistency.',
        skills: ['React', 'Next.js', 'Redux', 'TypeScript', 'Axios', 'Responsive Design', 'SEO'],
      },
      {
        id: 2,
        role: 'Developer Intern',
        company: 'TechPlek Technologies',
        date: 'Nov 2023 - May 2024',
        img: '/img/TechplekLogo.jpeg',
        link: 'https://www.techplek.com/',
        desc: 'Collaborated with the front-end team to develop and refine user-facing features using React and JavaScript. Contributed to UI enhancements, bug fixing, and performance tuning for live web applications. Participated in daily standups and code reviews, gaining practical exposure to development workflows. Assisted in integrating REST APIs and ensured responsive design compatibility across devices. Gained proficiency in modern development tools and component-based architecture.',
        skills: ['React', 'JavaScript', 'CSS', 'REST APIs', 'Agile', 'Responsive Design'],
      },
      {
        id: 3,
        role: 'Social Entrepreneur (Intern)',
        company: 'Hamari Pahchan',
        date: 'Aug 2022 - Sep 2022',
        img: '/img/hamaripahchanlogo.jpeg',
        link: 'https://hamaripahchan.org',
        desc: 'Worked on social awareness initiatives, contributing to campaigns focused on education, health, and women empowerment. Designed digital outreach content and participated in both online and offline community engagement efforts. Collaborated with team members to promote ongoing projects and extend the organization’s digital presence through content writing and social media storytelling. Strengthened communication and leadership skills by interacting with diverse audiences and stakeholders.',
        skills: ['Communication', 'Public Speaking', 'Content Writing', 'Social Media', 'Community Engagement'],
      }
    ];

    setExperiences(manualData);
  }, []);

  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          Developer experience supported by involvement in team-based initiatives and real-world project execution.
        </Desc>
        <TimelineSection>
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} aria-label={`Experience item ${index + 1}`}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index < experiences.length - 1 && (
                  <TimelineConnector style={{ background: '#854CE6' }} />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default ExperienceTimeline;
