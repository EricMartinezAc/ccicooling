import axios from 'axios';

export const fetchFromService1 = async () => {
  const response = await axios.get('http://localhost:3001/api/service1');
  return response.data;
};

export const fetchFromService2 = async () => {
  const response = await axios.get('http://localhost:3002/api/service2');
  return response.data;
};
