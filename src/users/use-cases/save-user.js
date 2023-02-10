import { userModelToLocalhost } from '../mappers/user-localhost.mapper';
import { User } from '../models/User';

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);

    if (user.firstName || user.lastName) 
        throw 'First and last name cannot be empty';

    const userToSave = userModelToLocalhost(user);

    if (user.id) {
        throw 'No implementada la actualización';
        return;
    }

    const updateUser = await createUser(userToSave);
    return updateUser;

};

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async (user) => {
    const url = `${import.meta.env.VITE_API_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    const newUser = await res.json();

    return newUser;

}