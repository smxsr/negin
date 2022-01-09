import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [navLinkOpen, setNavLinkOpen] = useState(false);
  const handlenavlinktoggle = () => {
    setNavLinkOpen(!navLinkOpen);
  };
  const renderClasses = () => {
    let classes = "navlinks";
    if (navLinkOpen === true) {
      classes = classes + " active";
    }
    return classes;
  };
  return (
    <nav>
      <div className="logo">
        <i class="fas fa-utensils"></i>
        <h4>رستوران نگین</h4>
      </div>
      <ul className={renderClasses()}>
        <li className="link">
          <a href="#">درباره ما</a>
        </li>
        <li className="link">
          <a href="#">سرویس ها</a>
        </li>
        <li className="link">
          <a href="#">ورود</a>
        </li>
        <li className="link">
          <a href="#">صفحه اصلی</a>
        </li>
      </ul>
      <div className="hamburger-toggle" onClick={handlenavlinktoggle}>
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  );
};

export default Navbar;
