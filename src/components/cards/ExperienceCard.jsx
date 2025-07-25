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
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
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
    width: 900px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 2px;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 12px;
        width: 300px;
    }
    @media only screen and (max-width: 575px) {
        width: 290px;
        padding: 12px 8px;
    }
    &:hover ${Document} {
        display: block;
    }
    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }
    border: 0.1px solid #306EE8;
`;

const Top = styled.header`
  width: 100%;
  display: flex;
  align-items: center; // Aligns image and text vertically
  gap: 10px;
`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px; // controls spacing between text elements
`;

const Role = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.2;
`;

const Company = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const Date = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;


const Skills = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: -10px;

  strong {
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const ExperienceCard = ({ experience }) => {
    return (
        <Card
            aria-labelledby={`experience-card-${experience.id}`}
            role="region"
            aria-label={`Experience at ${experience.company}`}
        >
            <Top>
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={experience.img}
                        alt={`${experience.company} Logo`}
                    />
                </a>
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc && <Span>{experience.desc}</Span>}
                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <strong>Skills:</strong>
                            <ItemWrapper>
                                {experience.skills.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>
        </Card>
    );
};

export default ExperienceCard;

