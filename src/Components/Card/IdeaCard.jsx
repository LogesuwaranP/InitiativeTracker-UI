import React from 'react'
import "./IdeaCard.css"
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';



const IdeaCard = ({id,title,status}) => {

  const navigate = useNavigate();
  console.log(id);

  return (
    <div className='ideacard-container'>
        <h4>Idea - {id} </h4>
        <p>{title}</p>
        <div className='ideacard-icon'>
            <div><IconButton color="primary" ><FavoriteIcon color="primary" /></IconButton></div>
            <div onClick={()=>navigate(`/idea-detailes/${id}`)}><IconButton><InfoIcon/></IconButton></div>
            <div className='profile'>S</div>
            
        </div>
    </div>
  )
}

export default IdeaCard
