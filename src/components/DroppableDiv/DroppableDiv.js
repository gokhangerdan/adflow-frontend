import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Node from '../Node/Node';

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
      ref={drop}
      style={{
        height: '100vh',
        backgroundColor: isOver ? 'gray' : 'white',
        backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}
    >
      {items.map((item, index) => (
        <Node key={index} name={item.name} />
      ))}
    </div>
  );
}

export default DroppableDiv;
