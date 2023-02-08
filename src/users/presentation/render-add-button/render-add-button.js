import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element
 */
export const renderAdddButton = (element) => {
    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');
    
    element.appendChild(fabButton);

    fabButton.addEventListener('click', (e) => {
        
    });
}