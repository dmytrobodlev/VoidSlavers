import R from 'ramda';
import Axios from 'axios';
// global
import * as H from './';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: with env configs

const instance = Axios.create();

const port = 8080;
const domain = 'localhost';

export const makeRequestUrl = endpoint => {
  const protocol = H.ifElse(R.equals(domain, 'localhost'), 'http://', 'https://');
  return H.ifElse(
    R.equals(domain, 'localhost'),
    `${protocol}localhost:${port}/${endpoint}`,
    `${protocol}${domain}/${endpoint}`,
  );
};

export const makeUid = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const makeRequestHeaders = customHeaders => {
  let token;
  let sessionHeaders = {};
  try {
    token = H.getToken();
  } catch (error) {
    token = null;
  }
  if (token) {
    sessionHeaders = {
      Authorization: `Bearer ${token}`,
    };
  }
  return {
    ...sessionHeaders,
    ...customHeaders,
  };
};

export const createRequestConfig = (method, endpoint, options = {}) => {
  const config = {
    method,
    data: R.or(options.data, {}),
    params: R.or(options.params, {}),
    url: makeRequestUrl(endpoint),
    headers: makeRequestHeaders(R.or(options.headers, {})),
  };
  if (options.responseType) {
    config.responseType = options.responseType;
  }
  return instance(config);
};

export const sendRequest = (method, endpoint, options = {}, isUrlencoded) => {
  const config = createRequestConfig(method, endpoint, options, isUrlencoded);
  return instance(config);
};
