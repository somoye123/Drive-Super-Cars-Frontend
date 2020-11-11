import { handleResponse, handleError } from './apiUtils';

const baseUrl = `${process.env.REACT_APP_SERVER_API_URL}/users`;

export default (body, token) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(body),
})
  .then(handleResponse)
  .catch(handleError);
