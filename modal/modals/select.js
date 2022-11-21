
import {listColors} from "./color.js";


function changeColor() {
    this.style = `background-color: ${listColors()};`;
}


export {changeColor}