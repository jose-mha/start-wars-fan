import { useDispatch } from 'react-redux';
import { setFavorite, deleteFavorite } from '../../actions';

import { StarIcon } from '@heroicons/react/solid';

const CharacterCard = ({ character, itDelete }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (itDelete) {
      dispatch(deleteFavorite({ characterId: character.name.replace(/ /g, '') }));
    } else {
      dispatch(setFavorite({ characterId: character.name.replace(/ /g, '') }));
    }
  };

  const color = character.favorite ? 'text-yellow-500' : 'text-gray-400';

  if (!character) return null;

  return (
    <div className="w-64 h-72 rounded-lg shadow-3xl">
      <div className="w-full h-5 rounded-t-lg bg-secondary"></div>
      <div className="p-3 flex flex-col items-center gap-4">
        <div className="w-full text-right">
          <button className="w-7 h-7" onClick={handleFavorite}>
            <StarIcon className={color} />
          </button>
        </div>
        <p className="text-xl text-bold">{character.name}</p>

        <hr className="w-10/12 h-px bg-slate-900 shadow-md" />

        <div className="w-full flex flex-row justify-around gap-3">
          <div className="text-center">
            <p className="text-slate-700">Altura</p>
            <p className="text-lg text-bold">{character.height}</p>
          </div>
          <div className="text-center">
            <p className="text-slate-700">Peso</p>
            <p className="text-lg text-bold">{character.mass}</p>
          </div>
        </div>
        <div className="w-full text-center">
          <p className="text-slate-700">Fecha de Nacimiento</p>
          <p className="text-lg text-bold">{character.birth_year}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
