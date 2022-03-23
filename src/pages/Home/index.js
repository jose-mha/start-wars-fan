import { useSelector } from 'react-redux';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useOnLoad from '../../hooks/useOnLoad';

import CharacterList from '../../components/CharacterList';
import Loader from '../../components/Loader';

const Home = () => {
  const loading = useSelector((state) => state.loading);
  const characters = useSelector((state) => state.charactersList);

  useOnLoad();
  useInfiniteScroll();

  return (
    <section className="w-full h-full p-14">
      {loading && <Loader />}
      <div className="w-100 pt-10">
        <h1 className="text-3xl text-bold text-primary">Lista de Personajes</h1>
      </div>
      <CharacterList characters={characters} favorites={false} />
    </section>
  );
};

export default Home;
