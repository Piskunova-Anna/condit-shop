import { cards, grid, popupPicture, popupfullPic, popupPicName, popupButton, popupText } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithText } from '../components/PopupWithText.js';
import { Section } from '../components/Section.js';

const openfullImg = new PopupWithImage(popupPicture, popupfullPic, popupPicName);
const openComposition = new PopupWithText(popupButton, popupText);

function cardRenderer(item) {
    const card = new Card(openfullImg, openComposition, item, '.template__card');
    const generateCard = card.generateCard();
    section.addItem(generateCard);
}

const section = new Section({ items: cards, renderer: (item) => { cardRenderer(item) } }, grid);
section.renderItems();

openfullImg.setEventListeners();
openComposition.setEventListeners();