// import './css/range-slider.scss'
import './css/orange.sass'

import Presenter from "./module/Presenter";
new Presenter({
    blockName: 'mem',
    minValue: 0,
    maxValue: 100,
    twoPoint: true,
    vertical: true,
    loadingBar: true,
});

// console.log(document.querySelector('.range-slider'));


// let block : any = document.getElementById('test');
// function getCoords(elem :any) {
//     var box = elem.getBoundingClientRect();
//
//     return {
//         top: box.top,
//         left: box.left
//     };
//
// }
//
// block.onclick = function () {
//     console.log(getCoords(block));
// };



// function createLoadingBar(value : number) {
//     let stepValue : number = value / 4;
//     let stepOne = value / 4;
//     let step : number[] = [0];
//     let block = document.getElementById('test');
//     step.unshift(0);
//     for (let i = 1; i < 6; i++) {
//         step[i]= stepValue;
//         block.innerHTML = block.innerHTML + `<div>${step[i-1]}</div>`
//         stepValue += stepOne;
//     }
//
// }
//
// function searchCoordinates(element : any, event : any) {
//     event.stopPropagation();
//     let x = event.layerX;
//     let y = event.layerY;
//     alert(x);
// }
//
//
// let t : any = document.getElementsByClassName('range-slider')[0];
// t.onclick = () => searchCoordinates(t, event);