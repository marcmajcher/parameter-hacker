function useNode(node) {


  const statii = {
    open: `${0}%`,
    ice: `${node.health}/${node.health}`,
  };

  return {
    className: `corp-node ${node.type}`,
    lock: node.lock ? '🔒' : '',
    position: {
      left: node.x,
      top: node.y,
      width: `${node.w}px`,
      height: `${node.h}px`,
    },
    status: statii[node.type] || '',
  };
}



export default useNode;
