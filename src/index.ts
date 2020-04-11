import './css/range-slider.scss'


import Presenter from "./module/Presenter";
let test = new Presenter();

function createLoadingBar(value : number) {
    let stepValue : number = value / 4;
    let stepOne = value / 4;
    let step : number[] = [0];
    for (let i =0; i < 4; i++) {
        step[i]= stepValue;
        stepValue += stepOne;
    }
    return step;
}


console.log(createLoadingBar(100));