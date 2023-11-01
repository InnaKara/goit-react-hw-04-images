import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY_API = '39344748-f22e888d108fa6b6315bee374';

export const getImages = async ({ searchQuery, page }) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
