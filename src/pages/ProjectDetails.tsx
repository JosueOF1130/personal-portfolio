import "../styles/ProjectDetails.css"
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/ProjectDetails.css"
import Flicksy from "../components/project details/Flicksy";
import InvoiceCreator from "../components/project details/InvoiceCreator";
import PremierConstruction from "../components/project details/PremierConstruction";
import BayCoverTech from "../components/project details/BayCoverTech";



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

        <main className="project-details">
            <Link to="/" className="backlink">← Back</Link>

            <h1>{slug}</h1>

            {slug === "Flicksy" && <Flicksy />}

            {slug === "Cleaning Services Invoice Creator" && <InvoiceCreator />}

            {slug === "Premier Construction" && <PremierConstruction />}

            {slug === "BayCoverTech" && <BayCoverTech />}
        </main>
    );
}
