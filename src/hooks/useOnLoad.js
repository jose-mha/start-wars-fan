import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters, toggleLoader, itLoaded } from '../actions';

import { getCharacters } from '../api';

const useOnLoad = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.itLoaded);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        dispatch(toggleLoader());

        const response = await getCharacters();

        dispatch(setCharacters(response.results));
        dispatch(toggleLoader());
        dispatch(itLoaded());
      } catch (error) {
        dispatch(toggleLoader());
      }
    };

    if (loaded) return;

    fetchCharacters();
  }, []);
};

export default useOnLoad;
