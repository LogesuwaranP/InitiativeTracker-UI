import React from 'react'
import "./IdeaCard.css"
import { useNavigate } from 'react-router-dom'

const IdeaCard = ({TaskId,Title,Status}) => {

  const navigate = useNavigate();

  return (
    <div className='ideacard-container'>
        <h4>Idea - {TaskId} </h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='ideacard-icon'>
            <div>❤</div>
            <div onClick={()=>navigate("/idea-detailes")}>!</div>
            <div className='profile'>S</div>
            
        </div>
    </div>
  )
}

export default IdeaCard
