import axios from 'axios';

export default {
  axios: axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  })
}