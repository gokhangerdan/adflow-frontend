import React, { useState } from 'react';
import './NodeCategory.css';
import Node from '../Node/Node';

function NodeCategory(props) {
  const [isNestedVisible, setIsNestedVisible] = useState(false);

  function handleToggleNested() {
    setIsNestedVisible(prevState => !prevState);
  }

  return (
    <div>
      <ul id="myUL">
        <li>
          <span className={`caret ${isNestedVisible ? 'caret-down' : ''}`} onClick={handleToggleNested}>
            <i className="fas fa-caret-right"></i>
            {props.name}
          </span>
          <ul className={`nested ${isNestedVisible ? 'active' : ''}`}>
            {props.nodes.map((item, index) => <Node key={index} name={item} />)}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default NodeCategory;