import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Badge from '@mui/material/Badge';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import './User.css'

const User = () => {

  return (
    <div className='usercard-container'>
            <div className='usercard-upload'>
            <div>
                <h2>User Name</h2>
                <div className='usercard-usertype'>
                    <ManageAccountsOutlinedIcon/>
                    <p> User</p>
                </div>
                

            </div>
            
            <div className='picture'> 
                <img src='https://i.pinimg.com/originals/b3/2c/9c/b32c9c4854abc5925c2d64ee046f02f7.jpg'></img>
            </div>
            <div className='usercard-icons'>
                <Badge badgeContent={4} color="primary">
                    <StarBorderIcon />
                </Badge>
                <Badge badgeContent={10} color="primary">
                    <EmojiObjectsOutlinedIcon/>
                </Badge>
                
            </div>
            <div className='SUBMIT upload-photo'>Update Profile</div>
            <div className='size-message'> Upload Your Display Picture less than 2MB</div>
            <p>Member Since 07/15/2023</p>

        </div>

    </div>

  )
}

export default User
