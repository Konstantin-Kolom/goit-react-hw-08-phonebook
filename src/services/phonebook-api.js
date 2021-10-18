import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchOpenPhoneBook() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function fetchAddContact(contact) {
  await axios.post(`/contacts`, contact);
}

// fetchAddContact({ name: 'Test21', number: '44444444' });

export async function fetchDeleteContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
}

// fetchDeleteContact(6);
