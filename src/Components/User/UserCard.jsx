import React, { useState } from 'react';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Badge from '@mui/material/Badge';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import "./User.css";
import Rating from '../Rating/Rating';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`usercard-flip-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="usercard-flipper">
        <div className='usercard-front'>
          <div className='usercard-name'><b>Meena</b></div>
          <div className='usercard-mail'>meena12344@gmail.com</div>
          <div className='usercard-img'>
            <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-picture-natural-light.jpg' className='usercard-userimg' alt="User" />
          </div>
          <div className='usercard-icon'>
            <button className='usercard-icons'>
              <Badge badgeContent={5} color="secondary">
                <StarOutlineIcon />
              </Badge>
            </button>
            <button className='usercard-icons'>
              <Badge badgeContent={7} color="secondary">
                <EmojiObjectsOutlinedIcon />
              </Badge>
            </button>
          </div>
          <div className='usercard-bio'>professionally qualified fire engineer with 7 years experience.</div>
          <div className='usercard-button'>
            <div className='usercard-edit SUBMIT' onClick={handleFlip}>
            Edit
            </div>
          </div>
        </div>
        <div className='usercard-back'>
          <div className='usercard-back-con'>
          <div className='usercard-back-name'><b>Dhivya</b></div>
          <div className='usercard-back-rating' >Rating: <Rating/></div>
          <div className='usercard-back-Role'><select>
              <option value="Approver"  className='usercard-back-drop-down'>Approver</option>

               <option value="ReadOnly"  className='usercard-back-drop-down'>ReadOnly</option>
</select>
</div>
          <button className='usercard-submit' onClick={handleFlip}>submit</button>
        </div></div>
      </div>
    </div>
  );
};

export default Card;
