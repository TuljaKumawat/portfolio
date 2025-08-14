// import { useInView } from 'react-intersection-observer';
// import profileImg from "../../Images/profileImg.png"; // Replace with your actual image path
// import { FaDownload } from "react-icons/fa";
// import resumePDF from "../../Resume/TuljaResume.pdf";


// const About = () => {
//   const { ref: toolsRef, inView: toolsInView } = useInView({
//   triggerOnce: true, // animation only once
//   threshold: 0.2,     // trigger when 20% visible
// });

//   return (
//     <section id="about" className="about-section text-white">
//       <div className="container"ref={toolsRef}>
//         <h2 className={`text-center mb-5 fw-bold ${toolsInView ? 'zoom-in' : ''}`}>
//           <span className="highlight">About</span> Me
//         </h2>

//         <div className="row align-items-center">
//           {/* Left Content */}
//           <div className="col-md-7">
//             <h4 className="mb-3 fw-bold">Who am I?</h4>
//             <p className="about-description">
//               I'm a passionate MERN stack developer with a strong foundation in JavaScript,
//               React, Node.js, and MongoDB. I enjoy building full-stack web applications that
//               solve real-world problems. My focus is on writing clean, maintainable, and scalable
//               code. I value user experience and design intuitive interfaces that engage users and
//               improve usability. I'm always eager to learn and grow in the ever-evolving tech world.
//             </p>

//             <div className="row mt-4">
//               <div className="col-sm-6">
//                 <p><strong className="highlight">Name:</strong> Tulja Kumawat</p>
//                 <p><strong className="highlight">Experience:</strong> Freshers</p>
//               </div>
//               <div className="col-sm-6">
//                 <p><strong className="highlight">Email:</strong> tuljakumawat@gmail.com</p>
//                 <p><strong className="highlight">Freelance:</strong> Available</p>
//               </div>
//             </div>

//             <div className="mt-4">
//               <a href="/Contact" className="btn btn-primary me-3">Contact Me</a>
//               <a href={resumePDF} download="TuljaResume.pdf" className="btn btn-outline-light">
//                 <FaDownload className="me-2" />
//                 Download CV
//               </a>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="col-md-5 text-center mt-4 mt-md-0">
//             <img
//               src={profileImg}
//               alt="Profile"
//               className="img-fluid profile-img"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { useInView } from 'react-intersection-observer';
import profileImg from "../../Images/profileImg.png";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../../Resume/TuljaResume.pdf";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const About = () => {
  const { ref: toolsRef, inView: toolsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="about" className="about-section text-white">
      <div className="container" ref={toolsRef}>
        <h2 className={`text-center mb-5 fw-bold ${toolsInView ? 'zoom-in' : ''}`}>
          <span className="highlight">About</span> Me
        </h2>

        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-7">
            <h4 className="mb-3 fw-bold">Who am I?</h4>
            <p className="about-description">
              I'm a passionate MERN stack developer with a strong foundation in JavaScript,
              React, Node.js, and MongoDB. I enjoy building full-stack web applications that
              solve real-world problems. My focus is on writing clean, maintainable, and scalable
              code. I value user experience and design intuitive interfaces that engage users and
              improve usability. I'm always eager to learn and grow in the ever-evolving tech world.
            </p>

            <div className="row mt-4">
              <div className="col-sm-6">
                <p><strong className="highlight">Name:</strong> Tulja Kumawat</p>
                <p><strong className="highlight">Experience:</strong> Freshers</p>
              </div>
              <div className="col-sm-6">
                <p><strong className="highlight">Email:</strong> tuljakumawat@gmail.com</p>
                <p><strong className="highlight">Freelance:</strong> Available</p>
              </div>
            </div>

            <div className="mt-4">
              <a href="/Contact" className="btn btn-primary me-3">Contact Me</a>
              <Button variant="outline-light" onClick={handleShow}>
                <FaDownload className="me-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="img-fluid profile-img"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Preview CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={resumePDF}
            title="Resume Preview"
            width="100%"
            height="500px"
            style={{ border: 'none' }}
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <a href={resumePDF} download="TuljaResume.pdf" className="btn btn-primary">
            Download
          </a>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default About;

