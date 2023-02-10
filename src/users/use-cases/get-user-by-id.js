import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/User";

/**
 * 
 * @param {String|Number} page 
 * @returns {Promise<User>}
 */
export const loadUsersByPage = async(id) => {
    const url = `${ import.meta.env.VITE_API_URL }/users/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    const users = data.map(localhostUserToModel);
    
    return users;
} 