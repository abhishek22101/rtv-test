import axios from 'axios';

const BASE_URL = 'https://gizmo.rakuten.tv/v3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    classification_id: 5,
    device_identifier: 'web',
    locale: 'es',
    market_code: 'es',
  },
  headers: {
    'Accept': 'application/json',
    'Origin': 'http://localhost.rakuten.tv:3000'
  }
});

export const getMovieList = async (listId) => {
  const response = await api.get(`/lists/${listId}`);
  return response.data;
};

export const getMovie = async (movieId) => {
  const response = await api.get(`/movies/${movieId}`);
  return response.data;
};

export default api; 