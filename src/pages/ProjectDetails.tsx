
import { useParams, Link } from "react-router-dom";

import "../styles/ProjectDetails.css"
import Yarnification from "../components/project details/Yarnification";
import Flicksy from "../components/project details/Flicksy";



export default function ProjectDetails() {
    const { slug } = useParams();

    return (
        <main className="project-details">
            <Link to="/" className="backlink">← Back</Link>

            <h1>{slug}</h1>

            {slug === "Yarnification" && <Yarnification />}

            {slug === "Flicksy" && <Flicksy />}
        </main>
    );
}
