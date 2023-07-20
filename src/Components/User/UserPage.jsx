import React, { useEffect } from 'react'
import UserCard from './UserCard'
import Userprofile from '../Userprofile/Userprofile'
import Search from '../Search/Search'

function UserPage() {


    useEffect(()=>{
        

    },[])

  return (
   <>
   <div> <Search /></div>
 
    <div className='user-page-main'>
    
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      {/* <Userprofile/>
      <Userprofile/>
      <Userprofile/><Userprofile/><Userprofile/><Userprofile/> */}

    </div>
    </>
  )
}

export default UserPage
