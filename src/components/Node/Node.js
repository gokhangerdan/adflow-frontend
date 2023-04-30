import './Node.css';
import { MdInput } from 'react-icons/md';
import { MdOutput } from 'react-icons/md';
import { AiOutlineInsertRowAbove } from 'react-icons/ai';
import { AiOutlineInsertRowLeft } from 'react-icons/ai';
import { MdCreate } from 'react-icons/md';
import { GrUpdate } from 'react-icons/gr';
import { FaPython } from 'react-icons/fa';
import { MdChat } from 'react-icons/md';
import { ImLoop } from 'react-icons/im';
import { TbLogicAnd } from 'react-icons/tb';

import { useDrag } from 'react-dnd'

function Node({ name }) {
  let IconComponent;

  switch (name) {
    case 'Input':
      IconComponent = MdInput;
      break;
    case 'Output':
      IconComponent = MdOutput;
      break;
    case 'Column':
      IconComponent = AiOutlineInsertRowAbove;
      break;
    case 'Row':
      IconComponent = AiOutlineInsertRowLeft;
      break;
    case 'Create':
      IconComponent = MdCreate;
      break;
    case 'Update':
      IconComponent = GrUpdate;
      break;
    case 'Python':
      IconComponent = FaPython;
      break;
    case 'ChatGPT':
      IconComponent = MdChat;
      break;
    case 'Loop':
      IconComponent = ImLoop;
      break;
    case 'Condition':
      IconComponent = TbLogicAnd;
      break;
    default:
      IconComponent = null;
  }

  const [{isDragging}, drag] = useDrag(() => ({
    type: "node",
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
    ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {IconComponent && (
        <li>
          <IconComponent /> {name}
        </li>
      )}
    </div>
  );
}

export default Node;