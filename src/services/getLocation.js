import { http } from './config';

export default{
    getLocation: cep => http.get(`users/${cep}`),
};