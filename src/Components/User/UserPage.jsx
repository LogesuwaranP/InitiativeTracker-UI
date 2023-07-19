import React, { useEffect } from 'react'
import UserCard from './UserCard'
import Userprofile from '../Userprofile/Userprofile'

function UserPage() {


    useEffect(()=>{
        

    },[])

  return (
    <div className='user-page-main'>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </div>
  )
}

export default UserPage
