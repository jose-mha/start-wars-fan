import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, favorites }) => {
  if (characters.lenght === 0) {
    return (
      <div className="w-full h-auto">
        <h1 className="text-2xl text-bold text-secondary">No hay elementos para mostrar</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-auto grid grid-cols-3 gap-4 pt-10">
      {characters.map((character, index) => {
        if (!favorites) {
          return <CharacterCard character={character} itDelete={false} key={index} />;
        }

        if (character.favorite) {
          return <CharacterCard character={character} itDelete={true} key={index} />;
        }
      })}
    </div>
  );
};

CharacterList.defaultProps = {
  characters: [],
};

export default CharacterList;
