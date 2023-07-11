import React, { useState, useContext } from "react";
import './Login.css';
import DataContext from "../../Data/DataContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";
function Login() {

    const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  }
   
//   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const {auth, setAuth } = useContext(DataContext);
  const [focused, setFocused] = React.useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)
  const [message, setMessage] = useState("");
  const [messages, setMessage1] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;
    setMessage1("");
    
    if (!validator.isEmail(email)) {
      setMessage1("Please, enter valid Email!");
    } 
  };
  const validatepassword=(e)=>{
    var password=e.target.value;
    setMessage("");
    if(!password){
      setMessage("enter password");
    }
  }

  const login = () => {

    axios.post('https://localhost:7292/auth',{
        name: "",
        email: email,
        password: password,
        userType: ""
      }).then((response) => {
        if(response.data==="Admin")
        {
          setAuth("Admin")
          console.log(response.data);
          navigate("/admin")
          
        }
        else if(response.data==="User")
        {
          setAuth("User")
          console.log(response.data);
          navigate("/user")            
        }
        else{
            alert(response.data)
        }
            
      });

  };

  const signup = () =>{
    axios.post("https://localhost:7292/api/Users",{
        Email:email,
        Password:password,  
        Name:userName,
        usertype:"User"
    }).then((response)=>{
        alert(response.data);
    });

    setEmail("");
    setPassword("");
    setUserName("")
  }
 



  return (
    <div className="login-setup">
      <div className="login-main">
        <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={toggleCheckBox} />
        <div className="signup">
          <form>
            <label className="login-lable" htmlFor="chk" aria-hidden="true">Sign up</label>
            <input className="login-input" value={email} type="email" name="email" placeholder="Email" required onChange={(event) => {setEmail(event.target.value);}} />
            <input className="login-input" value={password} type="password" name="pswd" placeholder="Password" required onChange={(event) => {setPassword(event.target.value);}} />
            <input className="login-input" value={userName} type="text" name="username" placeholder="Enter your Name" required onChange={(event) => {setUserName(event.target.value);}} />
          </form>
            <button className="login-button" onClick={signup}>Sign up</button>
        </div>
        <div className="login">
          <form>
            <label className="login-lable" htmlFor="chk" aria-hidden="true">Login</label>
            <input className="login-input" value={email} type="email" name="email" placeholder="Email" required onBlur={(event) => {onBlur(validateEmail(event));}} onChange={(event) => {setEmail(event.target.value);}} />
            <span
        style={{
          fontWeight: "bold",
          fontSize:"10px",
          color: "red"
        }}
      >
        {messages}
      </span>
            <input className="login-input" value={password} type="password" name="pswd" placeholder="Password" required onBlur={(event) => {onBlur(validatepassword(event));}} onChange={(event) => {setPassword(event.target.value);}}/>
            <span
        style={{
          fontWeight: "bold",
          fontSize:"10px",
          color: "red"
        }}
      >
        {message}
      </span>
          </form>
            <button className="login-button" onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
