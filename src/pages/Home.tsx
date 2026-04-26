

import { useState, type ReactElement } from "react";
import { Link } from "react-router-dom";
import "../styles/FormModal.css"

import GithubIcon from "../components/icons/GithubIcon";
import MailIcon from "../components/icons/MailIcon";
import ArrowRight from "../components/icons/ArrowRight";
import FormModal from "../components/FormModal";
import RippleHeading from "../components/RippleHeading";
import AnimatedHeroTitle from "../components/AnimatedHeroTitle";

import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";


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


    function handleLinkOnMouseEnter(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.currentTarget.style.color = getRandomColor();
    }

    function handleLinkOnMouseLeave(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.currentTarget.style.color = "#E6EAF0";
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

    function handleHeaderIconsOnMouseEnter(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.currentTarget.style.backgroundColor = getRandomColor();
    }
    function handleHeaderIconsOnMouseLeave(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.currentTarget.style.backgroundColor = "rgba(230, 234, 240, 0.2)";
    }


    return (
        <>
            <header className="header">
                <nav className="header-side">
                    <RippleHeading></RippleHeading>
                    <ul className="nav-links">
                        <li className="nav-link">
                            <a href="#home"
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkOnMouseEnter(e)}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkOnMouseLeave(e)}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#projects"
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkOnMouseEnter(e)}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkOnMouseLeave(e)}
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="header-side icons">
                    <a
                        href="https://github.com/JosueOF1130"
                        target="_blank" rel="noopener noreferrer"
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => handleHeaderIconsOnMouseEnter(e)}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => handleHeaderIconsOnMouseLeave(e)}
                        className="icon-link fill">

                        <GithubIcon />

                    </a>
                    <a
                        onClick={() => setIsReachOutOpen(true)}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => handleHeaderIconsOnMouseEnter(e)}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => handleHeaderIconsOnMouseLeave(e)}

                        className="icon-link">

                        <MailIcon />

                    </a>
                </div>
            </header>


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
                    <h2>Current projects</h2>
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

                <FormModal open={isReachOutOpen} onClose={() => setIsReachOutOpen(false)}></FormModal>
            </main>



        </>
    );
}