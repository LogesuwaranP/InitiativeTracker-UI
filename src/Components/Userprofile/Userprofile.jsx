import React , { useState } from 'react'
import "./Userprofile.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import DataContext from '../../Data/DataContext';
import axios from 'axios';
const Userprofile = ({createdTime,name,title,shortdescription,longdescription, id}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { authMiddleware, auth, summary,setSummary} = useContext(DataContext);
    const[status, setStatus] = useState("");


  const handleFlip = () => {
    axios.post("https://localhost:7265/api/TaskApprover", 
        {
          approverId:auth.id,
          taskId:id,
          feedback:summary,
          status:status
        }        
        ).then((response)=>{
          axios.put('https://localhost:7265/api/Idea/update/id', {
              id:id,
              status:"To Do"
            }).then(()=>{
              
            })
          console.log(response.data);
          setSummary("");
          setIsFlipped(!isFlipped);
        })

  };
    return(
        <div  className={`userprofile-flip-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="userprofile-flipper">
        <div className='userprofile-card-front'>
        <div className='userprofile-date'>{createdTime} <IconButton><InfoIcon sx={{color:'#13266b'}}/></IconButton> </div>
        <div className='userprofile-detail'><b>{name}</b>
        <span className='userprofile-idea'>{title}</span>
        <p className='userprofile-content'>{shortdescription} </p>
        </div>
        <div className='userprofile-card'>
        <hr/>
        <div className='userprofile-icon' ><IconButton onClick={()=>{handleFlip();setStatus("Accepted")}} sx={{fontSize:'20px'}}>< CheckCircleOutlineIcon className='userprofile-approved' sx={{fontSize:'30px'}} /></IconButton><IconButton onClick={()=>{handleFlip();setStatus("Rejected")}}><CancelOutlinedIcon className='userprofile-rejected' sx={{fontSize:'30px'}}/></IconButton></div>  
        </div>      
        </div>
        <div className='userprofile-back'>
            <div className='userprofile-back-con'>
         <div className='userprofile-reason'>Reason:<textarea type='text' placeholder='Enter the Reason' className='userprofile-input' onChange={(e)=>setSummary(e.target.value)} /></div>
         <div className='userprofile-submit-div'> <button className='userprofile-submit' onClick={handleFlip}>submit</button></div>
         </div>
        </div>
        </div>
        </div>
    )
}

export default Userprofile;