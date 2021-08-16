import axios from 'axios';

axios.defaults.baseURL = 'https://611a3057cbf1b30017eb5586.mockapi.io/api/v1/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}