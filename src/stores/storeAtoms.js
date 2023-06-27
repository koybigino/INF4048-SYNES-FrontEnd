import { atom } from "recoil";

export const storeUser = atom({
    key: "user",
    default: {},
})

export const storeToken = atom({
    key: "token",
    //default: localStorage.getItem("userToken"),
    default: "d",
})

export const storeLoader = atom({
        key: "loader",
        default: false,
})