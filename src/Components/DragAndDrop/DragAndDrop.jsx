import React, { useState, useContext, useLayoutEffect } from "react";
import "./DragAndDrop.css";
import IdeaCard from "../Card/IdeaCard";
import DataContext from "../../Data/DataContext";
import CreateIdea from "../CreateIdea/CreateIdea";
import MessageBox from "../MessageBox/MessageBox";

const DragAndDrop = () => {
  const { authMiddleware } = useContext(DataContext);
  useLayoutEffect(() => {
    authMiddleware();
  }, []);

  const [toggle, setToggle] = useState(false);
  const [draggingItem, setDraggingItem] = useState(null);
  const {
    column1Items,
    setColumn1Items,
    column2Items,
    setColumn2Items,
    column3Items,
    setColumn3Items,
    column4Items,
    setColumn4Items,
    column5Items,
    setColumn5Items,
  } = useContext(DataContext);

  const handleDragStart = (e, item, column) => {
    console.log(item, column);
    setDraggingItem({ item, column });
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();

    if (draggingItem.column === targetColumn) return;

    console.log(draggingItem);

    if (draggingItem) {
      switch (targetColumn) {
        case "column1":
          setColumn1Items([...column1Items, draggingItem.item]);
          break;

        case "column2":
          setColumn2Items([...column2Items, draggingItem.item]);
          break;

        case "column3":
          setColumn3Items([...column3Items, draggingItem.item]);
          break;

        case "column4":
          setColumn4Items([...column4Items, draggingItem.item]);
          break;

        case "column5":
          setColumn5Items([...column5Items, draggingItem.item]);
          break;

        default:
          break;
      }

      if (targetColumn !== draggingItem.column) {
        switch (draggingItem.column) {
          case "column1":
            setColumn1Items(
              column1Items.filter((item) => item !== draggingItem.item)
            );
            break;

          case "column2":
            setColumn2Items(
              column2Items.filter((item) => item !== draggingItem.item)
            );
            break;

          case "column3":
            setColumn3Items(
              column3Items.filter((item) => item !== draggingItem.item)
            );
            break;

          case "column4":
            setColumn4Items(
              column4Items.filter((item) => item !== draggingItem.item)
            );
            break;

          case "column5":
            setColumn5Items(
              column5Items.filter((item) => item !== draggingItem.item)
            );
            break;

          default:
            break;
        }
      }
    }
  };

  return (
    <div className="scrolling-wrapper-flexbox">
      <MessageBox />
      {toggle ? (
        <CreateIdea setToggle={setToggle} />
      ) : (
        <div
          className="btn-create"
          onClick={() => {
            setToggle(true);
          }}
        >
          +
        </div>
      )}

      <div className="container">
        <div className="main-column">
          <h2>New Idea</h2>
          <div
            className="column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "column1")}
          >
            {column1Items.map((item, index) => (
              <div
                key={index}
                className="item"
                draggable
                onDragStart={(e) => handleDragStart(e, item, "column1")}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="main-column">
          <h2>To Do</h2>
          <div
            className="column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "column2")}
          >
            {column2Items.map((item, index) => (
              <div
                key={index}
                className="item"
                draggable
                onDragStart={(e) => handleDragStart(e, item, "column2")}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="main-column">
          <h2>In Progress</h2>
          <div
            className="column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "column3")}
          >
            {column3Items.map((item, index) => (
              <div
                key={index}
                className="item"
                draggable
                onDragStart={(e) => handleDragStart(e, item, "column3")}
                onDragEnd={handleDragEnd}
              >
                <IdeaCard />
              </div>
            ))}
          </div>
        </div>

        <div className="main-column">
          <h2>In Review</h2>
          <div
            className="column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "column4")}
          >
            {column4Items.map((item, index) => (
              <div
                key={index}
                className="item"
                draggable
                onDragStart={(e) => handleDragStart(e, item, "column4")}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="main-column">
          <h2>Done</h2>
          <div
            className="column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "column5")}
          >
            {column5Items.map((item, index) => (
              <div
                key={index}
                className="item"
                draggable
                onDragStart={(e) => handleDragStart(e, item, "column5")}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
