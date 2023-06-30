import { selector } from "recoil";
import { storeToken, storeTokenType } from "./storeAtoms";
import axios from "../config/axios";

const fetchData = async (url, token, tokenType) => {
  const datas = await axios
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

  return datas;
};

export const storeEtablissements = selector({
  key: "etablissements",
  get: ({ get }) => {
    const allUser = get(storeGetAllUser);

    let etablissements = [];

    if (allUser.items.length > 0) {
      allUser.items.filter((user) => {
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

    return fetchData("/user", token, tokenType);
  },
});

export const storeGetAllUser = selector({
  key: "get-all-user",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/user/all", token, tokenType);
  },
});

export const storeGetAllSection = selector({
  key: "get-all-section",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/section/all", token, tokenType);
  },
});

export const storeGetAllBiens = selector({
  key: "get-all-bien",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/bien/all", token, tokenType);
  },
});

export const storeGetAllActivite = selector({
  key: "get-all-activite",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/activite/all", token, tokenType);
  },
});

export const storeGetAllNotification = selector({
  key: "get-all-notification",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/notification/all", token, tokenType);
  },
});

export const storeGetAllFond = selector({
  key: "get-all-fond",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/fond/all", token, tokenType);
  },
});

export const storeGetAllDepense = selector({
  key: "get-all-depense",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/depense/all", token, tokenType);
  },
});

export const storeGetAllContribution = selector({
  key: "get-all-contribution",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/contribution/all", token, tokenType);
  },
});

export const storeGetAllCaisse = selector({
  key: "get-all-caisse",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/caisse/all", token, tokenType);
  },
});

export const storeGetAllAction = selector({
  key: "get-all-action",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/action/all", token, tokenType);
  },
});

export const storeSections = selector({
  key: "sections",
  get: ({ get }) => {
    const allUser = get(storeGetAllUser);

    let secs = ["All"];

    allUser.items.filter((user) => {
      if (user.section) {
        if (!secs.includes(user.section.nom)) {
          secs.push(user.section.nom);
        }
      }
    });

    return secs;
  },
});
