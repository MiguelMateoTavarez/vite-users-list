import { renderAdddButton } from "../presentation/render-add-button/render-add-button";
import { renderButtons } from "../presentation/render-buttons/render-buttons";
import { renderModal } from "../presentation/render-modal/render-modal";
import { renderTable } from "../presentation/render-table/render-table";
import { saveUser } from "../use-cases/save-user";
import usersStore from "./users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async( element ) => {
    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable( element );
    renderButtons( element );
    renderAdddButton(element);
    renderModal(element, async(userLikes) => {
        const user = await saveUser(userLikes);
        usersStore.onUserChange(user);
        renderTable();
    });
} 