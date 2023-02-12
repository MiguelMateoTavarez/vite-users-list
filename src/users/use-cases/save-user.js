import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalhost } from '../mappers/user-localhost.mapper';
import { User } from '../models/User';

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);

    if (!user.firstName || !user.lastName)
        throw 'First and last name cannot be empty';

    const userToSave = userModelToLocalhost(user);

    let userUpdated;

    if (user.id) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localhostUserToModel(userUpdated);
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

/**
 * 
 * @param {Like<User>} user 
 */
const updateUser = async (user) => {

    const url = `${import.meta.env.VITE_API_URL}/users/${user.id}`;

    const res = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    const updateeUser = await res.json();

    return updateeUser;

}