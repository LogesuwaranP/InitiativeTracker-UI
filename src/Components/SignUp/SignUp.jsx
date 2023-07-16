import React,{useContext} from 'react'
import "./SignUp.css"
import DataContext from '../../Data/DataContext';

const SignUp = () => {
  const {setEmail, setUserName, setPassword, setConfirmPassword, setToggle, checkValues} = useContext(DataContext);
  return (
    <div className='signup-container'>
        <div>
            <h2>Join Our team</h2>
        </div>
        <div className='signup-input'>
            <form action="">
                <label htmlFor="Name">Email </label>
                <input placeholder='E-mail' type='email' onChange={(e)=>setEmail(e.target.value)}/>
            </form>
            <form action="">
                <label htmlFor="Name">User Name</label>
                <input placeholder='User Name' type='name' onChange={(e)=>setUserName(e.target.value)}/>
            </form>
            <form action="">
                <label htmlFor="Name">Password</label>
                <input placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
            </form>
            <form action="">
                <label htmlFor="Name">Confirm Password</label>
                <input placeholder='confirm Password' type='password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </form>
            
        </div>
        <div className='register-container'>
            <div className='terms'>
                <input type='checkbox'/>
                <p>Accept Terms & Conditions</p>
            </div>
            <div className='SUBMIT register' onClick={checkValues}>Register</div>
        </div>
        <div>
            <p>Already Registered? <span className='LINK' onClick={()=>setToggle(true)}>Login here</span></p>
        </div>
      
    </div>
  )
}

export default SignUp
