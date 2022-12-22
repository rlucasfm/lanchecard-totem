import axios from 'axios';
// import {REACT_APP_API_URL} from '@env';

const token = '14U3zRxs2D49tHj9EAQLVPDVapmhnZd8CsEHesme';

export default axios.create({
  baseURL: 'https://api.lanchecard.com.br/api',
  headers: {Authorization: 'Bearer ' + token},
});
