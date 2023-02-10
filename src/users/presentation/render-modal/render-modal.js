import './render-modal.css';
import modalHtml from './render-modal.html?raw';
import {User} from '../../models/User';

let modal, form;
let loadedUser;

//TODO: Cargar usuario por id
export const showModal = async( id ) => {
    modal?.classList.remove('hide-modal');

    if(!id) return;

    const user = await getUserById(id);
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {

}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<void>} callback 
 */
export const renderModal = (element, callback) => {
    
    if (modal) return;
    
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    element.append(modal);
    
    modal.addEventListener('click', (e) => {
        if(e.target.className !== 'modal-container') return;
        hideModal();
    });

    form.addEventListener('submit', async(e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const userLike = {};
        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = +value;
                continue;
            }

            if (key === 'isActive') {
                userLike[key] = value === 'on' ? true : false;
                continue;
            }

            userLike[key] = value;
        }

        await callback(userLike);

        hideModal();
    });

    element.appendChild(modal);
};
