import { selector } from "recoil";
import { storeAllUser } from "./storeAtoms";

export const storeEtablissement = selector({
  key: "etablissements",
  get: ({ get }) => {
    const allUser = get(storeAllUser);

    let etablissements = [];

    allUser.filter((user) => {
      if (!etablissements.includes(user.etablissement)) {
        etablissements.push(user.etablissement);
      }
    });

    return etablissements;
  },
});

export const storeSection = selector({
  key: "sections",
  get: ({ get }) => {
    const allUser = get(storeAllUser);

    let secs = ["All"];

    allUser.filter((user) => {
      if (!secs.includes(user.section.nom)) {
        secs.push(user.section.nom);
      }
    });

    return secs;
  },
});
