import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api-olx-clone.herokuapp.com/ad/'
});

export default Api;