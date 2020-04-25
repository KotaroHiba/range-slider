import './css/range-slider-new.scss'
import Presenter from "./app/Presenter";
import View from "./app/View";

let slider = new Presenter({
    value: 100,
    min: 0,
    max: 100,
    step: 1,
    options: {
        vertical: true,
        twoInput: true,
    }
});

slider.createRangeSlider('.range-slider');


let testView = new View();
testView.displayLoadingBar($('.range-slider'), [0,25,50]);
