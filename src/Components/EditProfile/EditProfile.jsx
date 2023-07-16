import React from 'react'
import "./EditProfile.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Badge from '@mui/material/Badge';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import TextBox from '../TextBox/TextBox';


const EditProfile = () => {
  return (
    <div className='editProfile-container'>
        <div className='editProfile-upload'>
            <div>
                <h2>User Name</h2>
                <div className='editProfile-usertype'>
                    <ManageAccountsOutlinedIcon/>
                    <p> User</p>
                </div>
                

            </div>
            
            <div className='picture'> 
                <img src='https://i.pinimg.com/originals/b3/2c/9c/b32c9c4854abc5925c2d64ee046f02f7.jpg'></img>
            </div>
            <div className='editProfile-icons'>
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
        <div className='editProfile-content'>
            <div className='editProfile-title'>
                <h2>Edit Profile</h2>
            </div>
            <div>
            <div className='editProfile-info'>
                <form action="">
                    <label htmlFor="Name">User Name</label>
                    <input className='' disabled/>
                </form>

                <form action="">
                    <label htmlFor="Name">Email </label>
                    <input className='' disabled/>
                </form>
                <form action="">
                    <label htmlFor="Name">Mobile Number </label>
                    <input className='' />
                </form>
                <form action="">
                    <label htmlFor="Name">Secondary Email </label>
                    <input className='' />
                </form>
                <form action="">
                    <label htmlFor="Name">Data of Birth</label>
                    <input className='date-input' type='date'/>
                </form>
                <form action="">
                    <label htmlFor="Name">Blood Group</label>
                    <input className=''   />
                </form>

                <form action="">
                    <label htmlFor="Name">LinkedIn </label>
                    <input className='' />
                </form>
                <form action="">
                    <label htmlFor="Name">Instagram </label>
                    <input className='' />
                </form> 
                <div className='bio'>
                        <label htmlFor="Name">Your Bio</label>
                        <TextBox mxhight={120} mihight={42}/>                   
                </div>                  
            </div>
            
                
            </div>                   
                        
            <div className='editProfile-footer'>
                <div className='SUBMIT update-info'>Update Info</div>                
            </div>            
        </div>
           
    </div>
  )
}

export default EditProfile



