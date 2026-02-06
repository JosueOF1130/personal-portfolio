import Accordion from "../Accordion";
import ExpoIcon from "../icons/ExpoIcon";
import FirebaseIcon from "../icons/FirebaseIcon";
import OpenaiIcon from "../icons/OpenaiIcon";
import ReactIcon from "../icons/ReactIcon";
import TMDBIcon from "../icons/TMDBIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import TechStackPill from "../TechStackPill";

export default function Flicksy() {
    return (
        <>
            <p className="muted"><strong>For indecisive movie lovers who never know what to watch next.</strong></p>

            <section className="problem">
                <h1>The Problem</h1>
                <div className="answer-block">
                    <p>
                        Choosing a movie has become increasingly frustrating. Movie lovers often have to jump between multiple streaming apps, each with different libraries and recommendations. This process is even more annoying on slower TVs, where opening and closing apps takes time and breaks the experience.
                        <br/>
                        <br/>
                        Streaming platforms also cater to specific audiences, which means no single service offers everything. Even after finding a movie that looks interesting, users often discover it isn't available on any of their subscriptions—or worse, they spend all that time browsing and still don't find anything to watch at all.
                    </p>
                </div>
            </section>

            <section className="solution">
                <h1>The Solution</h1>
                <div className="answer-block">
                    <p>
                        Flicksy simplifies the movie selection process by giving users access to a large, centralized movie database powered by <strong>TMDb</strong>. Instead of endlessly scrolling through multiple streaming apps, users can quickly search for movies and see which platforms they are available on, saving time and frustration.
                        <br />
                        <br />
                        To help indecisive viewers find movies they'll actually enjoy, Flicksy includes an AI recommendation feature. Users can indicate the movies they like, select a preferred genre, and the AI suggests personalized recommendations tailored to their tastes—so choices are smarter, not just random.
                        <br />
                        <br />
                        Flicksy also offers account management features, allowing users to log in and out, save movies, and search efficiently. This makes it easy to track favorites and return to them later, creating a more organized and enjoyable movie discovery experience.
                    </p>
                </div>
            </section>

            <section className="key-features">
                <h1>Key Features</h1>

                <Accordion title="Centralized Movie Database">
                    <p className="muted">
                        Search from a huge collection of movies powered by TMDb and quickly see which streaming platforms have them available.
                    </p>
                </Accordion>

                <Accordion title="AI-Powered Recommendations">
                    <p className="muted">
                        Get personalized movie suggestions based on your favorite films and preferred genres, so you can discover new movies without the guesswork.
                    </p>
                </Accordion>

                <Accordion title="Search & Discovery">
                    <p className="muted">
                        Quickly find movies by title or filter by genre, making browsing fast and effortless.
                    </p>
                </Accordion>

                <Accordion title="Account Management">
                    <p className="muted">
                        Log in, log out, save movies, and maintain your personal list for easy access to favorites.
                    </p>
                </Accordion>
            </section>



            <section className="tech-stack">
                <h1>Tech Stack</h1>

                <div className="container">
                    <TechStackPill title="React Native">
                        <ReactIcon />
                    </TechStackPill>

                    <TechStackPill title="TypeScript">
                        <TypescriptIcon />
                    </TechStackPill>


                    <TechStackPill title="Expo">
                        <ExpoIcon />
                    </TechStackPill>

                    <TechStackPill title="Firebase">
                        <FirebaseIcon />
                    </TechStackPill>

                    <TechStackPill title="The Movie Database API">
                        <TMDBIcon />
                    </TechStackPill>

                    <TechStackPill title="OpenAi API">
                        <OpenaiIcon />
                    </TechStackPill>

                </div>
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