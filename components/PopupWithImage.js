import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popup, image, text) {
        super(popup);
        this._image = image;
        this._text = text;
    }

    open({ name, image }) {
        this._image.src = image;
        this._text.textContent = name;
        this._image.alt = name;
        super.open();
    }
}