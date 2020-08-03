import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-384e0.firebaseio.com/'
});

export default instance;