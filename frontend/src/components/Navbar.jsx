const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-brand" href="/">Tulja</a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/"><strong>Home</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About"><strong>About</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Myskill"><strong>Skills</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects"><strong>Projects</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact"><strong>Contact</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
