import {
    cards, grid, popupPicture, popupfullPic, popupPicName, popupButton, popupText, sortPack,
    sortArrowPack, sortBlockPack, sortHek, sortTin, sortBoard, sortToy, sortAll
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithText } from '../components/PopupWithText.js';
import { Section } from '../components/Section.js';

const openfullImg = new PopupWithImage(popupPicture, popupfullPic, popupPicName);
const openComposition = new PopupWithText(popupButton, popupText);

//рендер карточек
function createCard(item) {
    const card = new Card(openfullImg, openComposition, item, '.template__card');
    const generateCard = card.generateCard();

    return generateCard;
}

const section = new Section({
    renderer: (item) => {
        const cardElement = createCard(item);
        section.addItem(cardElement)
    }
}, grid);
section.renderItems(cards);

openfullImg.setEventListeners();
openComposition.setEventListeners();


sortPack.addEventListener('click', () => {
    sortArrowPack.classList.toggle('sort_opened');
    sortBlockPack.forEach((item) => {
        item.classList.toggle('sort__block_opened');
    })
})

sortAll.addEventListener('click', () => {
    section.renderItems(cards);
});

sortHek.addEventListener('click', () => {
    const a = cards.filter(function (item) {
        return item.pack == 'хэк';
    })
    section.renderItems(a);
});

sortTin.addEventListener('click', () => {
    const a = cards.filter(function (item) {
        return item.pack == 'жесть';
    })
    section.renderItems(a);
})
sortBoard.addEventListener('click', () => {
    const a = cards.filter(function (item) {
        return item.pack == 'микрогофрокартон';
    })
    section.renderItems(a);
})
sortToy.addEventListener('click', () => {
    const a = cards.filter(function (item) {
        return item.pack == 'мягкая игрушка';
    })
    section.renderItems(a);
})