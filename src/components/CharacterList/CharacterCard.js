import { StarIcon } from '@heroicons/react/solid';

const CharacterCard = ({ character }) => {
  const color = 'text-gray-400';

  if (!character) return null;

  return (
    <div className="PokemonCard w-50 h-64 p-3 flex flex-col items-center space-y-1 rounded-lg shadow-3xl">
      <div className="w-full">
        <button className="h-9 w-5">
          <StarIcon className={color} />
        </button>
      </div>
      <hr className="w-full h-px bg-slate-900 shadow-md" />
      <p className="text-lg text-bold text-slate-700">{character.name}</p>
      <p className="text-lg text-bold text-slate-700">{character.height}</p>
      <p className="text-lg text-bold text-slate-700">{character.mass}</p>
      <p className="text-lg text-bold text-slate-700">{character.birth_year}</p>
    </div>
  );
};

export default CharacterCard;
