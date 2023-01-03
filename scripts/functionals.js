export function createNodeElementByString(element_string) {
    const div = document.createElement('div')
    div.insertAdjacentHTML('afterbegin', element_string)
    return div.firstElementChild
}

export function getElements() {
    return {
        container_cards: document.querySelector('.container-cards'),
        container_favourite_cards: document.querySelector('.container-favourite-cards')
    }
}