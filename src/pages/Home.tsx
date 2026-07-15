

import { useState, type ReactElement } from "react";
import "../styles/FormModal.css"

import MailIcon from "../components/icons/MailIcon";
import FormModal from "../components/FormModal";
import RippleHeading from "../components/RippleHeading";
import AnimatedHeroTitle from "../components/AnimatedHeroTitle";

import me from "../assets/images/MyPic.jpg";

import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import GithubIcon from "../components/icons/GithubIcon";


export default function Home(): ReactElement {
    const [isReachOutOpen, setIsReachOutOpen] = useState<boolean>(false);

    const hoverColors: string[] = [
        "#6BE4DF",
        "#767EE1",
        "#F75F66",
        "#F69DC8"
    ]

    function getRandomColor(): string {
        return hoverColors[Math.floor(Math.random() * hoverColors.length)]
    }



    function handleProjectCardOnMouseEnter(e: React.MouseEvent<HTMLLIElement>): void {
        e.currentTarget.style.backgroundColor = getRandomColor();
    }

    function handleProjectCardOnMouseLeave(e: React.MouseEvent<HTMLLIElement>): void {
        e.currentTarget.style.backgroundColor = "#0E0F12";
    }

    function handleReachoutButttonOnMouseEnter(e: React.MouseEvent<HTMLButtonElement>): void {
        e.currentTarget.style.backgroundColor = getRandomColor();
        e.currentTarget.style.color = "#0E0F12";
    }

    function handleReachoutButttonOnMouseLeave(e: React.MouseEvent<HTMLButtonElement>): void {
        e.currentTarget.style.backgroundColor = "#0E0F12";
        e.currentTarget.style.color = "#E6EAF0";
    }

    
    return (
        <>
            <Header onReachOut={() => setIsReachOutOpen(true)} />


            <main id="home">

                <div className="hero-section" >
                    <AnimatedHeroTitle></AnimatedHeroTitle>
                    <button className="reachout-btn"
                        onClick={() => setIsReachOutOpen(true)}
                        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => handleReachoutButttonOnMouseEnter(e)}
                        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => handleReachoutButttonOnMouseLeave(e)}
                    >
                        <MailIcon /> <h2>Reach out</h2>
                    </button>
                </div>


                <section className="current-projects" id="projects">
                    <h2 className="section-title">Current projects</h2>
                    <div className="bar"></div>

                    <ul className="project-cards">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onMouseEnter={handleProjectCardOnMouseEnter}
                                onMouseLeave={handleProjectCardOnMouseLeave}
                            />
                        ))}
                    </ul>
                </section>

                <section className="about-me" id="about-me">
                    <h2 className="section-title">About Me</h2>
                    <div className="bar"></div>

                    <div className="info">
                        <div className="side me">
                            <div className="img-wrapper">
                                <img src={me} alt="me" />
                            </div>
                            <div className="helpme">
                                <div className="green-light"></div>
                                <p className="sono">OPEN TO OPPORTUNITIES</p>
                            </div>
                            <div className="buttons">
                                <button
                                    onClick={() => window.open('https://github.com/JosueOF1130', '_blank')}
                                > <GithubIcon></GithubIcon><p>Github</p></button>
                                <button className="ghost"
                                    onClick={() => setIsReachOutOpen(true)}
                                ><MailIcon /> <p>Reach out</p></button>
                            </div>
                        </div>
                        <div className="side about">
                            <div className="header">
                                <RippleHeading></RippleHeading>
                                <p className="muted">Frontend Developer & UX Engineer</p>
                            </div>
                            <div className="body">
                                <p>
                                    I'm a frontend developer building thoughtful, user-centered web and mobile experiences — combining technical structure with design thinking.
                                    <br></br>
                                    <br></br>
                                    UX/UI intern at Bosmos, where I developed a deeper understanding of user research, visual hierarchy, and interaction design. I don't just write code — I design experiences that feel natural and intentional.
                                    <br></br>
                                    <br></br>
                                    Currently focused on strengthening frontend architecture and shipping production-ready apps with strong UX foundations.
                                </p>
                            </div>
                            <div className="footer">
                                <p className="sono muted">stack</p>
                                <div className="pills">
                                    <div className="pill">React</div>
                                    <div className="pill">React Native</div>
                                    <div className="pill">TypeScript</div>
                                    <div className="pill">Firebase</div>
                                    <div className="pill">Swift</div>
                                    <div className="pill">SwiftUI</div>
                                    <div className="pill">Expo</div>
                                    <div className="pill">Vite</div>
                                    <div className="pill">CSS</div>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* <div className="info">
                        <RippleHeading ></RippleHeading>
                        <div className="content">
                            <div className="img-wrapper">
                                <img src={me} alt="Me" />
                            </div>
                            <p>
                                I'm a frontend developer focused on building thoughtful, user-centered web and mobile experiences. I combine technical structure with design thinking to create applications that are both functional and intuitive.
                                <br />
                                <br />
                                During my UX/UI internship at Bosmos, I developed a deeper understanding of user research, visual hierarchy, and interaction design. That experience shaped the way I approach development today. I do not just write code. I design experiences that feel natural and intentional.
                                <br />
                                <br />
                                I primarily work with React, React Native, TypeScript, and Firebase, building scalable applications with clean architecture and reusable component systems. I enjoy refining the details, from state management to micro-interactions, because I believe great products are built in the small decisions.
                                <br />
                                <br />
                                I am currently focused on strengthening my frontend architecture skills and continuing to build production-ready applications with strong UX foundations.
                            </p>
                        </div>
                    </div> */}

                </section>

                <FormModal open={isReachOutOpen} onClose={() => setIsReachOutOpen(false)}></FormModal>
            </main>



        </>
    );
}