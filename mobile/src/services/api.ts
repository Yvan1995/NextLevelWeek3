import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.5:3333', //api pode mudar de endereço na reinicialização.
});

export default api;