import React, {useState, useContext,useEffect } from 'react'
import DataContext from '../../Data/DataContext'
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const {auth} = useContext(DataContext);
  useEffect(()=>{
    if(auth!=="user")
    {
      navigate("/")
    }
  },[])


  
  return (
    <div>
      <h1>User page </h1>
      
    </div>
  )
}

export default User
