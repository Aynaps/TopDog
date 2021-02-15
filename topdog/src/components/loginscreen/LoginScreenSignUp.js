import './loginScreen.css';
import { Link } from "react-router-dom";
import Footer from '../footer/footer';
import axios from 'axios';


function CreateAccount(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmpass").value;

  //check that there are values in the input values
  if(username === "" || password === "" || confirmPass === "" || confirmPass !== password ){
    console.log("info is missing")
  }
  else{
    axios.post(`http://localhost:3000/createAccount?username=${username}&password=${password}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  console.log(username);
  console.log(password);
  console.log(confirmPass);
}

function LoginScreenSignUp() {
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
          <div className="signUp">
            <p className="signUpInstructions">Create a new username:</p>
              <input type="text" id="username" placeholder="Username" className="signUpInput"></input>
            <p className="signUpInstructions">Choose a password:</p>
              <input type="text" id="password" placeholder="Password" className="signUpInput"></input>
            <p className="signUpInstructions">Confirm password:</p>

              <input type="text" id="confirmpass" placeholder="Confirm Password" className="signUpInput" ></input>
            <div className="buttonContainer">
              <Link to="/" className="link">
                <button className="loginButtons" id="backBtn" >Back</button>  
                <button className="loginButtons" id="signUpConfirm" onClick={ () => { CreateAccount() } }>Sign Up</button>
                {/* onClick={CreateAccount()} 
                */}
              </Link>
            
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LoginScreenSignUp;