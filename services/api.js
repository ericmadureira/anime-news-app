// API doc
// https://www.animenewsnetwork.com/encyclopedia/api.php
import axios from 'axios';

import payloadConverter from './payloadConverter';

const baseUrl = 'https://www.animenewsnetwork.com/encyclopedia/reports.xml?';

const API = {
  getRecentAnimes: async () => {
    const url = 'id=148&nskip=0&nlist=2';
    const { data } = await axios.get(`${baseUrl}${url}`);
    return payloadConverter.XMLtoJSON(data);
  },
};

export default API;
