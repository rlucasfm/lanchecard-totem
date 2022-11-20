import axios from 'axios';
// import {REACT_APP_API_URL} from '@env';

export default axios.create({
  baseURL: 'http://my-json-server.typicode.com/rlucasfm/json-fake-server',
});
