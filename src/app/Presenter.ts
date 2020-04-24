import Model from "./Model";
import View from "./View";

export default class Presenter {
    private model : Model;
    private view : View;

    constructor(data : any) {
        this.addDataModel(data);
        this.view = new View();
    }

    private addDataModel(data: any){
        this.model = new Model(data);
        console.log(this.model.getData('max'));
    }



}


