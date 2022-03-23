import AppService from '../services/AppService';

export const getCharacters = () => {
  return AppService.get('/people').then((response) => response.data);
};
