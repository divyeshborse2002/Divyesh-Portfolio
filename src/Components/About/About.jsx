import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-main" id="about">
      <div className="About-section">
        <h1>About Me</h1>
        <div className="info">
          <p>
          I Am A Front-End Developer. Proficient in HTML, CSS, Bootstrap,JavaScript and React.js. Seeking entry-level front-end developer position to apply skills and learn from experienced team.
          </p>
        </div>
        <div className="skill-section">
          <h1>skills</h1>
          <div className="skill-box">
            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknuwfUAIa91LbaPj3MIHQwLAh3ecp-CNS9w&s"
                alt=""
              />
              <span>HTML</span>
            </div>
            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZlW3IZBrDmQ1ek_82xci1a5LYF_yJAI7QQ&s"
                alt=""
              />
              <span>CSS</span>
            </div>
            <div className="box">
              <img
                src="https://logowik.com/content/uploads/images/bootstrap-new725.logowik.com.webp"
                alt=""
              />
              <span>BOOTSTRAP</span>
            </div>
            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHQUeabRDH5SBUWiPBKck3K6EYOKk0cxivw&s"
                alt=""
              />
              <span>JAVASCRPT</span>
            </div>
            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
                alt=""
              />
              <span>REACT</span>
            </div>
            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_9jssXtuYIGA_P_tpMK2-Pq7UxrPcIuTPg&s"
                alt=""
              />
              <span>REDUX</span>
            </div>

            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25iNmGoLloXgWGs8XOWk0xzaH-F27dIBBeEMrn8o2-9wRGEqaWMdSGAodpZSxOd61gbo&usqp=CAU"
                alt=""
              />
              <span>GitHub</span>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default About;
