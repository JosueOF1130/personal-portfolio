
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
import "../styles/ProjectDetails.css"
import Flicksy from "../components/project details/Flicksy";
import InvoiceCreator from "../components/project details/InvoiceCreator";
import PremierConstruction from "../components/project details/PremierConstruction";



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

            <h1>{slug}</h1>

            {slug === "Flicksy" && <Flicksy />}

            {slug === "Cleaning Services Invoice Creator" && <InvoiceCreator/>}

            {slug === "Premier Construction" && <PremierConstruction />}
        </main>
    );
}
