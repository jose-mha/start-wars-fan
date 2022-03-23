import { SET_CHARACTERS, TOGGLE_LOADER } from './types';

// TODO: actions(acciones)
export const setCharacters = (payload) => ({
  type: SET_CHARACTERS,
  payload,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});
