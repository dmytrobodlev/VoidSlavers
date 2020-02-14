import R from 'ramda';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const getItemFromLocalStorage = itemName => localStorage.getItem(itemName);
export const setItemToLocalStorage = (itemName, itemValue) => localStorage.setItem(itemName, itemValue);

export const getAuthToken = () => JSON.parse(localStorage.getItem('accessToken')); // eslint-disable-line
export const setAuthToken = (token) => localStorage.setItem('accessToken', JSON.stringify(token)); // eslint-disable-line
export const removeAuthToken = () => localStorage.removeItem('accessToken'); // eslint-disable-line

export const getAuthTokenFromSession = () => JSON.parse(sessionStorage.getItem('accessToken')); // eslint-disable-line
export const setAuthTokenToSession = (token) => sessionStorage.setItem('accessToken', JSON.stringify(token)); // eslint-disable-line
export const removeAuthTokenFromSession = () => sessionStorage.removeItem('accessToken'); // eslint-disable-line

export const getRefreshTokenFromSession = () => JSON.parse(sessionStorage.getItem('refreshToken')); // eslint-disable-line
export const setRefreshTokenToSession = (token) =>
  sessionStorage.setItem('refreshToken', JSON.stringify(token)); // eslint-disable-line
export const removeRefreshTokenFromSession = () => sessionStorage.removeItem('refreshToken'); // eslint-disable-line

export const getToken = () => R.or(getAuthToken(), getAuthTokenFromSession());
