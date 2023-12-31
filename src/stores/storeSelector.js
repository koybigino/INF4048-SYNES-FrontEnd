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

    if (allUser.items) {
      if (allUser.items.length > 0) {
        allUser.items.filter((user) => {
          if (!etablissements.includes(user.etablissement)) {
            etablissements.push(user.etablissement);
          }
        });
      }
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

export const storeGetAllSectionName = selector({
  key: "get-all-section-name",
  get: async ({ get }) => {
    const sections = get(storeGetAllSection);
    const sectionNames = [];

    sections.items.forEach((s) => {
      sectionNames.push(s.nom);
    });

    return sectionNames;
  },
});

export const storeGetAllUserName = selector({
  key: "get-all-user-name",
  get: async ({ get }) => {
    const users = get(storeGetAllUser);
    const userNames = [];

    users.items.forEach((s) => {
      userNames.push(s.nom);
    });

    console.log(userNames);

    return userNames;
  },
});

export const storeGetAllSectionUser = selector({
  key: "get-all-user-name-per-section",
  get: async ({ get }) => {
    const Allusers = get(storeGetAllUser);
    const users = Allusers.items;
    const sections = get(storeGetAllSectionName);
    let userSection = [];

    sections.forEach((s) => {
      const us = [];
      if (s !== "All") us.push(s);
      users.forEach((u) => {
        if (u.etablissement === s) {
          us.push(u.nom);
        }
      });

      if (us.length > 1) {
        us.forEach((u) => {
          userSection.push(u);
        });
      }
    });

    return userSection;
  },
});

export const storeGetAllUserPerSection = selector({
  key: "get-all-section-user",
  get: async ({ get }) => {
    const Allusers = get(storeGetAllUser);
    const users = Allusers.items;
    const sections = get(storeSections);
    let userSection = {};

    sections.forEach((s) => {
      const us = [];
      users.forEach((u) => {
        if (u.section.nom === s) {
          us.push(u.nom);
        }
      });
      if (s !== "All" && us.length > 0) userSection[s] = us;
    });

    return userSection;
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

export const storeGetAllFondName = selector({
  key: "get-all-fond-name",
  get: async ({ get }) => {
    const caisses = get(storeGetAllFond);
    const names = [];

    caisses.items.forEach((s) => {
      names.push(s.titre);
    });

    console.log(names);

    return names;
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


export const storeGetAllCaisse = selector({
  key: "get-all-caisse",
  get: async ({ get }) => {
    const token = get(storeToken);
    const tokenType = get(storeTokenType);

    return fetchData("/caisse/all", token, tokenType);
  },
});

export const storeGetAllCaisseName = selector({
  key: "get-all-caisse-name",
  get: async ({ get }) => {
    const caisses = get(storeGetAllCaisse);
    const names = [];

    caisses.items.forEach((s) => {
      names.push(s.nom);
    });

    console.log(names);

    return names;
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

    if (allUser.items) {
      allUser.items.filter((user) => {
        if (user.section) {
          if (!secs.includes(user.section.nom)) {
            secs.push(user.section.nom);
          }
        }
      });
    }

    return secs;
  },
});
