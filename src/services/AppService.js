import axios from 'axios';

const URL = process.env.API_URL || 'https://swapi.dev/api';
// Creamos el header por default
let requestHeaders = {
  'content-type': 'application/json',
};

const AppService = axios.create({
  baseURL: URL,
  timeout: 30000,
  headers: requestHeaders,
});

export default AppService;
