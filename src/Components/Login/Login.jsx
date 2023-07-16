import React from 'react'
import "./Login.css"
import { useContext } from 'react'
import DataContext from '../../Data/DataContext'

const Login = () => {
  const{setEmail, setPassword,setToggle, checkValues} = useContext(DataContext)

  return (
    <div className='login-container'>
      <div>
          <h1>Welcome Back!</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, dolor.</p>
      </div>
      <div>
          <form action="">
              <label htmlFor="Name">Email </label>
              <input placeholder='E-mail' type='email' onChange={(e)=>setEmail(e.target.value)}/>
          </form>
          <form action="">
              <label htmlFor="Name">Password</label>
              <input placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
          </form>
          
          
          <div className='SUBMIT login' onClick={checkValues}>Login</div>
      </div>     
      <p>Don't have an account? <span className='LINK' onClick={()=>setToggle(false)}>Register here</span></p>
      
    </div>
  )
}

export default Login
