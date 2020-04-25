import Model from "./Model";
import View from "./View";

export default class Presenter {
    private model: Model;
    private view: View;

    constructor(data: any) {
        this.view = new View();
        this.addDataModel(data);
    }

    public createRangeSlider(html: any) {
        let obj: any = $(html);
        let data = this.model.getData('all');
        this.view.displayRangeSlider(obj, data);
    }


    private addDataModel(data: any) {
        this.dataCheck(data) ? this.model = new Model(data) : this.view.displayAlert('Введите корректные данные');
    }

    private dataCheck(data: any) {
        if (data.value <= 0 || data.step > data.value || data.max < data.min) return false;
        return true;
    }



}


