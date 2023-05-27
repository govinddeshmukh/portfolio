import "./Sideleft.css";
import { Link } from "react-router-dom";

export default function Sideleft() {
  return (
    <div className="sideleft">
      <Link to="/" className="logo">G</Link>
      <div className="div"></div>
      <div className="center">
        
         <Link to ="/contact"><i class="fa-solid fa-phone"></i></Link> 
      <a href="https://www.linkedin.com/in/govind-deshmukh-73a290186/"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/govinddeshmukh"><i class="fa-brands fa-github"></i></a>
      </div>
      <div className="down"></div>

      {/* <a href="/"><i class="fa-brands fa-square-whatsapp"></i></a>
      <a href="https://www.linkedin.com/in/govind-deshmukh-73a290186/"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/govinddeshmukh"><i class="fa-brands fa-github"></i></a> */}
      
  
      
      

    </div>
  );
}
