import { SET_CHARACTERS, TOGGLE_LOADER, SET_FAVORITE, DELETE_FAVORITE, ADD_CHARACTERS, IT_LOADED, NUM_PAGE } from '../actions/types';

const initialState = {
  charactersList: [],
  loading: false,
  itLoaded: false,
  page: 2,
};

const setFavorite = (charactersList, characterId, itDelete = false) => {
  const newCharacterList = charactersList;
  const currentCharacterIndex = newCharacterList.findIndex((element) => element.name.replace(/ /g, '') === characterId);

  if (currentCharacterIndex >= 0) {
    if (itDelete) {
      newCharacterList[currentCharacterIndex].favorite = false;
    } else {
      newCharacterList[currentCharacterIndex].favorite = true;
    }
  }

  return newCharacterList;
};

// TODO: actions creators(creadores de acciones)
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, charactersList: action.payload };

    case ADD_CHARACTERS:
      return { ...state, charactersList: [...state.charactersList, ...action.payload] };

    case SET_FAVORITE:
      return {
        ...state,
        charactersList: setFavorite([...state.charactersList], action.payload.characterId),
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        charactersList: setFavorite([...state.charactersList], action.payload.characterId, true),
      };

    case NUM_PAGE:
      return { ...state, page: action.payload };

    case TOGGLE_LOADER:
      return { ...state, loading: !state.loading };

    case IT_LOADED:
      return { ...state, itLoaded: !state.itLoaded };

    default:
      return state;
  }
};

export default characterReducer;
