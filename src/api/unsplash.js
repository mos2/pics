import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e25dfdc526c0806e01c034b2aa75253b9eb02540451234881256f2011f8046bf'
  }
});
