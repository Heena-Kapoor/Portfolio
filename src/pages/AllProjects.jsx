import { Suspense, lazy, useEffect, useState } from 'react';
import Header from '../components/header/Header.jsx';
import styled from 'styled-components';
import Footer from '../components/footer/index.jsx';

// Lazy load Projects component
const Projects = lazy(() => import('../components/projects'));

const ProjectsSection = styled.div`
  padding-top: 80px;
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 60.83%);
  min-height: 100vh;
`;

function AllProjects() {
    const [openModal, setOpenModal] = useState({
        state: false,
        data: null,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header Title="Projects Page" />

            <ProjectsSection>
                <Suspense fallback={<div>Loading projects...</div>}>
                    <Projects
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        defaultfilter="all"
                        projectFilters={['all', 'Web', 'Deep Learning', 'Machine Learning']}
                        view={false}
                        ShowTitle={null}
                        IntroText={1}
                    />
                </Suspense>

                <Footer links={["About", "Skills", "Experience", "Projects", "Education"]} />
            </ProjectsSection>
        </>
    );
}

export default AllProjects;