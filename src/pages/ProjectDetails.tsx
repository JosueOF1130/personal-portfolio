
// import { useParams, Link } from "react-router-dom";

import "../styles/ProjectDetails.css"
// import Yarnification from "../components/project details/Yarnification";
// import Flicksy from "../components/project details/Flicksy";
// import InvoiceCreator from "../components/project details/InvoiceCreator";



// export default function ProjectDetails() {
//     const { slug } = useParams();

//     return (
//         <main className="project-details">
//             <Link to="/" className="backlink">← Back</Link>

//             <h1>{slug}</h1>

//             {slug === "Yarnification" && <Yarnification />}

//             {slug === "Flicksy" && <Flicksy />}

//             {slug === "Cleaning Services Invoice Creator" && <InvoiceCreator/>}
//         </main>
//     );
// }

import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import GithubIcon from "../components/icons/GithubIcon";
import TechStackPill from "../components/TechStackPill";



import ExpoIcon from "../components/icons/ExpoIcon";
import FirebaseIcon from "../components/icons/FirebaseIcon";
import OpenaiIcon from "../components/icons/OpenaiIcon";
import ReactIcon from "../components/icons/ReactIcon";
import TMDBIcon from "../components/icons/TMDBIcon";
import TypescriptIcon from "../components/icons/TypescriptIcon";
import LockIcon from "../components/icons/LockIcon";
import LiveIcon from "../components/icons/LiveIcon";
import Accordion from "../components/Accordion";
import CSSIcon from "../components/icons/CSSIcon";

const iconMap: Record<string, React.ReactNode> = {
    "React Native": <ReactIcon />,
    "React": <ReactIcon />,
    "TypeScript": <TypescriptIcon />,
    "Expo": <ExpoIcon />,
    "Firebase": <FirebaseIcon />,
    "The Movie Database API": <TMDBIcon />,
    "OpenAi API": <OpenaiIcon />,
    "CSS": <CSSIcon />,
};

export default function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <main className="project-details not-found">
                <Link to="/" className="backlink">← Back</Link>
                <p>Project not found.</p>
            </main>
        );
    }

    return (
        // your JSX here

        <main className="project-details">
            <Link to="/" className="backlink">← Back</Link>
            <div className="detail-hero">
                <div className="detail-hero-text">
                    <div className="detail-title-row">
                        <h1 className="title">{project.title}</h1>
                        {project.isPrivate && (
                            <span className="private-badge-lg"> <LockIcon /> Private / Client Project</span>
                        )}
                    </div>
                    <p className="detail-description">{project.description}</p>
                </div>
                <div className="detail-links">
                    {
                        project.githubUrl && (
                            < a href={project.githubUrl} target="_blamk" className="detail-link github">
                                <GithubIcon />
                                <span>View on GitHub</span>
                            </a>
                        )
                    }
                    {
                        project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" className="detail-link live">
                                <LiveIcon /> <span>Live Preview</span>
                            </a>
                        )
                    }
                </div>
                <div className="tech-stack">
                    {project.techStack.map((tech) => (
                        <TechStackPill key={tech} title={tech}>
                            {iconMap[tech] ?? null}
                        </TechStackPill>
                    ))}
                </div>

                {
                    project.image && (
                        <div className="detail-screenshot">
                            <div className="frame">
                                <div className="bar">
                                    <span className="terminal-dot red" />
                                    <span className="terminal-dot yellow" />
                                    <span className="terminal-dot green" />
                                </div>
                                <img src={project.image} alt={`${project.title} screenshot`} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="detail-sections">
                <section className="section">
                    <h2 className="label">Problem</h2>
                    <div className="answer-block">
                        <p>{project.problem}</p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="label">Solution</h2>
                    <div className="answer-block">
                        <p>{project.solution}</p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="label">Key Features</h2>
                    {project.keyFeatures.map((f) => (
                        <Accordion key={f.title} title={f.title}>
                            <p className="muted">{f.description}</p>
                        </Accordion>
                    ))}
                </section>

                <section className="section">
                    <h2 className="label">Tech Stack</h2>
                    <div className="tech-stack-grid">
                        {project.techStack.map((tech) => (
                            <TechStackPill key={tech} title={tech}>
                                {iconMap[tech] ?? null}
                            </TechStackPill>
                        ))}
                    </div>
                </section>

                <section className="section">
                    <h2 className="label">Design Decisions</h2>
                    <div className="answer-block">
                        <p>{project.designDecisions}</p>
                    </div>
                </section>
            </div>

        </main >
    );
}