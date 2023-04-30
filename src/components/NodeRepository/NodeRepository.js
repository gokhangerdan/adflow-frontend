import './NodeRepository.css';
import NodeCategory from '../NodeCategory/NodeCategory';

function NodeRepository() {
  var categories = [
    {name: "IO", nodes:  ["Input", "Output"]},
    {name: "Manipulation", nodes:  ["Column", "Row"]},
    {name: "Action", nodes:  ["Create", "Update"]},
    {name: "Custom", nodes:  ["Python", "ChatGPT"]},
    {name: "LoopsAndConditions", nodes:  ["Loop", "If"]},
  ]
  return (
    <div>
      {categories.map((category, index) => (
        <NodeCategory key={index} name={category.name} nodes={category.nodes} />
      ))}
    </div>
  );
}

export default NodeRepository;