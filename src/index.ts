// import './css/range-slider.scss'
import './css/orange.sass'

import Presenter from "./module/Presenter";
let test = new Presenter();

function createLoadingBar(value : number) {
    let stepValue : number = value / 4;
    let stepOne = value / 4;
    let step : number[] = [0];
    let block = document.getElementById('test');
    step.unshift(0);
    for (let i = 1; i < 6; i++) {
        step[i]= stepValue;
        block.innerHTML = block.innerHTML + `<div>${step[i-1]}</div>`
        stepValue += stepOne;
    }

}


console.log(createLoadingBar(100));


