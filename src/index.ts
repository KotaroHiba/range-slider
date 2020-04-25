import Presenter from "./app/Presenter";

let slider = new Presenter({value: 100,
    min: 0,
    max: 100,
    step: 1,
    options: {
        vertical: true,
        twoInput: true,
    }
});

slider.createRangeSlider('#y');
