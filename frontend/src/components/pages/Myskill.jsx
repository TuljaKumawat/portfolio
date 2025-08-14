import { useInView } from 'react-intersection-observer';
import React from "react";
import { FaCode, FaChartLine, FaJava } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiBootstrap, SiGit, SiC } from "react-icons/si";





const Skills = () => {
  const { ref: toolsRef, inView: toolsInView } = useInView({
  triggerOnce: true, // animation only once
  threshold: 0.2,     // trigger when 20% visible
});
  return (
    <section className="skills-section text-white">
      <div className="container py-5" ref={toolsRef}>
        <h2 className={`text-center fw-bold mb-5 ${toolsInView ? 'zoom-in' : ''}`}>
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="row">
          {/* Technical Skills */}
          <div className="col-md-6 mb-4">
            <h4 className="mb-3 fw-semibold">
              <FaCode className="me-2" /> Technical Skills
            </h4>
            {[
              { name: "MongoDB", value: 90 },
              { name: "Express.js", value: 85 },
              { name: "React.js", value: 95 },
              { name: "Node.js", value: 88 },
            ].map((skill, i) => (
              <div key={i} className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: `${skill.value}%` }}
                    role="progressbar"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Skills */}
          <div className="col-md-6 mb-4">
            <h4 className="mb-3 fw-semibold">
              <FaChartLine className="me-2" /> Professional Skills
            </h4>
            {[
              { name: "Communication", value: 92 },
              { name: "Team Work", value: 88 },
              { name: "Project Management", value: 85 },
              { name: "Creativity", value: 95 },
            ].map((skill, i) => (
              <div key={i} className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: `${skill.value}%` }}
                    role="progressbar"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="text-center mt-5" ref={toolsRef}>
      <h2 className={`fw-bold mb-4 ${toolsInView ? 'zoom-in' : ''}`}>
      Tools &<span className="text-primary"> Technologies</span>
      </h2>
  <div className={`row justify-content-center g-3 ${toolsInView ? 'zoom-in' : ''}`}>
   {[
  { icon: <SiC size={30} color="#A8B9CC" />, label: "C" },
  { icon: <FaJava size={30} color="#f89820" />, label: "Java" },
  { icon: <SiReact size={30} color="#61DBFB" />, label: "React" },
  { icon: <SiNodedotjs size={30} color="#68A063" />, label: "Node.js" },
  { icon: <SiMongodb size={30} color="#4DB33D" />, label: "MongoDB" },
  { icon: <SiJavascript size={30} color="#F0DB4F" />, label: "JavaScript" },
  { icon: <SiBootstrap size={30} color="#7952B3" />, label: "Bootstrap" },
  { icon: <SiGit size={30} color="#F1502F" />, label: "Git" },
].map((tool, i) => (
  <div key={i} className="col-6 col-sm-4 col-md-2">
    <div className="bg-dark rounded text-white py-3 shadow-sm">
      {tool.icon}
      <p className="mt-2 mb-0">{tool.label}</p>
    </div>
  </div>
))}
</div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
