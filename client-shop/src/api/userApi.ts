import api from "./api";

export type User = {
    email: string
};

export const login = ({email, password} : { email: string, password: string }) => api.post('/auth/login', {email, password});
export const register = ({email, password} : { email: string, password: string }) => api.post('/auth/register', { email, password });