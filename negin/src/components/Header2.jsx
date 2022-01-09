import React from "react";
import "./Header2.css";
const Header2 = () => {
  const handlehamburger = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  };
  return (
    <div>
      <div class="container">
        <div class="navbar">
          <div class="menu">
            <h3 class="logo">
              Brand<span>Name</span>
            </h3>
            <div onClick={handlehamburger} class="hamburger-menu">
              <div class="bar"></div>
            </div>
          </div>
        </div>

        <div class="main-container">
          <div class="main">
            <header>
              <div class="overlay">
                <div class="inner">
                  <h2 class="title">Future is here</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium illum tenetur consequatur veritatis?
                  </p>
                  <button class="btn">Read more</button>
                </div>
              </div>
            </header>
          </div>

          <div class="shadow one"></div>
          <div class="shadow two"></div>
        </div>

        <div class="links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header2;
