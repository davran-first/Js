
import {changeColor as selectColor} from "./modals/select.js"

let buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; ++i) {
    const button = buttons[i];

    button.addEventListener('click', selectColor);

}