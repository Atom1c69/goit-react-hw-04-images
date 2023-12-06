import axios from 'axios';

export const BASE_KEY = '40532078-d710c5aac8a722e10cbcd9ed8';

export const DataImages = async (value, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=${BASE_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response;
};