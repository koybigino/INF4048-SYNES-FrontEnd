import { atom } from "recoil";

export const storeUser = atom({
  key: "user",
  default: {
    id : "1",
    matricule: "KDK392",
    nom: "John Michael",
    etablissement: "Université Yaoundé I",
    section: {
      id: "string",
      nom: "Section 1",
    },
    age: 22,
    role: "Admin",
    sexe: "Homme",
    specialite: "Math",
    nationalite: "Cammeroun",
    adresse_mail: "john@creative-tim.com",
    phone_number: "3829302082",
    photo: {
      image_link:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    date_creation: "23/04/18",
  },
});

export const storeAllUser = atom({
  key: "all-user",
  default: [
    {
      id : "2",
      matricule: "KDK392",
      nom: "John Michael",
      etablissement: "Université Yaoundé II",
      section: {
        id: "string",
        nom: "Section 2",
      },
      age: 22,
      role: "Admin",
      sexe: "Homme",
      specialite: "Math",
      nationalite: "Cammeroun",
      adresse_mail: "john@creative-tim.com",
      phone_number: "3829302082",
      photo: {
        image_link:
          "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      },
      date_creation: "23/04/18",
    },
    {
      id : "3",
      matricule: "KDK392",
      nom: "Alexa Liras",
      etablissement: "Université Bamenda",
      section: {
        id: "string",
        nom: "Section 3",
      },
      age: 22,
      role: "Admin",
      sexe: "Femme",
      specialite: "Math",
      nationalite: "Cammeroun",
      adresse_mail: "john@creative-tim.com",
      phone_number: "3829302082",
      photo: {
        image_link: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",

      },
      date_creation: "23/04/18",
    },
    {
      id : "4",
      matricule: "KDK392",
      nom: "Laurent Perrier",
      etablissement: "Université Yaoundé II",
      section: {
        id: "string",
        nom: "Section 2",
      },
      age: 22,
      role: "Admin",
      sexe: "Homme",
      specialite: "Math",
      nationalite: "Cammeroun",
      adresse_mail: "john@creative-tim.com",
      phone_number: "3829302082",
      photo: {
        image_link:
          "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
      },
      date_creation: "23/04/18",
    },
    {
      id : "5",
      matricule: "KDK392",
      nom: "Michael Levi",
      etablissement: "Université Yaoundé I",
      section: {
        id: "string",
        nom: "Section 1",
      },
      age: 22,
      role: "Admin",
      sexe: "Homme",
      specialite: "Math",
      nationalite: "Cammeroun",
      adresse_mail: "john@creative-tim.com",
      phone_number: "3829302082",
      photo: {
        image_link:
          "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      },
      date_creation: "23/04/18",
    },
    {
      id : "6",
      matricule: "KDK392",
      nom: "Richard Gran",
      etablissement: "Université Bamenda",
      section: {
        id: "string",
        nom: "Section 3",
      },
      age: 22,
      role: "Admin",
      sexe: "Homme",
      specialite: "Math",
      nationalite: "Cammeroun",
      adresse_mail: "john@creative-tim.com",
      phone_number: "3829302082",
      photo: {
        image_link:
          "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
      },
      date_creation: "23/04/18",
    },
  ],
});

export const storeHeadTableUsers = atom({
    key: "head-table-users",
    default: [
        "Member",
        "Nationalité",
        "Role",
        "Section",
        "Employé",
        "",
        "",
      ],
  });

export const storeToken = atom({
  key: "token",
  //default: localStorage.getItem("userToken"),
  default: "d",
});

export const storeLoader = atom({
  key: "loader",
  default: false,
});
