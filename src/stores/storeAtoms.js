import { atom } from "recoil";
import axios from "../config/axios";


export const storeLoader = atom({
  key: "loader",
  default: false,
});

export const storeUser = atom({
  key: "user",
  default: {},
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
  key: "head-table-users",
  default: ["Section", "etablissement", "Créer", "", ""],
});

export const storeToken = atom({
  key: "token",
  default: localStorage.getItem("userToken"),
});

export const storeTokenType = atom({
  key: "token-type",
  default: localStorage.getItem("userTokenType"),
});

