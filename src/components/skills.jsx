import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <div className="section-title">
        <h2>مهارت های من</h2>
      </div>
      <div className="skillbars">
        <div className="skill-item">
          <h5>HTML</h5>
          <div className="skill-progress">
            <div
              className="progress"
              style={{ width: "90%", backgroundColor: "orange" }}
            ></div>
          </div>
        </div>
        <div className="skill-item">
          <h5>Css</h5>
          <div className="skill-progress">
            <div
              className="progress"
              style={{ width: "90%", backgroundColor: "red" }}
            ></div>
          </div>
        </div>
        <div className="skill-item">
          <h5>JavaScript</h5>
          <div className="skill-progress">
            <div
              className="progress"
              style={{ width: "60%", backgroundColor: "blue" }}
            ></div>
          </div>
        </div>
        <div className="skill-item">
          <h5>React</h5>
          <div className="skill-progress">
            <div
              className="progress"
              style={{ width: "70%", backgroundColor: "green" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
