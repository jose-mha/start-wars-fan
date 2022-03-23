import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacters, toggleLoader, numPage } from '../actions';

import { getMoreCharacters } from '../api';

const useInfiniteScroll = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;

    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchMoreCharacters = async () => {
      try {
        dispatch(toggleLoader());

        const response = await getMoreCharacters(page);

        dispatch(addCharacters(response.results));
        dispatch(toggleLoader());

        dispatch(numPage(page + 1));
        setIsFetching(false);
      } catch (error) {
        dispatch(toggleLoader());
      }
    };

    if (!isFetching || page > 9) return;

    fetchMoreCharacters();
  }, [isFetching]);
};

export default useInfiniteScroll;
