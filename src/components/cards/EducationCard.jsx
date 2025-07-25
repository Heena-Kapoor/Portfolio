import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.p`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_primary + 99};
  margin: 4px 0 0;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.article`
  width: 650px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease-in-out;
  border: 0.1px solid #854CE6;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Date = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Grade = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card aria-labelledby={`education-card-${education.id}`} role="article" tabIndex="0">
      <Top>
        <Image 
          src={education.img} 
          alt={`${education.school} - Heena Kapoor`} 
        />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade><b>Grade: </b>{education.grade}</Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;