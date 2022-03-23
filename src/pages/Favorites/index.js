import { useSelector } from 'react-redux';

import CharacterList from '../../components/CharacterList';

const Favorites = () => {
  const characters = useSelector((state) => state.charactersList);

  return (
    <section className="w-full h-full p-14">
      <div className="w-100 pt-10">
        <h1 className="text-3xl text-bold text-primary">Personajes Favoritos</h1>
      </div>
      <CharacterList characters={characters} favorites={true} />
    </section>
  );
};

export default Favorites;
