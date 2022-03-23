import { SET_CHARACTERS, TOGGLE_LOADER, SET_FAVORITE, DELETE_FAVORITE, ADD_CHARACTERS, IT_LOADED, NUM_PAGE } from './types';

// TODO: actions(acciones)
export const setCharacters = (payload) => ({
  type: SET_CHARACTERS,
  payload,
});

export const addCharacters = (payload) => ({
  type: ADD_CHARACTERS,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: DELETE_FAVORITE,
  payload,
});

export const numPage = (payload) => ({
  type: NUM_PAGE,
  payload,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});

export const itLoaded = () => ({
  type: IT_LOADED,
});
