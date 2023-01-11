import axios from 'axios';
import SessionData from './utils/data/SessionData';
// import {REACT_APP_API_URL} from '@env';

const token = SessionData.getSessionData().token;

export default axios.create({
  baseURL: 'https://api.lanchecard.com.br/api',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
    'User-Agent': 'Mozilla/5.0',
  },
});
