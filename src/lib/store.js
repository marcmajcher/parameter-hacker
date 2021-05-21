import { createStore } from 'redux';

const initialState = {
  playerInfo: {
    level: 1,
    cash: 0,
    key1: 0,
    key2: 0,
    xp: 0,
    xpNext: 100,
    life: 100,
    lifeMax: 100,
    action: 50,
    actionMax: 50,
    codeword: 'PARAMETERS',
    recover: 10,
    attack: 10,
    attackMax: 10,
    defense: 10,
    defenseMax: 10,
    missionStr: 100,
    missionSwing: 10,
  },
  log: [{time: Date.now(), message: 'OUTPUT'}],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGGER':
      return {...state, log: [...state.log, action.payload]}
    default:
      return state;
  }
}

export const store = createStore(reducer, initialState);
