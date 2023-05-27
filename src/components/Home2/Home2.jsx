import "./Home2.css";
import Resume_Update from "../Assets/Resume_Update.pdf"
import React from "react";
import { Link } from "react-router-dom";

export default function Home2() {
  <script>
  function scrolltotop(){
    window.scrollTo(0, 0)
  }
  </script>

  return (
    <>
    <div className="home">
        <div className="home-left">
            <h1>Welcome.</h1>
            <div className="main">
            <p>My name is <span>Govind Deshmukh</span>, I'm a Web Developer based in Aurangabad Maharashtra India. I have developed many
              types of<br /> web application including Ecommerce and Games. <br /><br /> <i class="fa-solid fa-circle"></i>Writing well designed, testable, efficient code
              by using best software development practices. <br /> <i class="fa-solid fa-circle"></i>Creating website layout/user interfaces by using standard
              HTML/CSS practices. <br /> <i class="fa-solid fa-circle"></i>Integrating data from various back-end services and databases. </p>
              </div>
            <h1>Welcome.</h1>
            <div className="main">
            <p>My name is <span>Govind Deshmukh</span>, I'm a Web Developer based in Aurangabad Maharashtra India. I have developed many
              types of<br /> web application including Ecommerce and Games. <br /><br /> <i class="fa-solid fa-circle"></i>Writing well designed, testable, efficient code
              by using best software development practices. <br /> <i class="fa-solid fa-circle"></i>Creating website layout/user interfaces by using standard
              HTML/CSS practices. <br /> <i class="fa-solid fa-circle"></i>Integrating data from various back-end services and databases. </p>
              </div>
            <h1>Welcome.</h1>
            <div className="main">
            <p>My name is <span>Govind Deshmukh</span>, I'm a Web Developer based in Aurangabad Maharashtra India. I have developed many
              types of<br /> web application including Ecommerce and Games. <br /><br /> <i class="fa-solid fa-circle"></i>Writing well designed, testable, efficient code
              by using best software development practices. <br /> <i class="fa-solid fa-circle"></i>Creating website layout/user interfaces by using standard
              HTML/CSS practices. <br /> <i class="fa-solid fa-circle"></i>Integrating data from various back-end services and databases. </p>
              </div>
            <h1>Welcome.</h1>
            <div className="main">
            <p>My name is <span>Govind Deshmukh</span>, I'm a Web Developer based in Aurangabad Maharashtra India. I have developed many
              types of<br /> web application including Ecommerce and Games. <br /><br /> <i class="fa-solid fa-circle"></i>Writing well designed, testable, efficient code
              by using best software development practices. <br /> <i class="fa-solid fa-circle"></i>Creating website layout/user interfaces by using standard
              HTML/CSS practices. <br /> <i class="fa-solid fa-circle"></i>Integrating data from various back-end services and databases. </p>
              </div>
            <h1>Welcome.</h1>
            <div className="main">
            <p>My name is <span>Govind Deshmukh</span>, I'm a Web Developer based in Aurangabad Maharashtra India. I have developed many
              types of<br /> web application including Ecommerce and Games. <br /><br /> <i class="fa-solid fa-circle"></i>Writing well designed, testable, efficient code
              by using best software development practices. <br /> <i class="fa-solid fa-circle"></i>Creating website layout/user interfaces by using standard
              HTML/CSS practices. <br /> <i class="fa-solid fa-circle"></i>Integrating data from various back-end services and databases. </p>
              </div>

        </div>
        <div className="home-center">
            <h1>Projects</h1>
            <ul>
                <Link to="/home-decore"><li className="scrollTo" onclick="scrolltotop()">Home Decor</li></Link>
                <Link to="/travel-blog"><li >Travel Blog</li></Link>
                <Link to="/weather-app"><li>Weather App</li></Link>
                <Link to="/health-care"><li>Health Care</li></Link>
                <Link to="/comming-soon"><li>Comming Soon</li></Link>
                {/* <li>Travel Blog</li> */}
                {/* <li>Wheather App</li> */}
                {/* <li>Health Care</li> */}
                {/* <li>Coomming soon</li> */}
            </ul>
        </div>
        <div className="home-right">
        <a href = {Resume_Update} >Resume</a>
      </div>
      
    </div>
    </>
  );
}
