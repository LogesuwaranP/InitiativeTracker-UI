import React from "react";
import "./MessageBox.css";
import { useContext } from "react";
import DataContext from "../../Data/DataContext";
import { useEffect } from "react";
function MessageBox({ url, text }) {
  const { message, setMessage,errorMessage,seterrorMessage, messageContent, setmessageContent } =
    useContext(DataContext);
  useEffect(() => {
    console.log("text", messageContent);
    if (message) {
      setTimeout(() => {
        setMessage(false);
      }, 3000);
      console.log("In lmessage");
    }
  }, [message]);
  return (
    <>
      {message ? (
        <div className="FlexBox">
          <div className="MessageBoxContainer">
            {/* https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png */}
            <img className = "MessageBoxPicture" src={messageContent ? "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png":"data:image/png;base64,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"} />
            <h3>{errorMessage} </h3>
            {/* {messageContent ? "Success" : "Failed"}! */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default MessageBox;
