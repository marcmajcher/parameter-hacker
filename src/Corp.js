import React from 'react';
import './Corp.css';
import CorpNode from './CorpNode';
const corpMargin = 10;

export default function Corp({ corp }) {
  const shellStyle = {
    width: `${corp.width + corpMargin * 2}px`,
    height: `${corp.height + corpMargin * 2}px`,
  };
  const corpStyle = {
    width: `${corp.width}px`,
    height: `${corp.height}px`,
  };

  return <div className="corp-shell" style={shellStyle}>
    <div className="corp-network" style={corpStyle}>
      {corp.nodes.map(node => <CorpNode key={node.id} node={node} />)}
    </div>
  </div>;
}



  // let info;
  // const infoList = [];
  // function startDrag(e) {
  //   info = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
  // }
  // function stopDrag(e) {
  //   info.width = e.nativeEvent.offsetX - info.x;
  //   info.height = e.nativeEvent.offsetY - info.y;
  //   infoList.push({ ...info });
  // }
  // function dump() {
  //   console.log(JSON.stringify(infoList));
  // }
  // onMouseDown={startDrag} onMouseUp={stopDrag} onClick={dump}

