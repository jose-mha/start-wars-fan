import { useEffect } from 'react';

import { getCharacters } from '../../api';

const Home = () => {
  useEffect(() => {
    getCharacters()
      .then((response) => {
        console.log('Results', response.data);
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
