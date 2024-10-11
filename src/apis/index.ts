import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const login = async ({ id, pw }) => {
  return await api.post('/login', { id, pw }); // try...catch를 쓸 것인가
  // return response.data?.id === 'admin';
};

export const logout = async ({ id }) => {
  return await api.get('/logout', { id }); // post가 아닐지?
};

export const registerResearcher = async ({
  name,
  phone,
  organization,
  pin,
}) => {
  return await api.post('/researcher', { name, phone, organization, pin });
};

export const resetResearchersPassWord = async ({ pin, pw }) => {
  return await api.patch('/researcher/reset​', { pin, pw });
};

export const deleteResearcher = async ({ pin }) => {
  return await api.delete('/researcher', { pin });
};

export const getResearchers = async () => {
  return await api.get('/researchers');
};
