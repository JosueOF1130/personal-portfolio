
import { useParams, Link } from "react-router-dom";

import "../styles/ProjectDetails.css"
import Flicksy from "../components/project details/Flicksy";
import InvoiceCreator from "../components/project details/InvoiceCreator";
import PremierConstruction from "../components/project details/PremierConstruction";



export default function ProjectDetails() {
    const { slug } = useParams();

    return (
        <main className="project-details">
            <Link to="/" className="backlink">← Back</Link>

            <h1>{slug}</h1>

            {slug === "Flicksy" && <Flicksy />}

            {slug === "Cleaning Services Invoice Creator" && <InvoiceCreator/>}

            {slug === "Premier Construction" && <PremierConstruction />}
        </main>
    );
}
