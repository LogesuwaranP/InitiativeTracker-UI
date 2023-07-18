import React from 'react'
import "./Profile.css"
// import Nav from "../../Nav/Nav"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import InfoIcon from '@mui/icons-material/Info';

import IconButton from '@mui/material/IconButton';
import ViewCard from '../ViewCard/ViewCard';

const Profile = () => {
  return (
   <>
  
   <div className='ProfileBar'></div>
   <div className='ProfileContainer'>
      
   <img  className='ProfileImage' src="https://e1.pxfuel.com/desktop-wallpaper/161/735/desktop-wallpaper-7-things-to-know-about-stranger-things-star-natalia-dyer-aka-nancy-wheeler-video-natalia-dyer-stranger-things.jpg"></img>
<h4 className='ProfileUser'>User Name</h4>
<h6 className="role">User</h6>
<p className='Bio'>"I'm Jane Hong, and I recently graduated with an advanced diploma from Smith secondary school. I'm seeking an internship where I can apply my skills in content creation and increase my experience in digital marketing."</p>
<div className='icon'>
  <img src="https://img.icons8.com/?size=1x&id=13930&format=png"></img>
  <img src="https://img.icons8.com/?size=1x&id=Xy10Jcu1L2Su&format=png"></img>
</div>
</div>

  

   <ViewCard/>
    

   </>
  )
}

export default Profile