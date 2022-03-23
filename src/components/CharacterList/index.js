import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, favorites }) => {
  if (characters.lenght === 0) {
    return (
      <div className="w-full h-auto">
        <h1 className="text-2xl text-bold text-secondary">No hay elementos para mostrar</h1>
      </div>
    );
  }

  if (favorites) {
    characters = characters.filter((character) => character.favorite);
  }

  return (
    <div className="w-full h-auto grid grid-cols-3 gap-4 pt-10">
      {characters.map((character, index) => (
        <CharacterCard character={character} itDelete={favorites} key={index} />
      ))}
    </div>
  );
};

CharacterList.defaultProps = {
  characters: [],
};

export default CharacterList;
