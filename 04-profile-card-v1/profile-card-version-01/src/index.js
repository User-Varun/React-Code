import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "Advanced",
    color: "#60dafb",
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#efd81d",
  },
  {
    skill: "React",
    level: "Begineer",
    color: "#663399",
  },
  {
    skill: "Git & Github",
    level: "Intermediate",
    color: "#ff3b00",
  },
];

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

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}

      {/* <Skill skill="HTMl" emoji="💪" color="red" />
      <Skill skill="CSS" emoji="💪" color="orange" />
      <Skill skill="React" emoji="👶" color="yellow" />
      <Skill skill="JavaScript" emoji="😎" color="blue" /> */}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* here && operator shortcircuiting in work! */}
      {level === "Advanced" && "💪"}
      {level === "Begineer" && "👶"}
      {level === "Intermediate" && "👍"}
      <span></span>
    </li>
  );
}

function Avatar() {
  return <img className="avatar" src="myPhoto.jpg" alt="Varun Pawar" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Varun Pawar</h1>
      <p>
        Learning frontend web dev. undergrad student in B.Tech from SAIT,likes
        to tinker with tech, when i not coding i like making other engineering
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
