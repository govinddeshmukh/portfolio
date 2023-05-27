import "./Contact.css";


export default function Contact() {
  return (
    <div className="contact">
        <div className="box">
            <h1>Contact</h1>
            <div className="input-group">
                <div className="input-feild">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="Name" required/>
                </div>
                <div className="input-feild">
                <i class="fa-solid fa-envelope"></i>
                <input type="text" placeholder="Email" />
                </div>
                <div className="writeformgroup">
                <textarea placeholder="Hello...." type="text" className="writeinput writetext" rows="4"></textarea>
                
            </div>
            </div>
            <div className="btn">
                  <button><i class="fa-solid fa-paper-plane"></i></button>
                </div>
        </div>
      
      <div className="circle">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          
        </ul>
      </div>
      </div>
     
  );
}
