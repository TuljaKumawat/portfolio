// import React from 'react';
// import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
// import { SiGmail } from 'react-icons/si';

// const Contact = () => {
//   return (
//     <section className="contact-section py-5">
//       <div className="container">
//         <h2 className="text-center mb-5 text-light">
//           Get In <span className="highlight">Touch</span>
//         </h2>
//         <div className="row">
//           {/* Form Section */}
//           <div className="col-md-7 mb-4">
//             <form>
//               <div className="row mb-3">
//                 <div className="col">
//                   <label className="form-label text-light">Your Name</label>
//                   <input type="text" className="form-control bg-dark text-light border-0" placeholder="John Doe" />
//                 </div>
//                 <div className="col">
//                   <label className="form-label text-light">Your Email</label>
//                   <input type="email" className="form-control bg-dark text-light border-0" placeholder="john@example.com" />
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label className="form-label text-light">Subject</label>
//                 <input type="text" className="form-control bg-dark text-light border-0" placeholder="Project Inquiry" />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label text-light">Your Message</label>
//                 <textarea className="form-control bg-dark text-light border-0" rows="5" placeholder="Hello, I would like to discuss..."></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary px-4 mt-2" style={{ backgroundColor: '#6f42c1', border: 'none' }}>
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Info Card */}
//           <div className="col-md-5">
//             <div className="p-4 rounded bg-dark text-light shadow-sm">
//               <h5 className=" mb-4 text-light"><span className="highlight">Contact Information</span></h5>
//               <p><i className="bi bi-geo-alt-fill text-violet me-2"></i><strong>Location</strong><br /> 209-A Gandhi Nagar Indore[M.P]</p>
//               <p><i className="bi bi-envelope-fill text-violet me-2"></i><strong>Email</strong><br /> tuljakumawat@gmail.com</p>
//               <p><i className="bi bi-telephone-fill text-violet me-2"></i><strong>Phone</strong><br /> +917024015133</p>
//               <p><i className="bi bi-clock-fill text-violet me-2"></i><strong>Working Hours</strong><br /> Mon-Fri: 9AM - 5PM</p>
//               <div className="mt-4">
//                 <h6>Follow Me</h6>
//                 <div className="d-flex gap-3 mt-2">
//                    <a href="https://https://github.com/TuljaKumawat" className="text-light fs-5"><FaGithub /></a>
//                    <a href="https://www.linkedin.com/in/tulja-kumawat-634605257" target="_blank" rel="noopener noreferrer" className="text-light fs-5"><FaLinkedin /></a>
//                    <a href="https://t.me/TuljaKumawat" className="text-light fs-5"><FaTelegram /></a>
//                    <a href="https://tuljakumawat@gmail.com" className="text-light fs-5"><SiGmail /></a>       
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';



const Contact = () => {
  const Backend_URL="http://localhost:5000" || "https://portfolio-backend-3yu4.onrender.com"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${Backend_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out!',
          timer: 2000,
          showConfirmButton: false,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: 'Something went wrong. Try again later.',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Unable to send message.',
      });
      console.error(err);
    }
  };
  const { ref: toolsRef, inView: toolsInView } = useInView({
  triggerOnce: true, // animation only once
  threshold: 0.2,     // trigger when 20% visible
});

  return (
    <section className="contact-section py-5">
      <div className="container"ref={toolsRef}>
        <h2 className={`text-center mb-5 text-light ${toolsInView ? 'zoom-in' : ''}`}>
          Get In <span className="highlight">Touch</span>
        </h2>
        <div className="row">
          {/* Form Section */}
          <div className="col-md-7 mb-4">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label text-light">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                    className="form-control bg-dark text-light border-0" placeholder="John Doe" required />
                </div>
                <div className="col">
                  <label className="form-label text-light">Your Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className="form-control bg-dark text-light border-0" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                  className="form-control bg-dark text-light border-0" placeholder="Project Inquiry" required />
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange}
                  className="form-control bg-dark text-light border-0" rows="5"
                  placeholder="Hello, I would like to discuss..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4 mt-2" style={{ backgroundColor: '#6f42c1', border: 'none' }}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="col-md-5">
            <div className="p-4 rounded bg-dark text-light shadow-sm">
              <h5 className="mb-4 text-light"><span className="highlight">Contact Information</span></h5>
              <p><i className="bi bi-geo-alt-fill text-violet me-2"></i><strong>Location</strong><br />209-A Gandhi Nagar Indore [M.P]</p>
              <p><i className="bi bi-envelope-fill text-violet me-2"></i><strong>Email</strong><br />tuljakumawat@gmail.com</p>
              <p><i className="bi bi-telephone-fill text-violet me-2"></i><strong>Phone</strong><br />+91 7024015133</p>
              <p><i className="bi bi-clock-fill text-violet me-2"></i><strong>Working Hours</strong><br />Mon-Fri: 9AM - 5PM</p>
              <div className="mt-4">
                <h6>Follow Me</h6>
                <div className="d-flex gap-3 mt-2">
                  <a href="https://github.com/TuljaKumawat" className="text-light fs-5"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/tulja-kumawat-634605257" target="_blank" rel="noopener noreferrer" className="text-light fs-5"><FaLinkedin /></a>
                  <a href="https://t.me/TuljaKumawat" className="text-light fs-5"><FaTelegram /></a>
                  <a href="mailto:tuljakumawat@gmail.com" className="text-light fs-5"><SiGmail /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
