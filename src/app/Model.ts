import doc = Mocha.reporters.doc;

export default class Model {
    // public data: {
    //     obj: string,
    //     vertical: boolean,
    //     range: boolean,
    //     output: boolean,
    //     value: number | number[],
    //     min: number | number[],
    //     step: number | number[],
    //     type: string
    // };
    private data: any;
    private inputAttributes: string[] = ['value', 'min', 'max', 'step', 'type'];

    constructor(data: any) {
        this.data = data;
    }

    public getData(key: string) {
        if (key == 'all') return this.data;
        return this.data['key'];
    }

    public createRangeSlider() {
        let rangeContainer = this.createElement('div', 'range-slider__range');

        rangeContainer.appendChild(this.createInput());
        if (this.data.range) rangeContainer.appendChild(this.createInput(1));

        return rangeContainer;
    }

    private createInput(numberElement: number = 0) {
        let input = this.createElement('input', 'range-slider__input');
        this.inputAttributes.forEach((item) => {
            input.setAttribute(item,
                Array.isArray(this.data[item]) ?
                    this.data[item][numberElement] :
                    this.data[item]);
        });
        return input
    }

    private createElement(elem: string, className: string) {
        let element = document.createElement(elem);
        element.classList.add(className);
        return element;
    }

}

