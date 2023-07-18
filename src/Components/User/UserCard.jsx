import React from 'react'

import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

import Badge from '@mui/material/Badge';




import StarOutlineIcon from '@mui/icons-material/StarOutline';

import "./User.css";




const UserCard = () => {




  return (

    

       

    <div className='usercard-content'>

      <div className='usercard-name'><b>Meena</b></div>

      <div className='usercard-mail'>meena12344@gmail.com</div>

      <div className='usercard-img'><img  src='https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-picture-natural-light.jpg' className='usercard-userimg'/></div>

      <div className='usercard-icon'><button className='usercard-icons'><Badge badgeContent={5} color="secondary" ><StarOutlineIcon /></Badge></button><button className='usercard-icons'><Badge badgeContent={7} color="secondary" ><EmojiObjectsOutlinedIcon /></Badge></button></div>

      <div className='usercard-bio'>professionally qualified fire engineer with 7 years experience.</div>

      <div className='usercard-button'><div className='SUBMIT usercard-edit'>Edit</div></div>

    </div>

  )

}




export default UserCard;