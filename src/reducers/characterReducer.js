import { SET_CHARACTERS, TOGGLE_LOADER } from '../actions/types';

const initialState = {
  charactersList: [],
  loading: false,
};

// TODO: actions creators(creadores de acciones)
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, charactersList: action.payload };
    case TOGGLE_LOADER:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default characterReducer;
