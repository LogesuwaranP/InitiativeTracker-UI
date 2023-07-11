import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DataContext from '../../Data/DataContext';


const Admin = () => {
  const navigate = useNavigate();
  const {auth} = useContext(DataContext);
  useEffect(()=>{
    if(auth!=="Admin")
    {
      navigate("/")
    }
  },[])

  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  )
}

export default Admin
