// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCards(name, link, removeCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const removeButton = card.querySelector('.card__delete-button');
    removeButton.addEventListener('click', removeCard);
    card.querySelector('.card__title').textContent = name;
    card.querySelector('.card__image').src = link;
    card.querySelector('.card__image').alt = name;
    return card    
}
// @todo: Функция удаления карточки
function removeCard(evt) {
    evt.target.parentElement.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((item) =>
    placesList.append(createCards(item.name, item.link, removeCard))
);