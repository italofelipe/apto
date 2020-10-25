import axios from 'axios';

// const API_KEY = '4c9df26f14d043e7ea816edf3edc60074b52bc12';
const http = axios.create({
  baseURL: 'https://api.github.com/orgs/',
});
export default http;
