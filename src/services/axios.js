import axios from 'axios'
import { API_HASH, API_TIMESTAMP, API_KEY, BASE_API_URL} from '../constants.js';

axios.defaults.baseURL = BASE_API_URL;
axios.defaults.params = {
    ts: API_TIMESTAMP,
    hash: API_HASH,
    apikey: API_KEY
}