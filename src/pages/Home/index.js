import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCharacters } from '../../actions';

import { getCharacters } from '../../api';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCharacters()
      .then((response) => {
        console.log('Results', response.data);
        dispatch(setCharacters(response.data.results));
      })
      .catch((error) => {
        console.log('Results', error);
      });
  }, []);

  return (
    <section className="w-full h-full pt-14">
      <h1>Home</h1>
    </section>
  );
};

export default Home;
