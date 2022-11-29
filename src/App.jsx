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

      <section id="hello" className="section hello bg-green">
        <h2>Hello 👋</h2>
        <p>Andrea Mihaljević</p>
        <p>front-end developer @Barrage</p>
      </section>

      <section id="postings" className="section postings bg-yellow">
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

      <section id="resources" className="section resources bg-red">
        <h2>Resources 🔎</h2>

        <ul className="list">
          <li className="list__item">
            <a href="https://www.codecademy.com/">Codecademy</a>
          </li>
          <li className="list__item">
            <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
          </li>
          <li className="list__item">
            <a href="https://web.dev/learn/">Learn | web.dev</a>
          </li>
          <li className="list__item">
            <a href="https://andreasbm.github.io/web-skills/">Web Skills</a>
          </li>
          <li className="list__item">
            <a href="https://roadmap.sh/">Developer Roadmaps</a>
          </li>
          <li className="list__item">
            <a href="https://www.code-snippets.dev/">Code Snippets</a>
          </li>
          <li className="list__item">
            <a href="https://www.whatdevsneed.com/">whatdevsneed</a>
          </li>
          <li className="list__item">
            <a href="https://learngitbranching.js.org/">Learn Git Branching</a>
          </li>
          <li className="list__item">
            <a href="https://flukeout.github.io/">CSS Diner</a>
          </li>
          <li className="list__item">
            <a href="https://cssgridgarden.com/">Grid Garden</a>
          </li>
          <li className="list__item">
            <a href="http://www.flexboxdefense.com/">Flexbox Defense</a>
          </li>
          <li className="list__item">
            <a href="https://flexboxfroggy.com/">Flexbox Froggy</a>
          </li>
        </ul>
      </section>

      <section id="newsletters" className="section newsletters bg-blue">
        <h2>Newsletters 📰</h2>

        <ul className="list">
          <li className="list__item">
            <a href="https://sidebar.io/">sidebar.io</a>
          </li>
          <li className="list__item">
            <a href="https://bytes.dev/">bytes.dev</a>
          </li>
          <li className="list__item">
            <a href="https://css-tricks.com/">CSS Tricks</a>
          </li>
          <li className="list__item">
            <a href="https://programmingdigest.net/">Programming Digest</a>
          </li>
          <li className="list__item">
            <a href="https://buttondown.email/the-a11y-project">
              The A11Y Project
            </a>
          </li>
          <li className="list__item">
            <a href="https://kentcdodds.com/">Kent C. Dodds</a>
          </li>
          <li className="list__item">
            <a href="https://hackernewsletter.com/">Hacker Newsletter</a>
          </li>
          <li className="list__item">
            <a href="https://dailytech.email/">Daily Tech</a>
          </li>
          <li className="list__item">
            <a href="https://css-weekly.com/">CSS Weekly</a>
          </li>
        </ul>

        <ul className="list">
          <li className="list__item">
            <a href="https://reactnewsletter.com/">React Newsletter</a>
          </li>
          <li className="list__item">
            <a href="https://reactdigest.net/">React Digest</a>
          </li>
        </ul>
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
