import { useState, type ReactElement } from "react";

import GithubIcon from "../components/icons/GithubIcon";
import MailIcon from "../components/icons/MailIcon";
import RippleHeading from "../components/RippleHeading";

interface HeaderProps {
    onReachOut: () => void;
}

export default function Header({ onReachOut }: HeaderProps): ReactElement {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const hoverColors: string[] = ["#6BE4DF", "#767EE1", "#F75F66", "#F69DC8"];

    function getRandomColor(): string {
        return hoverColors[Math.floor(Math.random() * hoverColors.length)];
    }

    function handleLinkOnMouseEnter(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.currentTarget.style.color = getRandomColor();
    }
    function handleLinkOnMouseLeave(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.currentTarget.style.color = "#E6EAF0";
    }
    function handleHeaderIconsOnMouseEnter(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.currentTarget.style.backgroundColor = getRandomColor();
    }
    function handleHeaderIconsOnMouseLeave(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.currentTarget.style.backgroundColor = "rgba(230, 234, 240, 0.2)";
    }

    function handleNavClose(): void {
        setIsNavOpen(false);
    }

    return (
        <>
            <header className="header">
                <nav className="header-side">
                    <RippleHeading />
                    <ul className="nav-links desktop-nav">
                        <li className="nav-link">
                            <a href="#home"
                                onMouseEnter={handleLinkOnMouseEnter}
                                onMouseLeave={handleLinkOnMouseLeave}
                            >Home</a>
                        </li>
                        <li className="nav-link">
                            <a href="#projects"
                                onMouseEnter={handleLinkOnMouseEnter}
                                onMouseLeave={handleLinkOnMouseLeave}
                            >Projects</a>
                        </li>
                        <li className="nav-link">
                            <a href="#about-me"
                                onMouseEnter={handleLinkOnMouseEnter}
                                onMouseLeave={handleLinkOnMouseLeave}
                            >About Me</a>
                        </li>
                    </ul>
                </nav>

                <div className="header-side icons">
                    <a
                        href="https://github.com/JosueOF1130"
                        target="_blank" rel="noopener noreferrer"
                        onMouseEnter={handleHeaderIconsOnMouseEnter}
                        onMouseLeave={handleHeaderIconsOnMouseLeave}
                        className="icon-link fill"
                    >
                        <GithubIcon />
                    </a>
                    <a
                        onClick={onReachOut}
                        onMouseEnter={handleHeaderIconsOnMouseEnter}
                        onMouseLeave={handleHeaderIconsOnMouseLeave}
                        className="icon-link"
                    >
                        <MailIcon />
                    </a>

                    <button
                        className={`hamburger ${isNavOpen ? "is-open" : ""}`}
                        onClick={() => setIsNavOpen(prev => !prev)}
                        aria-label="Toggle navigation"
                        aria-expanded={isNavOpen}
                    >
                        <span className="ham-bar" />
                        <span className="ham-bar" />
                        <span className="ham-bar" />
                    </button>
                </div>
            </header>

            <div className={`mobile-drawer ${isNavOpen ? "is-open" : ""}`}>
                <ul className="mobile-nav-links">
                    <li><a href="#home" onClick={handleNavClose}>Home</a></li>
                    <li><a href="#projects" onClick={handleNavClose}>Projects</a></li>
                    <li><a href="#about-me" onClick={handleNavClose}>About Me</a></li>
                    <li><a  

                        href="https://github.com/JosueOF1130"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleNavClose}
                    >
                        GitHub
                    </a>
                    </li>
                    <li>
                        <button
                            className="mobile-nav-reachout"
                            onClick={() => { handleNavClose(); onReachOut(); }}
                        >
                            Reach out
                        </button>
                    </li>
                </ul>
            </div >
        </>
    );
}