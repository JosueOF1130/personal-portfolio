
import ".//App.css";
import LetterLogo from "./assets/logos/LetterLogoM.svg?react"
import GithubIcon from "./assets/icons/github-logo.svg?react"
import MailIcon from "./assets/icons/mail.svg?react";
import WebIcon from "./assets/icons/web-icon.svg?react";

import NameLogo from "./assets/logos/NameLogoL.svg?react"


import ReactLogo from "./assets/logos/react-logo.svg?react"
import HTMLLogo from "./assets/logos/html-svgrepo-com.svg?react";
import CSSLogo from "./assets/logos/css-svgrepo-com.svg?react";
import ViteLogo from "./assets/logos/vite-svgrepo-com.svg?react";
import NodeLogo from "./assets/logos/node-16-svgrepo-com.svg?react";
import JSLogo from "./assets/logos/js-svgrepo-com.svg?react";
import TSLogo from "./assets/logos/typescript-16-svgrepo-com.svg?react";
import ExpoLogo from "./assets/logos/expo-icon-svgrepo-com.svg?react";
import FirebaseLogo from "./assets/logos/firebase-svgrepo-com.svg?react"

export default function App() {
  return (
    <>
      <div className="header-container">
        <div className="header">
          {/* logo */}
          <div className="header-left">
            <LetterLogo className="letter-logo" />
            <ul className="nav-links">
              <li className="nav-link"><a href="#home">Home</a></li>
              <li className="nav-link"><a href="#projects">Projects</a></li>
              <li className="nav-link"><a href="#designs">Desgins</a></li>
              <li className="nav-link"><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="header-right">
            <a href="https://github.com/JosueOF1130" target="_blank" rel="noopener noreferrer"><GithubIcon className="gh-icon" /></a>
            <a href="mailto:josue.orofre@gmail.com" target="_blank"
  rel="noopener noreferrer"><MailIcon className="mail-icon" /></a>
          </div>
        </div>
      </div>
      


      <section id="home" className="section">
        <h1 className="top-tag tag">
          <WebIcon className="web-icon" />
          Web Developer
        </h1>
        <NameLogo className="name-logo" />

        <span className="bottom-tag tag">
          <MailIcon className="mail-tag-icon" />
          Reach out
        </span>
      </section>

      <section className="section" id="technologies">
        <h3>Technologies I work with:</h3>
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
      </section>

      <div id="projects" className="section">Projects Section</div>
      <div id="designs" className="section">Designs Section</div>
      <div id="about" className="section">About Section</div>

    </>
  );
}