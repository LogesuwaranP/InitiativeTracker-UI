import React , { useState } from 'react'
import "./Userprofile.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
const Userprofile = () => {
    const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
    return(
        <div  className={`userprofile-flip-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="userprofile-flipper">
        <div className='userprofile-card-front'>
        <div className='userprofile-date'>13/06/2023 <IconButton><InfoIcon sx={{color:'#13266b'}}/></IconButton> </div>
        <div className='userprofile-detail'><b>Dhivya</b>
        <span className='userprofile-idea'>professionally qualified fire engineer with 7 years experience.</span>
        <p className='userprofile-content'>The status colors are considered  of User Experience. This is not  scheme, but  are actionable. </p>
        </div>
        <div className='userprofile-card'>
        <hr/>
        <div className='userprofile-icon' ><IconButton onClick={handleFlip} sx={{fontSize:'20px'}}>< CheckCircleOutlineIcon className='userprofile-approved' sx={{fontSize:'30px'}} /></IconButton><IconButton onClick={handleFlip}><CancelOutlinedIcon className='userprofile-rejected' sx={{fontSize:'30px'}}/></IconButton></div>  
        </div>      
        </div>
        <div className='userprofile-back'>
            <div className='userprofile-back-con'>
         <div className='userprofile-reason'>Reason:<textarea type='text' placeholder='Enter the Reason' className='userprofile-input'/></div>
         <div className='userprofile-submit-div'> <button className='userprofile-submit' onClick={handleFlip}>submit</button></div>
         </div>
        </div>
        </div>
        </div>
    )
}

export default Userprofile;