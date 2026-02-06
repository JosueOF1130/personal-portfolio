import type { ReactElement } from "react";
import Accordion from "../Accordion";
import TechStackPill from "../TechStackPill";
import TypescriptIcon from "../icons/TypescriptIcon";
import ReactIcon from "../icons/ReactIcon";
import FirebaseIcon from "../icons/FirebaseIcon";
import CSSIcon from "../icons/CSSIcon";

export default function InvoiceCreator(): ReactElement {
    return (
        <>
            <p className="muted"><strong>Simple invoice tracking for cleaning professionals</strong></p>


            <section className="problem">
                <h1>The Problem</h1>
                <div className="answer-block">
                    <p>
                        A family friend was manually creating invoices for their mother's cleaning business using Word documents and generic invoice templates. Each invoice had to be edited from scratch, which was time-consuming, repetitive, and easy to get wrong. What should have been a quick task became a frustrating, manual process.
                        <br />
                        <br />
                        The goal of this project was to create a faster, more automated way to generate invoices tailored specifically to the services offered, removing the need to repeatedly edit documents or reuse templates.
                    </p>
                </div>
            </section>


            <section className="solution">
                <h1>The Solution</h1>
                <div className="answer-block">
                    <p>
                        This React application automates invoice creation for a small cleaning business. The app provides pre-defined services, automatically calculates totals, and tracks invoice status. With a single login, the user can quickly generate invoices, mark them as paid, and see which invoices remain unpaid for over two weeks — all without manually editing templates or documents.
                        <br />
                        <br />
                        This reduces repetitive work, speeds up invoice creation, and gives the user clear visibility over their billing.
                    </p>
                </div>
            </section>



            <section className="key-features">
                <h1>Key Features</h1>

                <Accordion title="Quick Invoice Creation">
                    <p className="muted">
                        Generate invoices in seconds using pre-defined services and automated calculations.
                        <br />
                        No need to manually edit templates.
                    </p>
                </Accordion>

                <Accordion title="Invoice Management">
                    <p className="muted">
                        View all invoices with clear status indicators: Sent, Paid, or Overdue, so you can easily track payments.
                    </p>
                </Accordion>

                <Accordion title="PDF Export">
                    <p className="muted">
                        Download invoices as PDF files in order to send to clients
                    </p>
                </Accordion>

                <Accordion title="Overdue Tracking">
                    <p className="muted">
                        Invoices that remain unpaid for more than two weeks are automatically flagged to help the user follow up quickly.
                    </p>
                </Accordion>

                <Accordion title="Optional Enhancements">
                    <ul>
                        <li>
                            <p className="muted">
                                Preview invoices as PDF inside the app
                            </p>
                        </li>
                        <li>
                            <p className="muted">
                                Search / Filter by service or location
                            </p>
                        </li>
                        <li>
                            <p className="muted">
                                Switch between Dark / Light mode
                            </p>
                        </li>
                    </ul>
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

                    <TechStackPill title="Firebase">
                        <FirebaseIcon />
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
            CleanBill was designed to be simple and approachable for users with little to no computer experience. The interface prioritizes clarity and ease of use, allowing the client herself to create and send invoices independently, without needing assistance from others.
            <br />
            <br />
            The visual direction focuses on functionality and readability rather than decorative elements. Clear status indicators and minimal layouts ensure users can easily see which invoices are sent, paid, or overdue, reducing cognitive load and making management effortless.
            <br />
            <br />
            A minimal design approach was chosen to streamline the workflow. Pre-defined services, automatic calculations, and PDF previews let users complete tasks quickly, cutting out unnecessary steps and enabling them to handle invoicing directly and efficiently.
        </p>
    </div>
</section>


        </>
    )
}