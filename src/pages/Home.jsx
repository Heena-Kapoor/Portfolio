import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import Skills from "../components/skills";
import Experience from '../components/experience';
import styled from "styled-components";
import SkillsData from "../data/SkillsData";
import Projects from "../components/projects";
import { Suspense, useEffect } from "react";
import EducationTimeline from "../components/education";
import Contact from "../components/contact";

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Home = ({ openModal, setOpenModal }) => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <Navbar sections={['About', 'Skills', 'Experience', 'Projects', 'Education']} />
      <HeroSection />
      <Wrapper>
        <Skills skillsData={SkillsData} />
        <Experience />
      </Wrapper>

      <Suspense>
        <Projects
          openModal={openModal}
          setOpenModal={setOpenModal}
          defaultfilter="top"
          AllCard={1}
          projectFilters={null}
          ShowTitle={true}
          IntroText={true}
          view={false}
        />
      </Suspense>

      <Wrapper>
        <EducationTimeline />
        <Contact />
      </Wrapper>
      <Footer links={["About", "Skills", "Experience", "Projects", "Education"]} />
    </>
  );
};

export default Home;
