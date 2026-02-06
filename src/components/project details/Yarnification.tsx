import Accordion from "../Accordion";


export default function Yarnification() {
    return (
        <>
            <p className="muted"><strong>Plan yarn projects and calculate materials effortlessly.</strong></p>
            <section className="problem">
                <h1>The Problem</h1>
                <div className="answer-block">
                    <p>
                        Many crocheting enthusiasts struggle to calculate exactly how much yarn they need for a project. When shopping, they often have to switch between a calculator, yarn labels, and project requirements - doing conversions and math manually. This can be frustrating, especially for beginners or anyone who wants a faster, smoother planning process.
                    </p>
                </div>
            </section>
            <section className="solution">
                <h1>The Solution</h1>
                <div className="answer-block">
                    <p>
                        Yarnification was designed to remove the guesswork and friction from planning yarn projects. Instead of manually calculating measurements and switching between apps, Yarnification handles all yarn conversions and calculations automatically in one place.
                        <br />
                        <br />
                        The app allows users to quickly input their project and yarn details and instantly see how much yarn they need—making it especially useful when shopping in-store and needing an answer on the spot. To support repeat projects, users can also save their calculations as projects, update them later, and add notes such as how much yarn was actually used. This makes future planning faster and more accurate over time.
                        <br />
                        <br />

                        By centralizing calculations, conversions, and saved projects, Yarnification helps crafters spend less time doing math and more time creating—without the risk of running out of yarn or struggling to find the same yarn again later.
                    </p>
                </div>
            </section>

            <section className="key-features">
                <h1>Key Features</h1>

                <Accordion title="Yarn Calculation by Project & Yarn Type">
                    <p className="muted">Instantly calculates the required amount of yarn based on the selected project type and yarn weight, removing the need for manual conversions or guesswork.</p>
                </Accordion>

                <Accordion title="Project Management">
                    <p className="muted">Users can save projects for later reference, edit existing entries, or delete projects they no longer need—making it easy to reuse calculations for repeat projects.</p>
                </Accordion>
            </section>



            <section className="decisions">
                <h1>Design & UX Decisions </h1>
                <div className="answer-block">
                    <p>
                        Yarnification was designed to be approachable for crafters of all experience levels. The interface prioritizes clarity and ease of use, allowing users to navigate the app intuitively without needing prior technical knowledge.
                        <br />
                        <br />
                        The visual direction was inspired by the calming and relaxing nature of crocheting. Rather than using harsh whites or high-contrast themes, the app uses soft tones for both light and dark modes to create a cozy, comfortable experience that feels welcoming during longer planning sessions.
                        <br />
                        <br />
                        A minimal design approach was chosen to reduce visual clutter and cognitive load. By focusing only on essential information and actions, Yarnification helps users quickly find what they need—whether they are planning at home or making decisions in-store.
                    </p>
                </div>
            </section>
        </>
    )
}