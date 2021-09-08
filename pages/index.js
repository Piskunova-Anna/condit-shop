import { Section } from '../components/Section.js';
import { cards, grid } from '../utils/constants.js';
import { Card } from '../components/Card.js';

function cardRenderer (item){
    const card = new Card( item, '.template__card');
    const generateCard = card.generateCard();
    section.addItem(generateCard);
    }

const section = new Section({items: cards, renderer: (item) => {cardRenderer(item)}}, grid);
section.renderItems();