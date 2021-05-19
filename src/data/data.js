export const stats = {
  level: 1,
  cash: 0,
  silverKeys: 0,
  goldKeys: 0,
  nekogames: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  exp: 0,
  xpToNext: 100,
  life: 100,
  maxLife: 100,
  act: 50,
  maxAct: 50,
  recover: 10,
  atk: 10,
  maxAtk: 10,
  def: 10,
  maxDef: 10,
};

export const corp = {
  width: 752,
  height: 582,
  gutter: 3,
  nodes: [
    { id: 1, pos: '0,0,44,14', health: 25, def: 0, cpp: 5, xpp: 10, lock: false, type: 'open' },
    { id: 2, pos: '47,0,61,14', lock: false, type: 'open' },
    { id: 3, pos: '0,17,108,14', lock: true, type: 'ice' },
    { id: 4, pos: '0,34,35,31', lock: false, type: 'ice' },
    { id: 5, pos: '38,34,69,14', lock: false, type: 'open' },
    { id: 6, pos: '38,51,69,14', lock: false, type: 'open' },
  ]
};
