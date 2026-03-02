

import { useState, type ReactElement } from "react";
import { Link } from "react-router-dom";
import "../styles/FormModal.css"

import GithubIcon from "../components/icons/GithubIcon";
import MailIcon from "../components/icons/MailIcon";
import ArrowRight from "../components/icons/ArrowRight";
import FormModal from "../components/FormModal";
import RippleHeading from "../components/RippleHeading";
import AnimatedHeroTitle from "../components/AnimatedHeroTitle";
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
                    {/* <h1>Josue Orozco</h1> */}
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

                        <li className="card yarnification"
                            onMouseEnter={(e: React.MouseEvent<HTMLLIElement>) => handleProjectCardOnMouseEnter(e)}
                            onMouseLeave={(e: React.MouseEvent<HTMLLIElement>) => handleProjectCardOnMouseLeave(e)}
                        >
                            <Link to="/projects/Yarnification" className="project-link">
                                <div className="body">
                                    <div className="header">
                                        <h2>Yarnification</h2>
                                        <div className="tags">
                                            <p className="tag typescript sono">TypeScript</p>
                                            <p className="tag expo sono">React Native</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Plan yarn projects and calculate materials effortlessly.</p>
                                    </div>
                                    <div className="footer">
                                        <span>
                                            View project <ArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li className="card flicksy"
                            onMouseEnter={(e: React.MouseEvent<HTMLLIElement>) => handleProjectCardOnMouseEnter(e)}
                            onMouseLeave={(e: React.MouseEvent<HTMLLIElement>) => handleProjectCardOnMouseLeave(e)}
                        >
                            <Link to="/projects/Flicksy" className="project-link">
                                <div className="body">
                                    <div className="header">
                                        <h2>Flicksy</h2>
                                        <div className="tags">
                                            <p className="tag typescript sono">TypeScript</p>
                                            <p className="tag expo sono">React Native</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Discover curated films, manage your watchlist, and see where to watch.</p>
                                    </div>
                                    <div className="footer">
                                        <span>
                                            View project <ArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li className="card invoice"
                            onMouseEnter={(e: React.MouseEvent<HTMLLIElement>) => handleProjectCardOnMouseEnter(e)}
                            onMouseLeave={(e: React.MouseEvent<HTMLLIElement>) => handleProjectCardOnMouseLeave(e)}
                        >
                            <Link to="/projects/Cleaning Services Invoice Creator" className="project-link">
                                <div className="body">
                                    <div className="header">
                                        <h2>Invoice Creator</h2>
                                        <div className="tags">
                                            <p className="tag typescript sono">TypeScript</p>
                                            <p className="tag expo sono">React</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Simplifying invoicing for a cleaning service</p>
                                    </div>
                                    <div className="footer">
                                        <span>
                                            View project <ArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>

                    </ul>
                </section>

                <section className="about-me" id="about-me">
                    <h2>About Me</h2>
                    <div className="bar"></div>

                    <div className="info">
                        <RippleHeading ></RippleHeading>
                        <div className="content">
                            <img src="src\assets\images\MyPic.JPG" alt="Me" />
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
                    </div>

                </section>

                <FormModal open={isReachOutOpen} onClose={() => setIsReachOutOpen(false)}></FormModal>
            </main>



        </>
    );
}