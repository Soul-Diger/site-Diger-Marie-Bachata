import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/cours-collectifs"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Cours Collectifs</li>
            </NavLink>
            <NavLink
              to="/cours-prives"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Cours Privés</li>
            </NavLink>
            <NavLink
              to="/show-animation"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Show & Animation</li>
            </NavLink>
            <NavLink
              to="/ouverture-de-bal"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Ouverture de Bal</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
