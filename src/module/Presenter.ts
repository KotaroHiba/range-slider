import Model from "./Model";
import Views from "./Views";

export default class Presenter {
    protected model: Model = new Model('block', 'controller');
    protected views: Views = new Views();

    constructor() {
        this.trackClickController()
    }

    protected trackClickController() {
        for (let i = 0; i < this.model.getControllers().length; i++) this.model.getControllers()[i].onclick = () => this.views.colorSwap(this.model.getBlock(), this.model.getControllers()[i].dataset.color)
    }

}

