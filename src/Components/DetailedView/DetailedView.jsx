import React from "react";
import "./DetailedView.css"
import CommentCard from "../CommentCard/CommentCard";

const DetailedView = () => {
  return (
    <div className="detailed-idea-container">
      <div className="detailed-content">
        <div className="detailed-content-main">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <div className="detailed-all">
            <div>
              <h4>Owner</h4>
              <div className="NAME-CARD"></div>
            </div>
            <div>
              <h4>Contributors</h4>
              <div className="total-container">
                <div className="contributors-container">
                  <div className="NAME-CARD"></div>
                  <div className="NAME-CARD"></div>
                  <div className="NAME-CARD"></div>
                  <div className="NAME-CARD"></div>
                  <div className="NAME-CARD"></div>
                </div>
              </div>
            </div>
            <div>
              <h4>Created on</h4>
              <p>07/16/2023</p>
            </div>
            <div className="detailed-summary">
              <h4>Summary</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates officia saepe eius impedit, sapiente harum nulla incidunt architecto, eaque consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda officiis itaque saepe fugit obcaecati et accusamus officia, dignissimos enim?</p>  
            </div>
            
          </div>
        </div>
        <div className="long-description">
          <h2>Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tenetur officiis facilis, voluptate ipsam perferendis accusantium voluptatum nostrum similique incidunt enim totam repellat quaerat velit dolorem sit eveniet in odit sequi architecto quae. Suscipit hic nihil aperiam quas tempore delectus quaerat. Molestiae necessitatibus modi nulla sequi delectus praesentium tenetur reprehenderit quo ipsam perspiciatis! Aperiam quia excepturi omnis ratione non rerum alias nulla. Voluptatem consectetur voluptas culpa? Esse hic architecto fuga excepturi eaque ipsam sapiente debitis eius provident facere ea eos voluptatibus quibusdam, molestias fugiat dolor animi assumenda minus quisquam facilis laborum odit exercitationem laudantium alias. Assumenda consequatur quo voluptatibus tempora.</p>

        </div>
        <div className="detailed-idea-status">
          <h2>Status</h2>
          <div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" className="img-icon"/>
              <p>Approved</p>
            </div>
            <div className="approver-status">
              <p>Approver Name</p>
              <p>Sadham Usen</p>
            </div>
            <div className="approver-status">
              <p>Approved on</p>
              <p>07/16/2023</p>
            </div>

          </div>

        </div>
      </div>
      <div className="detailed-comments">
        <div>
          <form>
            <input placeholder="Enter Comments"/>
          </form>          
          <div><CommentCard/></div>
        </div>

      </div>
      
      
    </div>
  );
};

export default DetailedView;
