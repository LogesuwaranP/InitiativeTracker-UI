import React, { useLayoutEffect, useContext, useState, useEffect } from "react";
import "./EditProfile.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Badge from "@mui/material/Badge";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import TextBox from "../TextBox/TextBox";
import DataContext from "../../Data/DataContext";
import axios from "axios";

const EditProfile = () => {

    const {authMiddleware,auth} = useContext(DataContext);
    console.log(auth.id);
    useLayoutEffect(()=>{
        authMiddleware();

    },[])



const [user, setUser] = useState({});

useEffect(() => {
    axios
       .get(`https://localhost:7265/api/User`)
       .then((response) => {
          setUser(response.data.value[auth.id-1]);
          //console.log(response.data);
       
       })

       //console.log(auth);
 }, []);

//  useEffect(() => {
//     axios
//        .put(`https://localhost:7265/api/User/updatedetails/${id}`)
//        .then((response) => {
//           setupdateUser(response.info);
       
//        })
//  }, []);


const [bio, setBio] = useState('');
// const [id1, setid1] = useState('');



  
  const updateData = async () => {

    const alldata = {...user, bio:bio};
    console.log(alldata, bio);
      await axios.put(`https://localhost:7265/api/User/updatedetails/${auth.id}`, alldata).then((response)=>{
    await axios
      .put(`https://localhost:7265/api/User/updatedetails/${auth.id}`, {
        ...user,
        bio: bio,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert("Line 123");
        console.log(error);
      });
  };

  const [ideas, setIdeas] = useState({});
  const [ideas1, setIdeas1] = useState({});
  useEffect(() => {
    axios.get(`https://localhost:7265/api/User/${auth.id}`).then((response) => {
      console.log(response.data);
      setIdeas(response.data);
    });
    axios
      .get(`https://localhost:7265/api/Idea/get/${auth.id}`)
      .then((response) => {
        console.log(response.data);
        setIdeas1(response.data);
      });
  }, []);

  return (
    <div className="editProfile-container">
      <div className="editProfile-upload">
        <div>
          <h2>{ideas.userName}</h2>
          <div className="editProfile-usertype">
            <ManageAccountsOutlinedIcon />
            <p>{ideas.role?.type}</p>
          </div>
        </div>
        <div className="picture">
          <img src="https://i.pinimg.com/originals/b3/2c/9c/b32c9c4854abc5925c2d64ee046f02f7.jpg"></img>
        </div>
        <div className="editProfile-icons">
          <Badge badgeContent={ideas.rating} color="primary">
            <StarBorderIcon />
          </Badge>
          <Badge badgeContent={ideas1.length} color="primary">
            <EmojiObjectsOutlinedIcon />
          </Badge>
        </div>
        <div className="SUBMIT upload-photo">Update Profile</div>
        <div className="size-message">
          {" "}
          Upload Your Display Picture less than 2MB
        </div>
        <p>Member Since {ideas.created_time}</p>
      </div>
      <div className="editProfile-content">
        <div className="editProfile-title">
          <h2>Edit Profile</h2>
        </div>
        <div>
          <div className="editProfile-info">
            <form action="">
              <label htmlFor="Name">User Name</label>
              <input value={user.userName} className="" disabled />
            </form>

            <form action="">
              <label htmlFor="Name">Email </label>
              <input value={user.email} className="" disabled />
            </form>
            <form action="">
              <label htmlFor="Name">Mobile Number </label>
              <input
                value={user.mobile_number}
                onChange={(e) =>
                  setUser({ ...user, mobile_number: e.target.value })
                }
              />
              {/* value={updateUser.mobile_number}  */}
              {/* onChange ={(e)=>{setupdateUser({...updateUser,mobile_number: e.target.value})}} */}
            </form>
            <form action="">
              <label htmlFor="Name">Secondary Email </label>
              <input
                value={user.secondary_email}
                onChange={(e) =>
                  setUser({ ...user, secondary_email: e.target.value })
                }
              />
            </form>
            <form action="">
              <label htmlFor="Name">Data of Birth</label>
              <input
                value={user.dob}
                onChange={(e) => setUser({ ...user, dob: e.target.value })}
                className="date-input"
                type="date"
              />
            </form>
            <form action="">
              <label htmlFor="Name">Blood Group</label>
              <input
                value={user.blood_grop}
                onChange={(e) =>
                  setUser({ ...user, blood_grop: e.target.value })
                }
              />
            </form>

            <form action="">
              <label htmlFor="Name">LinkedIn </label>
              <input
                value={user.linkedin}
                onChange={(e) => setUser({ ...user, linkedin: e.target.value })}
              />
            </form>
            <form action="">
              <label htmlFor="Name">Instagram </label>
              <input
                value={user.instagram}
                onChange={(e) =>
                  setUser({ ...user, instagram: e.target.value })
                }
              />
            </form>
            <div className="bio">
              <label htmlFor="Name">Your Bio</label>
              <TextBox
                mxhight={120}
                mihight={42}
                value={bio}
                setValue={setBio}
              />
            </div>
          </div>
        </div>

        <div className="editProfile-footer">
          <div onClick={updateData} className="SUBMIT update-info">
            Update Info
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
