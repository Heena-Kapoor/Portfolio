import React, { useState, useMemo } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider
} from './ProjectsStyle';
import ProjectCards from '../cards/ProjectCards';

export const sampleProjects = [
  {
    id: 5,
    title: "TripBiller",
    image: "/img/TripBiller.PNG",
    description:
      "Led the front-end development of TripBiller, a SaaS-based billing and trip management platform tailored for cab providers, vendors, and drivers. Implemented scalable React architecture with Material UI and Redux for state management. Developed reusable components and integrated RESTful APIs using custom hooks. Translated Figma designs into responsive UI, optimized for performance and fast load times. Integrated role-based access control, advanced form validation, and real-time dashboard views to support seamless trip tracking, billing, and reporting.",
    tags: [
      "React.js",
      "Redux",
      "Material UI",
      "Custom Hooks",
      "Reusable Components",
      "Form Validation",
      "API Integration",
      "SaaS",
      "Responsive UI"
    ],
    category: "web",
    date: "Aug 2024",
    rank: 1,
    ontop: 1,
    github: "",
    member: [],
    link: "https://app.tripbiller.com/"
  },
  {
    id: 2,
    title: "Sewak Travels Cab Booking Platform",
    image: "/img/sewak.PNG",
    description:
      "Developed a user-centric cab booking platform for Sewak Travels featuring dynamic city-wise service pages, real-time location coverage, , featuring dynamic dashboards and mobile-optimized performance. Integrated SEO-friendly routing, smooth navigation, and responsive UI to enhance booking experience and visibility across search engines.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Dynamic Routing", "SEO", "Responsive Design"],
    category: "web",
    date: "Feb 2024",
    rank: 2,
    ontop: 1,
    github: "",
    member: [],
    link: "https://sewaktravels.com/"
  },
  {
    id: 3,
    title: "BDA Carriers",
    image: "/img/BDA.PNG",
    description:
      "Developed a professional logistics portal for BDA Carriers, featuring dynamic dashboards for blog and service sections. Created multiple SEO-optimized landing pages to enhance search visibility. The project was built using Vite for fast development and bundling, along with React and Material UI for scalable and responsive architecture.",
    tags: ["Vite", "React.js", "Material UI", "Responsive UI", "Routing", "SEO", "Dashboard"],
    category: "web",
    date: "Jan 2025",
    rank: 3,
    ontop: 1,
    github: "",
    member: [],
    link: "https://bdacarriers.com/"
  },
  {
    id: 4,
    title: "Vitavista",
    image: "/img/vitavista.PNG",
    description:
      "Built a dynamic, SEO-optimized healthcare website for Vitavista using Next.js. The platform features a fully responsive product showcase and an integrated admin dashboard to manage healthcare product listings. Leveraging dynamic routing and server-side rendering, the site ensures scalability. Designed product and homepage components to load content dynamically based on product metadata, with clean UI/UX using Styled Components. The dashboard allows content updates without code changes, ensuring maintainability and operational efficiency.",
    tags: ["Next.js", "React.js", "Styled Components", "Dashboard", "Dynamic Routing", "SSR", "SEO", "Responsive Design", "Accessibility"],
    category: "web",
    date: "Feb 2025",
    rank: 4,
    ontop: 0,
    github: "",
    member: [],
    link: "https://vitavista.techplek.website/"
  },
  {
    id: 1,
    title: "NECC Logistics",
    image: "/img/necc.PNG",
    description:
      "Designed and developed a professional corporate website for NECC Logistics, emphasizing seamless user experience, service visibility, and lead generation. The site showcases NECC's pan-India logistics, mining, warehousing, and transportation solutions through a modern, responsive UI with fast-loading performance.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "SEO"],
    category: "web",
    date: "Jan 2024",
    rank: 5,
    ontop: 0,
    github: "",
    member: [],
    link: "https://neccgroup.com/"
  }
];


export const sampleFilters = ['all', 'top', 'web'];


const Projects = ({ view }) => {
  const [toggle, setToggle] = useState('all');
  const [openModal, setOpenModal] = useState(false);

  const getUniqueProjects = (projects) => {
    const seen = new Set();
    return projects.filter(project => {
      const duplicate = seen.has(project.id);
      seen.add(project.id);
      return !duplicate;
    });
  };

  const filteredProjects = useMemo(() => {
    let projects;
    if (toggle === 'top') {
      projects = sampleProjects.filter(project => project.ontop === 1);
    } else if (toggle === 'all') {
      projects = sampleProjects;
    } else {
      projects = sampleProjects.filter(project => project.category === toggle);
    }

    const uniqueProjects = getUniqueProjects(projects);
    const sortedProjects = uniqueProjects.sort((a, b) => a.rank - b.rank);

    const groupedProjects = sortedProjects.reduce((acc, project) => {
      const rank = project.rank;
      if (!acc[rank]) {
        acc[rank] = [];
      }
      acc[rank].push(project);
      return acc;
    }, {});

    return Object.values(groupedProjects).flat();
  }, [toggle]);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have contributed to a diverse set of projects, ranging from responsive web applications to feature-rich user interfaces, with a strong focus on front-end development.
        </Desc>

        <ToggleButtonGroup>
          {sampleFilters.map(category => (
            <React.Fragment key={category}>
              <ToggleButton
                aria-label={`Filter projects by ${category}`}
                active={toggle === category}
                value={category}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </ToggleButton>
              <Divider />
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map(project => (
            <ProjectCards
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
