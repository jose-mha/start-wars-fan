import AppService from '../services/AppService';

export const getCharacters = () => {
  return AppService.get('/people').then((response) => response.data);
};

export const getMoreCharacters = (page) => {
  return AppService.get(`/people/?page=${page}`).then((response) => response.data);
};
