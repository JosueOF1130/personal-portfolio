import Accordion from "../Accordion";
import ReactIcon from "../icons/ReactIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
// import ViteIcon from "../icons/ViteIcon";
import CSSIcon from "../icons/CSSIcon";
import TechStackPill from "../TechStackPill";

export default function PremierConstruction() {
    return (
        <>
            <p className="muted"><strong>For a Bay Area contractor who needed a professional online presence that actually brings in calls.</strong></p>

            <section className="problem">
                <h1>The Problem</h1>
                <div className="answer-block">
                    <p>
                        M&L Premier Construction is a family owned general contracting business with over 25 years of experience in the Bay Area — but no website to show for it. Without an online presence, potential clients had no way to learn about their services, verify their credentials, or get in touch outside of word of mouth.
                        <br/>
                        <br/>
                        For a trades business, first impressions matter. Homeowners looking for a contractor will almost always search online before making a call. Without a website, M&L was invisible to that audience entirely — losing potential work to competitors with even a basic web presence.
                    </p>
                </div>
            </section>

            <section className="solution">
                <h1>The Solution</h1>
                <div className="answer-block">
                    <p>
                        A clean, fast, single-page landing site built to do one thing well — convert visitors into calls and quote requests. The site gives M&L Premier Construction a credible online presence that clearly communicates who they are, what they do, and how to reach them.
                        <br />
                        <br />
                        The design prioritizes trust signals throughout — licensing, insurance, years of experience, and a work guarantee are surfaced immediately so visitors feel confident before they ever pick up the phone. A persistent call-to-action in the nav ensures the phone number is always one tap away.
                        <br />
                        <br />
                        The site is fully responsive, loads fast, and is deployed on Netlify with a custom domain — making it easy to maintain and update as the business grows.
                    </p>
                </div>
            </section>

            <section className="key-features">
                <h1>Key Features</h1>

                <Accordion title="Floating Nav with Smart CTA">
                    <p className="muted">
                        A minimal floating navbar that becomes solid on scroll. The call-to-action button triggers a phone call on mobile and smooth scrolls to the contact form on desktop.
                    </p>
                </Accordion>

                <Accordion title="Parallax Hero Section">
                    <p className="muted">
                        A full viewport hero with a subtle parallax scroll effect on the background image, left-aligned content, and a 25+ years experience badge overlay.
                    </p>
                </Accordion>

                <Accordion title="Services Grid">
                    <p className="muted">
                        A responsive 4-column grid showcasing all 11 services with icons, titles, and descriptions. Cards lift on hover for a polished interactive feel.
                    </p>
                </Accordion>

                <Accordion title="Lightbox Gallery">
                    <p className="muted">
                        A 3-column photo grid where each card expands into a fullscreen lightbox on click — built to showcase completed project work once photos are provided.
                    </p>
                </Accordion>

                <Accordion title="Contact Form">
                    <p className="muted">
                        A lead generation form with fields for name, phone, email, service needed, preferred contact method, and message — ready to wire up to Netlify Forms on deploy.
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

                    <TechStackPill title="CSS">
                        <CSSIcon />
                    </TechStackPill>
                </div>
            </section>

            <section className="decisions">
                <h1>Design & UX Decisions</h1>
                <div className="answer-block">
                    <p>
                        The visual direction was driven by the client's existing brand colors — navy, green, and silver — which naturally lent themselves to a dark, professional aesthetic. Rather than fighting those colors, the design leans into them fully with a near-black base and the navy and green used as surface and accent layers respectively.
                        <br />
                        <br />
                        Typography was chosen to balance authority with readability. Bebas Neue brings bold, structural energy to headings — common in construction and trades branding for good reason. Inter handles body copy cleanly at any size, and DM Mono adds a subtle industrial precision to labels and metadata without feeling too technical.
                        <br />
                        <br />
                        Every layout decision was made with the target user in mind — a homeowner on their phone, looking for someone trustworthy to call. That meant keeping the phone number visible at all times, surfacing credentials early, and making the quote form impossible to miss. The goal was never to impress with complexity, but to make it effortless to take action.
                    </p>
                </div>
            </section>
        </>
    )
}