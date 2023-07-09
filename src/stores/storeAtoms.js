import { atom } from "recoil";

export const storeLoader = atom({
  key: "loader",
  default: false,
});

export const storeUser = atom({
  key: "user",
  default: null,
});

export const storeSchools = atom({
  key: "school",
  default: [],
});

export const storeSchoolsSection = atom({
  key: "school-sectionS",
  default: [],
});

export const storeShowSuccess = atom({
  key: "success",
  default: false,
});

export const storeShowError = atom({
  key: "error",
  default: false,
});

export const storeAllUser = atom({
  key: "all-user",
  default: [],
});

export const storeHeadTableUsers = atom({
  key: "head-table-users",
  default: ["Member", "Nationalité", "Role", "Section", "Employé", "", ""],
});

export const storeHeadTableSections = atom({
  key: "head-table-section",
  default: ["Section", "etablissement", "Créer", "", ""],
});

export const storeHeadTableActivite = atom({
  key: "head-table-activite",
  default: ["Activité", "Initiateur", "Modérateurs", "Membres conviés", "Date de début", "Date de fin", "Créer", "", ""],
});

export const storeHeadTableBien = atom({
  key: "head-table-bien",
  default: ["Bien", "Section", "Créer", "Description", "Valeur Marchante", "Créer", "", ""],
});

export const storeHeadTableCaisse = atom({
  key: "head-table-caisse",
  default: ["Caisse", "Initiateur", "Montant", "Description", "Créer", "", ""],
});

export const storeHeadTableContribution = atom({
  key: "head-table-contribution",
  default: ["Contribution", "User", "Fond", "Montant", "Créer", "", ""],
});

export const storeHeadTableDepense = atom({
  key: "head-table-depense",
  default: ["Depense", "Initiateur", "Montant", "Description", "Créer", "", ""],
});

export const storeHeadTableFond = atom({
  key: "head-table-fond",
  default: ["Fond", "Initiateur", "Caisse", "Montant", "Description", "Créer", "", ""],
});

export const storeHeadTableNotification = atom({
  key: "head-table-notification",
  default: ["Notification", "Entité", "Contenu", "Créer", "", ""],
});

export const storeHeadTableAction = atom({
  key: "head-table-action",
  default: ["Sujet", "Objet", "Type", "Créer", "", ""],
});

export const storeToken = atom({
  key: "token",
  default: localStorage.getItem("userToken"),
});

export const storeTokenType = atom({
  key: "token-type",
  default: localStorage.getItem("userTokenType"),
});

