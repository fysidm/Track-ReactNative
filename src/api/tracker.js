import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance =  axios.create({
  baseURL: 'http://e5db6f92c436.ngrok.io'
});

instance.interceptors.request.use(
  // call this function before request send
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  // call this function after request receive error
  (err) => Promise.reject(err)
);

export default instance;
