import React from "react";
import "./DetailedView.css"

const DetailedView = () => {
  return (
    <div className="detailed-idea-container">
      <h1>Title</h1>

      <h3 className="detailed-idea-description">Short Description</h3>

      <h4 className="detailed-idea-time">Created Time</h4>

      <div className="detailed-idea-People">
        <div className="detailed-idea-assigneeCont">
          <h3>Assignee</h3>

          <div className="detailed-idea-image"></div>
        </div>

        <div className="detailed-idea-assigneeCont">
          <h3>Contributors</h3>

          <div className="detailed-idea-image"></div>

          <div className="detailed-idea-image"></div>

          <div className="detailed-idea-image"></div>
        </div>
      </div>

      <div className="detailed-idea-ApprovalCont">
        <div>
          <p className="detailed-idea-approval">Approved By</p>

          <p>KHAASH</p>
        </div>

        <div>
          <p className="detailed-idea-approval">Approved At</p>

          <p>13 Jul 17:00</p>
        </div>
      </div>

      <h3 className="detailed-idea-description">Long Description</h3>

      <button className="edit">Edit</button>

      <div>
        <h3>Comment</h3>
      </div>
    </div>
  );
};

export default DetailedView;
