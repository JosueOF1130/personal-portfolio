import ReactLogo from "../assets/logos/react-logo.svg?react"
import HTMLLogo from "../assets/logos/html-svgrepo-com.svg?react";
import CSSLogo from "../assets/logos/css-svgrepo-com.svg?react";
import ViteLogo from "../assets/logos/vite-svgrepo-com.svg?react";
import NodeLogo from "../assets/logos/node-16-svgrepo-com.svg?react";
import JSLogo from "../assets/logos/js-svgrepo-com.svg?react";
import TSLogo from "../assets/logos/typescript-16-svgrepo-com.svg?react";
import ExpoLogo from "../assets/logos/expo-icon-svgrepo-com.svg?react";
import FirebaseLogo from "../assets/logos/firebase-svgrepo-com.svg?react"
export default function Carousel() {
    return (
        <div className="carousel">
            <div className="cards">
                <div className="card">
                    <HTMLLogo className="card-logo" />
                    <span>HTML</span>
                </div>
                <div className="card">
                    <FirebaseLogo className="card-logo" />
                    <span>Firebase</span>
                </div>
                <div className="card">
                    <JSLogo className="card-logo" />
                    <span>JavaScript</span>
                </div>
                <div className="card">
                    <ExpoLogo className="card-logo" />
                    <span>Expo</span>
                </div>
                <div className="card">
                    <ReactLogo className="card-logo" />
                    <span>React</span>
                </div>
                <div className="card">
                    <ViteLogo className="card-logo" />
                    <span>Vite</span>
                </div>
                <div className="card">
                    <TSLogo className="card-logo" />
                    <span>TypeScript</span>
                </div>
                <div className="card">
                    <CSSLogo className="card-logo" />
                    <span>CSS</span>
                </div>
                <div className="card">
                    <NodeLogo className="card-logo" />
                    <span>Node</span>
                </div>

            </div>
            <div className="cards">
                <div className="card">
                    <HTMLLogo className="card-logo" />
                    <span>HTML</span>
                </div>
                <div className="card">
                    <FirebaseLogo className="card-logo" />
                    <span>Firebase</span>
                </div>
                <div className="card">
                    <JSLogo className="card-logo" />
                    <span>JavaScript</span>
                </div>
                <div className="card">
                    <ExpoLogo className="card-logo" />
                    <span>Expo</span>
                </div>
                <div className="card">
                    <ReactLogo className="card-logo" />
                    <span>React</span>
                </div>
                <div className="card">
                    <ViteLogo className="card-logo" />
                    <span>Vite</span>
                </div>
                <div className="card">
                    <TSLogo className="card-logo" />
                    <span>TypeScript</span>
                </div>
                <div className="card">
                    <CSSLogo className="card-logo" />
                    <span>CSS</span>
                </div>
                <div className="card">
                    <NodeLogo className="card-logo" />
                    <span>Node</span>
                </div>

            </div>
        </div>
    )
}