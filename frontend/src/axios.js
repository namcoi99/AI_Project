import axios from 'axios';

export default axios.create({
    baseURL: `http://sitesranking-backend.herokuapp.com`,
    // withCredentials:true
});