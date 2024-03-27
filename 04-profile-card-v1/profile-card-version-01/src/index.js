import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function SkillList(props) {
  return (
    <ul className="skill-list">
      <Skill skill="HTMl" emoji="💪" color="red" />
      <Skill skill="CSS" emoji="💪" color="orange" />
      <Skill skill="React" emoji="👶" color="yellow" />
      <Skill skill="JavaScript" emoji="😎" color="blue" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: `${props.color}` }}>
      {props.skill} {props.emoji}
    </li>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/u/135313164?s=400&u=da4e629be53cbc63384ec0c11314a2a412ba2cb8&v=4"
      alt="Varun Pawar"
    ></img>
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>Varun Pawar</h1>
      <p>
        Learning frontend web dev. undergrad student in B.Tech from SAIT,likes
        to tinkering with tech,when i not coding i like making other engineering
        Projects, playing video games (dark Souls 🔥).
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
