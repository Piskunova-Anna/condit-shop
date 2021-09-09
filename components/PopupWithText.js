import { Popup } from './Popup.js';

export class PopupWithText extends Popup {
    constructor(popup, description){
        super(popup);
        this._description = description;
    }

    open({text}){
        this._description.textContent = text;
        super.open();
    }
}