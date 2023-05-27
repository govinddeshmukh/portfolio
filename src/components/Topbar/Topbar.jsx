import "./Topbar.css";
// import logo192 from "../Assets/logo192.png"
import logo from "../Assets/logo.svg"


export default function Topbar() {
  return (
    <div className="top">
        <nav>
            <img className="logo" src={logo} alt="" />
        </nav>
    </div>
  );
}
