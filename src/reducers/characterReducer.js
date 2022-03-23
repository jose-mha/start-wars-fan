import { SET_CHARACTERS, TOGGLE_LOADER, SET_FAVORITE } from '../actions/types';

const initialState = {
  charactersList: [],
  loading: false,
};

// TODO: actions creators(creadores de acciones)
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, charactersList: action.payload };
    case SET_FAVORITE:
      const newCharacterList = [...state.charactersList];
      const currentCharacterIndex = newCharacterList.findIndex((element) => element.name.replace(/ /g, '') === action.payload.characterId);

      if (currentCharacterIndex >= 0) {
        newCharacterList[currentCharacterIndex].favorite = !newCharacterList[currentCharacterIndex].favorite;
      }

      return { ...state, charactersList: newCharacterList };
    case TOGGLE_LOADER:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default characterReducer;
