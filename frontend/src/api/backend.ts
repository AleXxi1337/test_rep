import axios from 'axios';

export const handleClick = async () => {
  try {
    const response = await axios.get('http://localhost:8000/v1/test/get_text');
    console.log('Данные получены:', response.data);
  } catch (err) {
    console.error('Ошибка запроса:', err);
  }
};
