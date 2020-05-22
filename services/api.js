// API doc
// https://www.animenewsnetwork.com/encyclopedia/api.php
import axios from 'axios';

const baseUrl = 'https://www.animenewsnetwork.com/encyclopedia/reports.xml?';

const API = {
  getRecentAnimes: async () => {
    const url = 'id=148&nskip=0&nlist=10';
    const xml = await axios.get(`${baseUrl}${url}`);
    console.log('XML: ', xml);
  },
};

export default API;
