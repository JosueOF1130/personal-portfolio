import Accordion from "../Accordion";
import ReactIcon from "../icons/ReactIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import TechStackPill from "../TechStackPill";

export default function BayCoverTech() {
    return (
        <>
            <p className="muted"><strong>A modern redesign for a Bay Area automatic pool cover specialist.</strong></p>

            <section className="problem">
                <h1>The Problem</h1>
                <div className="answer-block">
                    <p>
                        Bay Covertech is a legitimate, experienced pool cover business serving the Bay Area — but their existing website didn't reflect that. Built on a Squarespace template with minimal customization, the site felt generic and outdated, making it difficult to stand out in a competitive local service market.
                        <br />
                        <br />
                        The layout lacked visual hierarchy, the branding was inconsistent, and the overall presentation didn't build the kind of trust a homeowner needs before inviting a contractor onto their property. A business this specialized deserved a web presence that matched the quality of their work.
                    </p>
                </div>
            </section>

            <section className="solution">
                <h1>The Solution</h1>
                <div className="answer-block">
                    <p>
                        The redesign focuses on giving Bay Covertech a clean, professional identity that communicates reliability and expertise at a glance. Built from scratch with React and TypeScript, the new site moves away from the template-bound limitations of Squarespace and into a fully custom layout.
                        <br />
                        <br />
                        The design prioritizes clarity — organized service pages, a clear call to action, and a visual style that feels modern without being overdone. Every section was planned in close collaboration with the business owner to make sure the content and structure accurately reflected how they work and who they serve.
                    </p>
                </div>
            </section>

            <section className="key-features">
                <h1>Key Features</h1>

                <Accordion title="Services Overview">
                    <p className="muted">
                        Dedicated sections for each core offering — installation, repair, maintenance, and cleaning — so visitors can quickly find what they need.
                    </p>
                </Accordion>

                <Accordion title="Project Portfolio">
                    <p className="muted">
                        A gallery showcasing completed jobs across the Bay Area, giving potential customers a visual sense of the quality and range of work Bay Covertech delivers.
                    </p>
                </Accordion>

                <Accordion title="Contact & Quote Flow">
                    <p className="muted">
                        A streamlined contact section that makes it easy for homeowners to reach out and request a quote without friction.
                    </p>
                </Accordion>

                <Accordion title="Responsive Design">
                    <p className="muted">
                        Fully responsive layout that works across desktop, tablet, and mobile — important for local service customers browsing on their phones.
                    </p>
                </Accordion>
            </section>

            <section className="tech-stack">
                <h1>Tech Stack</h1>
                <div className="container">
                    <TechStackPill title="React">
                        <ReactIcon />
                    </TechStackPill>

                    <TechStackPill title="TypeScript">
                        <TypescriptIcon />
                    </TechStackPill>
                </div>
            </section>

            <section className="decisions">
                <h1>Design & UX Decisions</h1>
                <div className="answer-block">
                    <p>
                        The existing site relied heavily on keyword-stuffed image names and a cluttered layout that prioritized SEO over user experience. For the redesign, the focus shifted to building trust with the visitor first — clean typography, consistent spacing, and a clear visual hierarchy that guides the eye without overwhelming it.
                        <br />
                        <br />
                        Color and imagery choices were kept professional and understated, avoiding the loud, template-default look of the original. The goal was a site that feels like it was built specifically for this business, not assembled from a library of generic components.
                        <br />
                        <br />
                        Throughout the project, decisions were made collaboratively with the business owner to ensure the final product felt authentic to how Bay Covertech operates and communicates with its customers.
                    </p>
                </div>
            </section>
        </>
    );
}
