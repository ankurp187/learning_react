import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID fGpHRLROAz4yJNohM3ev3N2lllSX0UhBH4pmcdUei4Q'
  }
});
