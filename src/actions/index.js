import { SET_CHARACTERS, TOGGLE_LOADER, SET_FAVORITE } from './types';

// TODO: actions(acciones)
export const setCharacters = (payload) => ({
  type: SET_CHARACTERS,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});
