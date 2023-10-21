import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          skillName={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </ul>
  );
}

function Skill({ skillName, level, color }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{skillName}</span>
      <span>
        {/* ternery operator */}
        {/* {level === "beginner" ? "👶" : level === "intermediate" ? "💪" : "💪💪"} */}
        {/* short circuting */}
        {level === "beginner" && "👶"}
        {level === "intermediate" && "💪"}
        {level === "advanced" && "💪💪"}
      </span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
