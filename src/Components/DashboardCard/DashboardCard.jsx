import "./DashboardCard.css";
import React, { useLayoutEffect, useContext, useState, useEffect } from "react";
import axios from "axios";
export default function DashboardCard() {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    axios
      .get(`https://localhost:7265/api/Idea/highestlike`)
      .then((response) => {
        console.log(response.data);
        setIdeas(response.data);
      });
  }, []);

  return (
    <div className="CardContainer">
      <div className="Card">
        <div className="DashboardCard-cont">
          <h2 className="Color">1500</h2>
          <h5 className="color2">Most liked post</h5>
        </div>
        <img
          className="img1"
          src="https://cdn-icons-png.flaticon.com/128/2854/2854304.png"
        ></img>
        <div className="name color3">
          <p>{ideas.title}</p>
        </div>
      </div>
      <div className="Card">
        <div>
          <h2 className="Color">9.4</h2>
          <h5 className="color2">Most rated User</h5>
        </div>
        <img
          className="img2"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        ></img>
        <div className="name color3">
          <p>Abcd</p>
        </div>
      </div>
      <div className="Card">
        <div>
          <h2 className="Color">120</h2>
          <h5 className="color2"> User with Post</h5>
        </div>
        <img
          className="img3"
          src="https://static.thenounproject.com/png/141508-200.png"
        ></img>
        <div className="name color3">
          <p>Abcd</p>
        </div>
      </div>
    </div>
  );
}
