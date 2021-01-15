const axios = require('axios');
const API_SERVER = process.env.API_SERVER || 'http://localhost:3001/api';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_SERVER,
});

module.exports = {
  registerUser: ({ email, firstName, lastName, password, confirmPassword }) =>
    instance.post('/register', {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
    }),
  loginClient: ({ email, password }) =>
    instance.post('/login', {
      email,
      password,
    }),
  logoutClient: () => instance.post('/logout'),
  getAllResolutions: () => instance.get('/resolution'),
  getResloutionById: (id) => instance.get(`/resolution/${id}`),
  createResolution: ({ content }) => instance.post('/resolution', { content }),
  patchResolution: ({ id, content }) =>
    instance.patch(`/resolution/${id}`, { content }),
  deleteResolution: ({ id }) => instance.delete(`/resolution/${id}`),
};
