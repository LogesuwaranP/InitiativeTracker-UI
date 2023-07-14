import React from 'react'
import "./EditProfile.css"
import CuzInput from '../CuzInput/CuzInput'

const EditProfile = () => {
  return (
    <div className='editProfile-container'>
        <div className='editProfile-upload'>

        </div>
        <div className='editProfile-content'>
            <div className='editProfile-title'>
                <h2>Edit Profile</h2>
            </div>
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
                    <label htmlFor="Name">Email </label>
                    <input className='' disabled/>
                </form>
                <form action="">
                    <label htmlFor="Name">Email </label>
                    <input className='' disabled/>
                </form>
                <div className='bio'>
                    <CuzInput/>
                    {/* <textarea rows="6" cols="50"/> */}
                </div>
                   
                
                
                {/* <input className=''/>
                <input className=''/>
                <input className=''/>
                <input className=''/>
                <input className=''/>
                <input className=''/> */}

            </div>
            <div className='editProfile-footer'>
                <div className='SUBMIT update-info'>Update Info</div>                
            </div>            
        </div>
           
    </div>
  )
}

export default EditProfile
