import "./Navbar.css";

import { Link } from "react-router-dom";
import { IoFingerPrint } from "react-icons/io5";
// import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-links">
          <Link to="/" className="navbar-logo">
            <IoFingerPrint className="navbar-icon" />
          </Link>
          <ul className="navbar-ul">
            <li>
              <Link to="/" className="navbar-li">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar-li">
                About
              </Link>
            </li>
            <li>
              <Link to="/ideas" className="navbar-li">
                Ideas
              </Link>
            </li>
            <li>
              <Link to="/quiz" className="navbar-li">
                Quiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
