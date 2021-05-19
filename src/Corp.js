import React from 'react';
import './Corp.css';
import CorpNode from './CorpNode';
const corpMargin = 10;

export default function Corp({ corp }) {
  console.log(corp);

  const shellStyle = {
    width: `${corp.width + corpMargin*2}px`,
    height: `${corp.height + corpMargin*2}px`,
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
