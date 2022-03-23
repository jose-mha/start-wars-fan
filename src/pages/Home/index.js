import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCharacters, toggleLoader } from '../../actions';
import { getCharacters } from '../../api';

import CharacterList from '../../components/CharacterList';
import Loader from '../../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const characters = useSelector((state) => state.charactersList);

  const fetchCharacters = async () => {
    try {
      dispatch(toggleLoader());

      const response = await getCharacters();

      dispatch(setCharacters(response.results));
      dispatch(toggleLoader());
    } catch (error) {
      dispatch(toggleLoader());
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <section className="w-full h-full p-14">
      {loading && <Loader />}
      <CharacterList characters={characters} favorites={false} />
    </section>
  );
};

export default Home;
