export default class Model_2 {

    constructor() {

    }

    private dataCheck() {

    }

    private createRangeSlider(sliderAttributes: any) {
        return '<input type="range"' +
                      ` min="${sliderAttributes.min}"`     +
                      ` max="${sliderAttributes.max}"`     +
                      ` step="${sliderAttributes.step}"`   +
                      ` value="${sliderAttributes.value}"` + '/>';
    }
    public getRangeSlider(sliderAttributes: any) {
        return this.createRangeSlider(sliderAttributes);
    }
}