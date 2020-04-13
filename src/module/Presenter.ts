import Model from "./Model";
import Views from "./Views";


export default class Presenter {
    protected model:Model;
    protected views: Views;

    constructor(dataRangeSlider : object) {
        this.model = new Model(dataRangeSlider);
        this.views = new Views();
        this.trackClickController()
    }

    protected trackClickController() {
        const model: Model = this.model;

        for (let block of model.getBlocks()) {
            // this.model.getCoordinatesPoints(block, []);
            block.onclick = () => this.views.setPoint(block, model.getCoordinates(block, event));
        }
    }
}

