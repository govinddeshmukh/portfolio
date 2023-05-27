import "./App.css"
// import Project1 from "./components/Projects/Project1/Project1";
// import Project2 from "./components/Projects/Project2/Project2";
import Home2 from "./components/Home2/Home2";
import Sideleft from "./components/Sideleft/Sideleft";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
// import Project3 from "./components/Projects/Project3/Project3";
// import Project4 from "./components/Projects/Project4/Project4";
// import Project5 from "./components/Projects/Project5/Project5";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <>
    <div className="App">
      <Topbar />
     <Sideleft />
     {/* <Project1 /> */}
     {/* <Project2 /> */}
      <Routes>
      < Route path="/" element={<Home2 />} />
     < Route path="/contact" element={<Contact />} />
     {/* < Route path="/home-decore" element={<Project1 />} />
     < Route path="/travel-blog" element={<Project2 />} />
     < Route path="/weather-app" element={<Project3 />} />
     < Route path="/health-care" element={<Project4 />} />
     < Route path="/comming-soon" element={<Project5 />} /> */}
      </Routes>
    </div>
    </>
  );
}



export default App;
