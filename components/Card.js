export class Card {
    constructor(handleCardClick, handleCompClick, data, cardSelector){
        this._name = data.name;
        this._pack = data.pack;
        this._weight = data.weight;
        this._price_xs = data.price_xs;
        this._price_s = data.price_s;
        this._price_m = data.price_m;
        this._price_l = data.price_l;
        this._price_xl = data.price_xl;
        this._description = data.description;
        this._cardSelector = cardSelector;
        this._image = data.image;
        this._alt = data.name;
        this._handleCardClick = handleCardClick;
        this._compositionClick = handleCompClick;
    }

    _getTemplate() {
        const newCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.grid__card')
            .cloneNode(true);

        return newCard;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.grid__name').textContent = this._name;
        this._element.querySelector('.grid__package').textContent = this._pack;
        this._element.querySelector('.grid__weight').textContent = this._weight;
        this._element.querySelector('.grid__price_xs').textContent = this._price_xs;
        this._element.querySelector('.grid__price_s').textContent = this._price_s;
        this._element.querySelector('.grid__price_m').textContent = this._price_m;
        this._element.querySelector('.grid__price_l').textContent = this._price_l;
        this._element.querySelector('.grid__price_xl').textContent = this._price_xl;
        this._element.querySelector('.grid__image').src = this._image;
        this._element.querySelector('.grid__image').alt = this._alt;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.grid__image').addEventListener('click', () => {
            this._handleCardClick.open({name: this._name, image: this._image});
        })
        this._element.querySelector('.grid__composition').addEventListener('click', () => {
            this._compositionClick.open({text: this._description});
        })
    }
}