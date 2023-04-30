import './Flow.css';
import NodeRepository from '../components/NodeRepository/NodeRepository';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import DroppableDiv from '../components/DroppableDiv/DroppableDiv';

function Flow() {
  return (
    <div>
      <div className="Row">
        <div className="Column25">
          Node Repository
        </div>
        <div className="Column75">
          Workflow
        </div>
      </div>
      <div className="Row">
        <DndProvider backend={HTML5Backend}>
          <div className="Column25">
            <NodeRepository />
          </div>
          <div className="Column75">
            <DroppableDiv />
          </div>
        </DndProvider>
      </div>
    </div>
  );
}

export default Flow;
