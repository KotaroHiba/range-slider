import Model from "./Model";
import View from "./View";

export default class Presenter {
    public model: Model;
    private view: View;
    private defaultData = {
        obj: 'slider',
        vertical: true, // boolean
        range: true, // boolean
        output: true, // boolean
        value: [0, 100], // array | number
        min: 0, // number
        max: 100, // number
        step: 1, // number
        type: 'range'
    };
    constructor(data: any) {
        // this.model = new Model(Object.setPrototypeOf(data), this.defaultData);
        Object.setPrototypeOf(data, this.defaultData);
        this.model = new Model(data);
        this.view = new View();
    }

    private dataCheck(data: any) {
        return !(data.min > data.max || data.step > data.max);
    }
}


