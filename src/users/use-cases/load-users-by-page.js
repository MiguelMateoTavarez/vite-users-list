import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/User";

/**
 * 
 * @param {Number} page 
 * @returns
 */
export const loadUsersByPage = async(page = 1) => {
    const url = `${ import.meta.env.VITE_API_URL }/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    
    const users = data.map(localhostUserToModel);

    return users;
} 