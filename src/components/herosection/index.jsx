import React from 'react';
import profile_pic from '/img/img.png';
import { 
    HeroContainer, 
    HeroBg, 
    HeroLeftContainer, 
    Img, 
    HeroRightContainer, 
    HeroInnerContainer, 
    TextLoop, 
    Title, 
    Span, 
    SubTitle,
    ResumeButton 
} from './HeroStyle';
import Typewriter from 'typewriter-effect';
import HeroBgAnimation  from '../herobgAnimation'

const HeroSection = ({ heroData }) => {
    return (
        <section id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation/>
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am <br /> Heena Kapoor </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: "Front End Developer" || [],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>Front-End Developer with 1+ years of experience in developing responsive and user-focused web applications using HTML5, CSS3, JavaScript (ES6+), and TypeScript. Proficient in UI libraries and frameworks such as React.js, Next.js, Tailwind CSS, Bootstrap, and Material UI. Experienced in translating Figma designs into clean, maintainable code with strong attention to performance and responsiveness. Skilled in RESTful API integration, version control with Git, and ensuring cross-browser and mobile-first compatibility. Detail-oriented with strong problem-solving skills and a passion for delivering high-quality user experiences.</SubTitle>
                    </HeroLeftContainer>

                    <HeroRightContainer>
                        <Img src={profile_pic} alt={`Heena Kapoor Profile Picture`}/>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </section>
    );
};

export default HeroSection;
