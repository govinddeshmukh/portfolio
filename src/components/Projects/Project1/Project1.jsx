import "./Project.css";
import { Link } from "react-router-dom";
export default function Project1() {
  return (
    <div className="home">
    <div className="home-left">
         <h2 >Home Decor</h2>
         <div className="main">
         <p>My name is <span>Govind Deshmukh</span>, I'm a Web Developer based in Aurangabad Maharashtra India. I have developed many
           types of<br /> web application including Ecommerce and Games. <br /><br /> <i class="fa-solid fa-circle"></i>Writing well designed, testable, efficient code
           by using best software development practices. <br /> <i class="fa-solid fa-circle"></i>Creating website layout/user interfaces by using standard
           HTML/CSS practices. <br /> <i class="fa-solid fa-circle"></i>Integrating data from various back-end services and databases. </p>
           </div>

           <div className="link">
            <ul>
              <li><a href="https://www.homelane.com/home-interior-design">View Site</a></li>
              <li><a href="https://github.com/govinddeshmukh">Github</a></li>
            </ul>
           </div>

     </div>
     <div className="home-center">
         <h1>Projects</h1>
         <ul>
             <Link to="/home-decore"><li>Home Decor</li></Link>
             <Link to="/travel-blog"><li>Travel Blog</li></Link>
             <Link to="/weather-app"><li>Weather App</li></Link>
             <Link to="/health-care"><li>Health Care</li></Link>
             <Link to="/comming-soon"><li>Comming Soon</li></Link>
             {/* <li>Travel Blog</li> */}
             {/* <li>Wheather App</li> */}
             {/* <li>Health Care</li> */}
             {/* <li>Coomming soon</li> */}
         </ul>
     </div>
 </div>
  );
}
