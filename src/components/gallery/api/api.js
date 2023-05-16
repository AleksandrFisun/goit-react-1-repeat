import axios from 'axios';
const KEY = '29549737-0e26c7f130412282b7a563f88';

export const getImage = async (values, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${values}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
