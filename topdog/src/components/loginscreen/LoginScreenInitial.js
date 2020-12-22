import './loginScreen.css';
import { Link } from "react-router-dom";

function LoginScreenInitial() {
  return (
    <div className="splitScreen">
      <div className="leftHalf">
        <div className="imgContainer">
            <div>
                <img src="dog.png" alt="Dog Icon" className="dogIcon"></img>
            </div>
            <div>
                <img src="dog.png" alt="Dog Icon" className="dogIcon"></img>
            </div>
            <div>
                <img src="dog.png" alt="Dog Icon" className="dogIcon"></img>
            </div>
        </div>
        <div className="txtContainer">
            <div>
                <h2 className="adText">Showcase your dog.</h2>
            </div>
            <div>
                <h2 className="adText">Connect with other dogs.</h2>
            </div>
            <div>
                <h2 className="adText">Become the top dog!</h2>
            </div>
        </div>
      </div>
      <div className="rightHalf">
        <div>
          <h1 className="title">
            TopDog
          </h1>
        </div>
        <div className="btnContainer">
          <Link to="/signup" className="link">
            <button className="button" id="signUpBtn">Sign Up</button>
          </Link>
          <Link to="/login" className="link">
            <button className="button" id="loginBtn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginScreenInitial;