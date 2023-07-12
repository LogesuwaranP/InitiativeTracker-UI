import React, { useState } from 'react';

const DragAndDrop = () => {
  const [draggingItem, setDraggingItem] = useState(null);
  const [column1Items, setColumn1Items] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [column2Items, setColumn2Items] = useState(['Item 4', 'Item 5', 'Item 6']);

  const handleDragStart = (e, item) => {
    setDraggingItem(item);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    if (draggingItem) {
      if (targetColumn === 'column1') {
        const updatedColumn1Items = [...column1Items, draggingItem];
        setColumn1Items(updatedColumn1Items);
      } else if (targetColumn === 'column2') {
        const updatedColumn2Items = [...column2Items, draggingItem];
        setColumn2Items(updatedColumn2Items);
      }
    }
  };

  return (
    <div className="container">
      <div
        className="column"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'column1')}
      >
        <h2>Column 1</h2>
        {column1Items.map((item, index) => (
          <div
            key={index}
            className="item"
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={handleDragEnd}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        className="column"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'column2')}
      >
        <h2>Column 2</h2>
        {column2Items.map((item, index) => (
          <div
            key={index}
            className="item"
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={handleDragEnd}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
