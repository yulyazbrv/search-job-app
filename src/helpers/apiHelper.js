import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
});

axiosInstance.defaults.headers.common['x-secret-key'] = 'GEU4nvd3rej*jeh.eqp';
axiosInstance.defaults.headers.common['x-api-app-id'] =
  'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';

export const setAccessTokenToHeader = (accessToken) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const getHelper = (query, params) => {
  return axiosInstance
    .get(`/${query}`, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const postHelper = (query, params) => {
  return axiosInstance
    .post(`/${query}`, params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
