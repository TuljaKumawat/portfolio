import React from "react";
import { useInView } from 'react-intersection-observer'; 
import project1 from '../../Images/project1.png';
import project2 from '../../Images/project2.jpg';

const Project = () => {
   const { ref: toolsRef, inView: toolsInView } = useInView({
  triggerOnce: true, // animation only once
  threshold: 0.2,     // trigger when 20% visible
});
  const projects = [
    {
      title: "E-Nagarpalika – Online Request & Approval System.",
      description: "A full-stack MERN application designed for municipal corporations to handle service requests digitally. It features a two-step request submission form, real-time ticket tracking, and a multi-level approval workflow (4 levels) for officers. Users can submit forms online, track their status, and receive automated email updates upon approval or rejection.",
      tech: ["Express.js", "Node.js", "MongoDB"],
      codeLink: "https://github.com/TuljaKumawat/E-NagarPalika.git",
      liveLink: "https://e-nagarpalika-cpuc.onrender.com/login",
      img: project1,
    },
    {
      title: "NotezHub – Branch & Section-based Notes Management System ",
      description: "A MERN stack platform that enables students and faculty to upload, share, and access notes in a structured, branch-wise, and section-wise manner. Features include secure user authentication, role-based access control (faculty/students), branch-specific filtering, and an organized subject-wise notes repository. Users can view or download notes, and access is controlled through database relationship-based filtering for privacy and security.",
      tech: ["Bootstrap", "Express", "MongoDB"],
      codeLink: "https://github.com/TuljaKumawat/Notezhub-Project.git",
      liveLink: "https://notezhub-project.onrender.com",
      img: project2,
    },
    {
      title: "",
      description: "",
      tech: [""],
      codeLink: "",
      liveLink: "",
      img: "",
    },
  ];

  return (
    <>
      <section className="projects-section py-5">
        <div className="container" ref={toolsRef}> 
          <h2 className={`text-center fw-bold text-white mb-5 ${toolsInView ? 'zoom-in' : ''}`}>
            My <span className="text-purple">Projects</span>
          </h2>
          <div className="row">
            {projects.map((proj, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card bg-dark text-white h-100 project-card">
                  <img
                    src={proj.img}
                    className="card-img-top"
                    alt={`Project ${index + 1}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{proj.title}</h5>
                    <p className="card-text">{proj.description}</p>

                    {/* Tech badges */}
                    <div className="mb-3">
                      {proj.tech.map((tech, i) => (
                        <span key={i} className="badge bg-purple me-2 mb-1">
                          {tech}
                        </span>
                      ))}
                    </div>

                    
                    <div>
                      <a
                        href={proj.codeLink}
                        className="text-purple me-3 text-decoration-none"
                      >
                        <i className="bi bi-github"></i> <strong>Code</strong>
                      </a>
                      <a
                        href={proj.liveLink}
                        className="text-purple text-decoration-none"
                      >
                        <i className="bi bi-box-arrow-up-right"></i><strong>Live</strong> 
                      </a>
                    </div>
                  </div>
                </div>
            
              </div>
              
            ))}
          </div>
    
          <div className="text-center mt-4">
            <button className="btn btn-outline-purple text-white"><strong>View All Projects</strong></button>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Project;
