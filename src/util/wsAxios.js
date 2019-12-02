import axios from 'axios';

const  http = axios.create({
    baseURL: "https://cep.awesomeapi.com.br/json",
});

export { http };