import logo from "./logo.svg";

import frontDev1 from "./assets/images/front-dev-1.jpg";
import frontDev2 from "./assets/images/front-dev-2.jpg";
import frontDev3 from "./assets/images/front-dev-3.jpg";
import frontDev4 from "./assets/images/front-dev-4.jpg";
import frontDev5 from "./assets/images/front-react-1.jpg";
import frontDev6 from "./assets/images/ui-front-dev-1.jpg";
import cofee from "./assets/images/cofee.jpg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <section className="section section--intro bg-blue">
        <h1 className="title">
          Web development in practice / Upoznati se s praktičnim implikacijama
          teorije u realnom poslovnom okruženju
        </h1>
      </section>

      <section className="section section--header bg-grey">
        <p className="h3">iliti ga</p>
        <p className="h1">
          Front-end: ti to tamo mijenjaš boje na buttonima? 🎨
        </p>
      </section>

      <section className="section section--contents bg-red">
        <h2>Table of contents</h2>

        <ol className="list">
          <li className="list__item">
            <a href="#hello">Hello 👋</a>
          </li>
          <li className="list__item">
            <a href="#postings">What does a Front-end developer do? 🤔</a>
          </li>
          <li className="list__item">
            <a href="#cofee">First of all... 👆</a>
          </li>
          <li className="list__item">
            <a href="#resources">Resources 🔎</a>
          </li>
          <li className="list__item">
            <a href="#newsletters">Newsletters 📰</a>
          </li>
          <li className="list__item">
            <a href="#bai">Thank you 🤲</a>
          </li>
        </ol>
      </section>

      <section id="hello" className="section section--hello bg-green">
        <h2>Hello 👋</h2>

        <section className="info">
          <div role="presentation">
            <p className="h3">Andrea Mihaljević</p>
            <p className="h5">
              front-end developer{" "}
              <a
                href="https://www.barrage.net/"
                rel="noreferrer noopener"
                target="_blank">
                @Barrage
              </a>
            </p>
          </div>

          <div className="icons__container" role="presentation">
            <a
              href="https://github.com/amihaljevic"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="GitHub profile"
              className="icon__link">
              <img
                src="https://skillicons.dev/icons?i=github"
                alt=""
                className="icon__image"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/amihaljevic/"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="LinkedIn profile"
              className="icon__link">
              <img
                src="https://skillicons.dev/icons?i=linkedin"
                alt=""
                className="icon__image"
              />
            </a>
            <a
              href="https://www.instagram.com/andja_mandja_gandja/"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Instagram profile"
              className="icon__link">
              <img
                src="https://skillicons.dev/icons?i=instagram"
                alt=""
                className="icon__image"
              />
            </a>
          </div>
        </section>
      </section>

      <section id="postings" className="section section--postings bg-yellow">
        <h2>What does a Front-end developer do? 🤔</h2>

        <div className="images__container" role="presentation">
          <img src={frontDev1} alt="" className="image" />
          <img src={frontDev2} alt="" className="image" />
          <img src={frontDev3} alt="" className="image" />
          <img src={frontDev4} alt="" className="image" />
          <img src={frontDev5} alt="" className="image" />
          <img src={frontDev6} alt="" className="image" />
        </div>
      </section>

      <section className="section section--cofee bg-grey">
        <h2>But first - Cofee ☕</h2>
        <figure>
          <img src={cofee} alt="" />
        </figure>
      </section>

      <section id="resources" className="section section--resources bg-red">
        <h2>Resources 🔎</h2>

        <ul className="list">
          <li className="list__item">
            <a
              href="https://web.dev/learn/"
              rel="noreferrer noopener"
              target="_blank">
              Learn | web.dev
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://andreasbm.github.io/web-skills/"
              rel="noreferrer noopener"
              target="_blank">
              Web Skills
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://roadmap.sh/"
              rel="noreferrer noopener"
              target="_blank">
              Developer Roadmaps
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://www.code-snippets.dev/"
              rel="noreferrer noopener"
              target="_blank">
              Code Snippets
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://www.whatdevsneed.com/"
              rel="noreferrer noopener"
              target="_blank">
              whatdevsneed
            </a>
          </li>
        </ul>

        <section>
          <h3>Courses</h3>

          <ul className="list">
            <li className="list__item">
              <a
                href="https://www.codecademy.com/"
                rel="noreferrer noopener"
                target="_blank">
                Codecademy
              </a>
            </li>
            <li className="list__item">
              <a
                href="https://www.freecodecamp.org/"
                rel="noreferrer noopener"
                target="_blank">
                freeCodeCamp
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h3>Gamification</h3>

          <ul className="list">
            <li className="list__item">
              <a
                href="https://learngitbranching.js.org/"
                rel="noreferrer noopener"
                target="_blank">
                Learn Git Branching
              </a>
            </li>
            <li className="list__item">
              <a
                href="https://flukeout.github.io/"
                rel="noreferrer noopener"
                target="_blank">
                CSS Diner
              </a>
            </li>
            <li className="list__item">
              <a
                href="https://cssgridgarden.com/"
                rel="noreferrer noopener"
                target="_blank">
                Grid Garden
              </a>
            </li>
            <li className="list__item">
              <a
                href="http://www.flexboxdefense.com/"
                rel="noreferrer noopener"
                target="_blank">
                Flexbox Defense
              </a>
            </li>
            <li className="list__item">
              <a
                href="https://flexboxfroggy.com/"
                rel="noreferrer noopener"
                target="_blank">
                Flexbox Froggy
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section
        id="newsletters"
        className="section section--newsletters bg-blue">
        <h2>Newsletters 📰</h2>

        <ul className="list">
          <li className="list__item">
            <a
              href="https://sidebar.io/"
              rel="noreferrer noopener"
              target="_blank">
              sidebar.io
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://css-tricks.com/"
              rel="noreferrer noopener"
              target="_blank">
              CSS Tricks
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://css-weekly.com/"
              rel="noreferrer noopener"
              target="_blank">
              CSS Weekly
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://bytes.dev/"
              rel="noreferrer noopener"
              target="_blank">
              bytes.dev
            </a>
          </li>

          <li className="list__item">
            <a
              href="https://programmingdigest.net/"
              rel="noreferrer noopener"
              target="_blank">
              Programming Digest
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://buttondown.email/the-a11y-project"
              rel="noreferrer noopener"
              target="_blank">
              The A11Y Project
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://kentcdodds.com/"
              rel="noreferrer noopener"
              target="_blank">
              Kent C. Dodds
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://hackernewsletter.com/"
              rel="noreferrer noopener"
              target="_blank">
              Hacker Newsletter
            </a>
          </li>
          <li className="list__item">
            <a
              href="https://dailytech.email/"
              rel="noreferrer noopener"
              target="_blank">
              Daily Tech
            </a>
          </li>
        </ul>

        <section>
          <h3>React specific</h3>

          <ul className="list">
            <li className="list__item">
              <a
                href="https://reactnewsletter.com/"
                rel="noreferrer noopener"
                target="_blank">
                React Newsletter
              </a>
            </li>
            <li className="list__item">
              <a
                href="https://reactdigest.net/"
                rel="noreferrer noopener"
                target="_blank">
                React Digest
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section id="bai" className="section section--bai bg-green">
        <h2>Thank you 🤲</h2>
        <figure>
          <img
            src="https://media.tenor.com/LbWkdlMcGQwAAAAd/bye-girl.gif"
            alt=""
          />
        </figure>
      </section>
    </div>
  );
}

export default App;
