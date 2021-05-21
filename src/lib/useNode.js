import { useState } from 'react';

function useNode(node) {
  const [progress, setProgress] = useState(0);

  const className = `corp-node ${node.type}`;
  const complete = progress >= 100;
  const lock = node.lock ? '🔒' : '';
  const position = {
    left: node.x,
    top: node.y,
    width: `${node.w}px`,
    height: `${node.h}px`,
  };
  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: progress >= 100 ? '#441' : progress > 0 ? 'green' : 'inherit',
    color: progress >= 100 ? 'black' : 'white'
  };
  const statii = {
    open: `${progress}%`,
    ice: `${node.health}/${node.health}`,
  };
  const status = statii[node.type] || '';

  function click() {
    if (node.lock || complete) {
      return;
    }
    setProgress(Math.min(100, progress + 5));
  }

  return {
    className,
    click,
    complete,
    lock,
    position,
    status,
    progressStyle
  };
}

export default useNode;
