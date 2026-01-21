
import "./styles/App.css";
import LetterLogo from "./assets/logos/LetterLogoM.svg?react"
import GithubIcon from "./assets/icons/github-logo.svg?react"
import MailIcon from "./assets/icons/mail.svg?react";
import WebIcon from "./assets/icons/web-icon.svg?react";

import NameLogo from "./assets/logos/NameLogoL.svg?react"
import Carousel from "./components/Carousel";
import ArrowRightIcon from "./assets/icons/arrow-right.svg?react";
import DeviceIcon from "./assets/icons/laptop-smart-phone-svgrepo-com.svg?react";
import { useState } from "react";
import "./styles/FormModal.css"
import FormModal from "./components/FormModal";



export default function App() {

  const [isReachOutOpen, setIsReachOutOpen] = useState<boolean>(false);


  return (
    <>
      <div className="header-container">
        <header className="header">
          {/* logo */}
          <nav className="header-left">
            <LetterLogo className="letter-logo" />
            <ul className="nav-links">
              <li className="nav-link"><a href="#home">Home</a></li>
              <li className="nav-link"><a href="#projects">Projects</a></li>
              <li className="nav-link"><a href="#designs">Desgins</a></li>
              <li className="nav-link"><a href="#about">About</a></li>
            </ul>
          </nav>
          <div className="header-right">
            <a href="https://github.com/JosueOF1130" target="_blank" rel="noopener noreferrer"><GithubIcon className="gh-icon" /></a>
            <a onClick={() => setIsReachOutOpen(true)}><MailIcon className="mail-icon" /></a>
          </div>
        </header>
      </div>



      <main>
        <section id="home" className="section">
          <h1 className="top-tag tag">
            <WebIcon className="web-icon" />
            Web Developer
          </h1>
          <NameLogo className="name-logo" />

          <span className="bottom-tag tag" onClick={() => setIsReachOutOpen(true)}>
            <MailIcon className="mail-tag-icon" />
            Reach out
          </span>
        </section>

        <section className="section" id="technologies">
          <h3>Technologies I work with:</h3>
          <Carousel />
        </section>

        <section id="projects" className="section">

          <h4>Personal projects</h4>
          <h2>Projects I'm currently working on:</h2>


          <ul className="project-cards">
            <li className="project-card yarnification">
              <div className="card-img">
                <DeviceIcon className="device-icon" />
              </div>
              <div className="card-body">
                <div className="body-header">
                  <h2>Yarnification</h2>
                  <div className="header-tags">
                    <span className="header-tag typescript">
                      TypeScript
                    </span>
                    <span className="header-tag expo">
                      Expo
                    </span>
                  </div>
                </div>
                <p className="body-txt">
                  Project created to help crafters easily calculate how many balls of yarn they'll need for any project. Users can save their projects for future reference and share their specifications or finished results with others on the platform.
                </p>
                <div className="body-footer">
                  <div className="github-link">
                    <GithubIcon className="footer-icon" />
                    <a href="https://github.com/JosueOF1130/yarnification-mobile-app" target="_blank">Github repository</a>
                  </div>
                  <a href="https://yarnification.netlify.app/" target="_blank" className="preview-link">Live preview <ArrowRightIcon className="preview-arrow" /></a>
                </div>
              </div>
            </li>

            <li className="project-card flicksy">
              <div className="card-img">
                <DeviceIcon className="device-icon" />
              </div>
              <div className="card-body">
                <div className="body-header">
                  <h2>Flicksy</h2>
                  <div className="header-tags">
                    <span className="header-tag typescript">
                      TypeScript
                    </span>
                    <span className="header-tag expo">
                      Expo
                    </span>
                  </div>
                </div>
                <p className="body-txt">
                  Project created to helpmovie lovers discover personalized recommendations based on the films they enjoy most. It provides detailed movie information and shows where each title is available to stream, making it easier to explore and watch new favorites.
                </p>
                <div className="body-footer">

                  <a href="https://github.com/JosueOF1130/flicksy" target="_blank" className="github-link"><GithubIcon className="footer-icon" />Github repository</a>
                  <a href="https://flick-sy.netlify.app/" target="_blank" className="preview-link">Live preview <ArrowRightIcon className="preview-arrow" /></a>
                </div>
              </div>
            </li>
          </ul>


        </section>

        <FormModal open={isReachOutOpen} onClose={() => setIsReachOutOpen(false)}></FormModal>



      </main>

    </>
  );
}