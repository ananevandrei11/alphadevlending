import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pro.alphadevteam.com/api/',
});

export const speakersAPI = {
  getSpeakers() {
    return instance.get('tz/speakers').then((response) => {
      return response.data;
    });
  },
};
