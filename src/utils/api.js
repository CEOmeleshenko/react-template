import axios from 'axios';

const api = axios.create({
  baseURL: 'http://petstore.swagger.io/v2/',
});

export const getData = async () => {
  try {
    const response = await api.get('pet/21');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};