import React, {useState, useContext,useEffect } from 'react'
import DataContext from '../../Data/DataContext'
import { useNavigate } from 'react-router-dom';
import UserCard from '../UserCard/User';
const User = () => {
  const navigate = useNavigate();
  const {auth} = useContext(DataContext);
  


  
  return (
    <div className='user-container'>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  )
}

export default User
