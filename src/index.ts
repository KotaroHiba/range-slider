import './css/orange.sass';
import Presenter from "./app/Presenter";
import View from "./app/View";

let slider = new Presenter({
    vertical: true, // boolean
    range: true, // boolean
    output: true, // boolean
    value: [0, 100], // array | number
    min: 0, // number
    max: 100, // number
    step: 1, // number
});


let testView = new View();
testView.displayLoadingBar($('.range-slider'), [0, 100]);
