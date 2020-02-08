import { API_URL } from 'Constants';

const URI = `${API_URL}/rpc`;

const optionsConstructor = (body) => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify(body),
});

const parseJSON = (response) => new Promise(
  (resolve) => response
    .json()
    .then(
      (result) => resolve({
        response,
        result,
      }),
    ),
);

export const apiCall = (body) => new Promise((resolve, reject) => {
  fetch(URI, optionsConstructor(body))
    .then(parseJSON)
    .then(({ response, result }) => (response.ok ? resolve(result) : reject(result)))
    .catch((error) => reject(error));
});

export const getBody = (method, params, id) => ({
  method, params, id,
});
