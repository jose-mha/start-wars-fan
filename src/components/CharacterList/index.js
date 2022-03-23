import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, favorites }) => {
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
