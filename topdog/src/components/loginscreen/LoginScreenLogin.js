import './loginScreen.css';
import { Link } from "react-router-dom";
import Footer from '../footer/footer';

function LoginScreenLogin() {
  return (
    <div>
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
            <input type="text" placeholder="Username" className="loginInput"></input>
            <input type="text" placeholder="Password" className="loginInput"></input>
            <Link id="forgotPasswordLink">Forgot Password?</Link>
            <div className="buttonContainer">
              <Link to="/" className="link">
                <button className="loginButtons" id="backBtn">Back</button>
              </Link>
              <Link to="/userprofile" className="link">
                <button className="loginButtons" id="loginConfirmBtn">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LoginScreenLogin;