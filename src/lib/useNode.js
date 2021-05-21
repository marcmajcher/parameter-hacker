import { useState } from 'react';
import { useSelector } from 'react-redux';
import useDice from './useDice';

function useNode(node) {
  const [progress, setProgress] = useState(0);
  const playerInfo = useSelector(s => s.playerInfo);
  const roll = useDice(); 

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

    if (node.type === 'open') {
      const playerProgress = playerInfo.missionStr + roll(playerInfo.missionSwing) - (playerInfo.missionSwing / 2)
      const missionProgress = Math.round(playerProgress / node.missionSize * 100);

      setProgress(Math.min(100, progress + missionProgress));
    }
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
