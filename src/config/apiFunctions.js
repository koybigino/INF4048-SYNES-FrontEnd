import axios from "./axios";


export const getData = async (url, token, tokenType) => {
  const data = await axios
    .get(url, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return data;
};

export const postData = async (url, token, tokenType, body = {}) => {
  const data = await axios
    .post(url, body, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return data;
};

export const putData = async (url, token, tokenType, body = {}) => {
  return await axios
    .put(url, body, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const deleteData = async (url, token, tokenType) => {
  const data = await axios
    .delete(url, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return data;
};
