import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from '../cards/EducationCard';

const education = [
  {
    id: 1,
    school: "University of Delhi",
    degree: "Bachelor's Degree in Computer Science",
    date: "Nov 2020 - Jul 2023",
    grade: "8.72 CGPA",
    desc: "Gained a solid foundation in programming, data structures, and machine learning. Participated in a National Seminar on Artificial Intelligence and developed skills in HTML5, machine learning, and more.",
    img: "/img/DUlogo.jpeg"
  },
  {
    id: 2,
    school: "Kendriya Vidyalaya",
    degree: "Senior Secondary (CBSE - Science Stream)",
    date: "Apr 2019 - Mar 2020",
    grade: "92%",
    desc: "Studied Physics, Chemistry, Mathematics, and Computer Science. Served as CCA Vice Captain and School House Captain. Honed research and leadership skills through academic and extracurricular engagements.",
    img: "/img/kendriyavidyalayalogo.jpeg"
  }
];


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 30px; // reduced from 60px
  position: relative;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 20px 0 0; // reduced from 40px
  gap: 4px; // reduced from 12px

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 10px; // reduced from 20px
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 8px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px; // reduced from 12px

  @media (max-width: 660px) {
    align-items: flex-end;
  }
`;

const EducationTimeline = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My educational background reflects a journey of continuous learning, self-development, and growth.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={edu.id}>
                <TimelineContent sx={{ py: '4px', px: 2 }}>
                  <EducationCard education={edu} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index < education.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default EducationTimeline;
