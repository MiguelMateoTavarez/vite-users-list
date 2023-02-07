import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {

    const nextButton = document.createElement( 'button' );
    nextButton.innerText = 'Next >';

    const prevButton = document.createElement( 'button' );
    prevButton.innerText = '< Prev ';
    prevButton.disabled = true;

    const currentPageLabel = document.createElement( 'label' );
    currentPageLabel.id = 'Current Page: ';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append( prevButton, currentPageLabel, nextButton );

    nextButton.addEventListener( 'click', async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
        enablePrevButton();
    });
    
    prevButton.addEventListener( 'click', async() => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
        disabledPrevButton();
    });
    
    /**
     * Enables the prev button
     */
    const enablePrevButton = () => {
        if(prevButton.disabled)
            prevButton.disabled = false;
    }
    
    /**
     * Disables the prev button
     */
    const disabledPrevButton = () => {
        if(usersStore.getCurrentPage() === 1)
            prevButton.disabled = true;
    }
}