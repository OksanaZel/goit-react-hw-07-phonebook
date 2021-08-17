import axios from 'axios';

axios.defaults.baseURL = 'https://611a3057cbf1b30017eb5586.mockapi.io/api/v1/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}