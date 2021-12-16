export class Section {
    constructor({ renderer }, cardsContainer) {
        this._renderer = renderer;
        this._cardsGrid = cardsContainer;
    }

    addItem(element) {
        this._cardsGrid.append(element);
    }

    renderItems(key) {
        this._cardsGrid.innerHTML = '';
        key.forEach(item => this._renderer(item));
    }
}