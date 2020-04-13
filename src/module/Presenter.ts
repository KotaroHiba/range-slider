import Model from "./Model";
import Views from "./Views";


export default class Presenter {
    protected model: Model = new Model({
        blockName: 'range-slider'
    });
    protected views: Views = new Views();

    constructor() {
        this.trackClickController()
    }

    protected trackClickController() {
        const model: Model = this.model;
        for (let block of model.getBlocks())
            block.onclick = () => this.views.setPoint(block, model.getCoordinates(block, event));}

}

