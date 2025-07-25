import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: start;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin: 8px 6px 0px 6px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 8px 6px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-top: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 8px 6px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + '20'};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 12px 6px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 400px) {
    width: 150px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${theme.bg + '99'};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + '99'};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.data;

  return (
    <Modal
      open={openModal?.state || false}
      onClose={() => setOpenModal({ state: false, data: null })}
      aria-labelledby="project-title"
      aria-describedby="project-description"
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              cursor: 'pointer',
            }}
            onClick={() => setOpenModal({ state: false, data: null })}
          />

          {project?.image && (
            <Image src={project.image} alt={`Project: ${project.title}`} />
          )}

          <Title id="project-title">{project?.title}</Title>
          <Date>{project?.date}</Date>

          {Array.isArray(project?.tags) && (
            <Tags>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          )}

          <Desc id="project-description">{project?.description}</Desc>

          {Array.isArray(project?.member) && project.member.length > 0 && (
            <>
              <Label>Team</Label>
              <Members>
                {project.member.map((member) => (
                  <Member key={member.name}>
                    <MemberImage src={member.img} alt={member.name} />
                    <MemberName>{member.name}</MemberName>
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                      >
                        <GitHub />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                      >
                        <LinkedIn />
                      </a>
                    )}
                  </Member>
                ))}
              </Members>
            </>
          )}

          <ButtonGroup>
            {project?.github && (
              <Button dull href={project.github} target="_blank" rel="noopener noreferrer">
                View Code
              </Button>
            )}
            {project?.webapp && (
              <Button href={project.webapp} target="_blank" rel="noopener noreferrer">
                View Live
              </Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;