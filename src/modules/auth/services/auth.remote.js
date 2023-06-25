import axiosInstance from '../../../config/axios';

import {REGISTER, LOGIN, RETRIEVE_MAIL, CHANGE_PASSWORD, RESET_PASSWORD} from '../../../config/ApiUrl';


const root_link = 'http://149.102.142.150/api/'

export const register = (user)=> {
     return   axiosInstance.post('http://149.102.142.150/api/auth/signup/', user);

}

export const login = (logindto)=> {
    return axiosInstance.post(root_link + LOGIN, logindto);

}

export const forgot_password = (identifier)=> {
    return axiosInstance.post(root_link + RETRIEVE_MAIL, identifier);

}

export const change_password = (passwords)=> {
    return axiosInstance.post(root_link + CHANGE_PASSWORD, passwords);

}

export const reset_password = (passwords)=> {
    return axiosInstance.post(root_link + RESET_PASSWORD, passwords);

}

export const reset_init = (passwords)=> {
    return axiosInstance.post(root_link + CHANGE_PASSWORD, passwords);

}

// profile 


// export const profile = ()=> {
//     return axiosInstance.get(root_link + me);

// }


// export const update_profile = (client)=> {
//     return axiosInstance.put(root_link + me, client, {
//         headers: {
//           'accept': 'application/json',
//           'Content-Type': `multipart/form-data; boundary=xxBOUNDARYxx`,
//         }});

// }