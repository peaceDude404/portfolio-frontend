import { Link } from 'react-router-dom';
import './NavigationBar.css'

interface NavigationBarProps {
    onPressExperience: () => void;
    onPressHeader: () => void;
    onPressSkill: () => void;
}

const NavigationBar = ({onPressExperience, onPressHeader, onPressSkill} : NavigationBarProps) => {

  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <h2>Aman Singh Gautam</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" onClick={onPressHeader} to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={onPressSkill} to="/skill">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={onPressExperience} to="/experience">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
