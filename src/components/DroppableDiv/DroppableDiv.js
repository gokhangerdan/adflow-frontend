import { useDrop } from 'react-dnd';

function DroppableDiv() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "node", // Specify the type of item that can be dropped
    drop: (item, monitor) => {
      // Handle the dropped item
      console.log('Item dropped:', item);
      console.log('Dropped at:', monitor.getClientOffset());
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? 'green' : 'white' }}>
      {/* Your content goes here */}
      {isOver && (
      <div className="Workflow">

      </div>
      )}
    </div>
  );
}

export default DroppableDiv;