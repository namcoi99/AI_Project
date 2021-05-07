import axios from 'axios';

export default axios.create({
    baseURL: `https://sitesranking-backend.herokuapp.com`,
    // withCredentials:true
});