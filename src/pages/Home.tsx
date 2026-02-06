

import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/FormModal.css"

import GithubIcon from "../components/icons/GithubIcon";
import MailIcon from "../components/icons/MailIcon";
import ArrowRight from "../components/icons/ArrowRight";
import FormModal from "../components/FormModal";
export default function Home() {
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

    return (
        <>
            <header className="header">
                <nav className="header-side">
                    <h1>Josue Orozco</h1>
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
                    <a href="https://github.com/JosueOF1130" target="_blank" rel="noopener noreferrer" className="icon-link"><GithubIcon /></a>
                    <a onClick={() => setIsReachOutOpen(true)} className="icon-link"><MailIcon /></a>
                </div>
            </header>


            <main id="home">

                <div className="hero-section" >
                    <h2>Web Developer</h2>
                    <button className="reachout-btn" onClick={() => setIsReachOutOpen(true)}>
                        <MailIcon /> <h2>Reach out</h2>
                    </button>
                </div>


                <section className="current-projects" id="projects">
                    <h2>Current projects</h2>
                    <div className="bar"></div>

                    <ul className="project-cards">

                        <li className="card yarnification">
                            <Link to="/projects/Yarnification" className="project-link">
                                <div className="body">
                                    <div className="header">
                                        <h2>Yarnification</h2>
                                        <div className="tags">
                                            <p className="tag typescript sono">TypeScript</p>
                                            <p className="tag expo sono">React native</p>
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

                        <li className="card flicksy">
                            <Link to="/projects/Flicksy" className="project-link">
                                <div className="body">
                                    <div className="header">
                                        <h2>Flicksy</h2>
                                        <div className="tags">
                                            <p className="tag typescript sono">TypeScript</p>
                                            <p className="tag expo sono">React native</p>
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

                        <li className="card invoice">
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

                <FormModal open={isReachOutOpen} onClose={() => setIsReachOutOpen(false)}></FormModal>
            </main>



        </>
    );
}