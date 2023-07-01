import axios from "./axios";

export const getData = async (url, token, tokenType) => {
  return await axios
    .get(url, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
};

export const postData = async (url, token, tokenType, body = {}) => {
  return await axios
    .post(url, body, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
};

export const putData = async (url, token, tokenType, body = {}) => {
  return await axios
    .put(url, body, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
};

export const deleteData = async (url, token, tokenType) => {
  return await axios
    .delete(url, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
};
