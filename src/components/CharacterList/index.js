import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  console.log(characters);
  return (
    <div className="w-full h-auto grid grid-cols-3 gap-4 pt-10">
      {characters.map((character, index) => (
        <CharacterCard character={character} key={index} />
      ))}
    </div>
  );
};

CharacterList.defaultProps = {
  characters: [],
};

export default CharacterList;
