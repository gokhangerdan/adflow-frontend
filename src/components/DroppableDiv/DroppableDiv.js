import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Node from '../Node/Node';
import './DroppableDiv.css';

function DroppableDiv() {
  const [items, setItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "node", // Specify the type of item that can be dropped
    drop: (item, monitor) => {
      // Handle the dropped item
      console.log('Item dropped:', item);
      console.log('Dropped at:', monitor.getClientOffset());
      setItems((prevState) => [...prevState, item]);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      className="DropArea"
      ref={drop}
      style={{
        backgroundColor: isOver ? 'gray' : 'white'
      }}
    >
      {items.map((item, index) => (
        <Node key={index} name={item.name} />
      ))}
    </div>
  );
}

export default DroppableDiv;
