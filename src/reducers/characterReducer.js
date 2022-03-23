import { SET_CHARACTERS } from '../actions/types';

const initialState = {
  listCharacters: [],
};

// TODO: actions creators(creadores de acciones)
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, listCharacters: action.payload };
    default:
      return state;
  }
};

export default characterReducer;
