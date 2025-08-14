import profileImg from '../../Images/profileImg.png'; // ✅ Replace this with your image path

const Home = () => {
    return (
        <section id="home" className="home-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center text-center text-lg-start">
                    {/* Image Section */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <img src={profileImg} alt="Profile" className="img-fluid rounded-circle shadow profile-img" style={{ maxWidth: '300px' }} />
                    </div>

                    {/* Text Section */}
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-white">
                            Hi, I'm <span className="text-primary">Tulja Kumawat</span>
                        </h1>
                        <p className="lead text-muted">
                            MERN Stack Developer | Passionate about Code & Creativity
                        </p>
                        <a href="/Contact" className="btn btn-outline-light mt-3">
                            Let's Connect
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
