import axios, { AxiosResponse } from 'axios';
import { LoginProps, Researcher, ResetPasswordProps } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const login = async ({ userId, pw }: LoginProps) => {
  return await api.post('/login', { userId, pw });
};

export const logout = async (userId: string) => {
  console.log('userId: ', userId);
  return await api('/logout', { params: { userId } });
};

export const getResearchers = async () => {
  return await api('/researchers');
};

export const addResearcher = async (
  researcher: Omit<Researcher, 'password'>
): Promise<AxiosResponse<Researcher>> => {
  return await api.post('/researcher', researcher);
};

export const resetResearchersPassWord = async (data: ResetPasswordProps) => {
  return await api.patch('/researcher/reset​', { data });
};

export const deleteResearcher = async ({ pin }: Pick<Researcher, 'pin'>) => {
  return await api.delete('/researcher', { params: { pin } });
};
