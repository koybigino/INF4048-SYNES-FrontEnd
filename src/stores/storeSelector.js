import { selector } from "recoil";
import { storeToken, storeTokenType } from "./storeAtoms";
import axios from "../config/axios";

export const storeEtablissements = selector({
  key: "etablissements",
  get: ({ get }) => {
    const allUser = get(storeGetAllUser);

    let etablissements = [];

    if (allUser.length > 0) {
      allUser.filter((user) => {
        if (!etablissements.includes(user.etablissement)) {
          etablissements.push(user.etablissement);
        }
      });
    }

    return etablissements;
  },
});

export const storeUserGet = selector({
  key: "user-get",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    const user = await axios
      .get("/user", {
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

    return user;
  },
});

export const storeGetAllUser = selector({
  key: "get-all-user",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    const users = await axios
      .get("/user/all", {
        headers: {
          Authorization: `${tokenType} ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.items);
        return res.data.items;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    return users;
  },
});



export const storeGetAllSection = selector({
  key: "get-all-section",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    const users = await axios
      .get("/section/all", {
        headers: {
          Authorization: `${tokenType} ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.items);
        return res.data.items;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    return users;
  },
});

export const storeSections = selector({
  key: "sections",
  get: ({ get }) => {
    const allUser = get(storeGetAllUser);

    let secs = ["All"];

    allUser.filter((user) => {
      if (!secs.includes(user.section.nom)) {
        secs.push(user.section.nom);
      }
    });

    return secs;
  },
});
