import React from 'react';
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleProjectsLinkClick = () => {
      navigate("/");
    };

    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={`/about-me`} className="nav-link">About Me</Link>
              </li>
              <li class="nav-item">
                <Link to={`/`} className="nav-link">Blogs</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    
    );
};

export default Header;