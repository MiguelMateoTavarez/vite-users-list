/**
 * 
 * @param {String|Number} user 
 */
export const deleteUserById = async (id) => {

    const url = `${import.meta.env.VITE_API_URL}/users/${id}`;

    const res = await fetch(url, {
        method: 'DELETE',
    });

    const deleteResolt = await res.json();

    return true;
}