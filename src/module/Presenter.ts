import Model from "./Model";
import Views from "./Views";

export default class Presenter {
    protected model: Model;
    protected views: Views;

    constructor(dataRangeSlider: object) {
        this.model = new Model(dataRangeSlider);
        this.views = new Views();
        this.createRangeSlider();
        this.trackClickController()
    }

    protected trackClickController() {
        const model: Model = this.model;
        for (let block of model.getBlocks()) {
            block.onclick = () => this.views.setPoint(block, model.getCoordinates(block, event));
        }
    }

    public createRangeSlider() {
        const data = this.model.getData();
        const blocks = this.model.getBlocks();
        this.views.outputRangeSlider(blocks, data);
        if(data.twoPoint)
            this.addPoint();
        if(data.loadingBar)
            this.addLoadingBar()
    }

    private addPoint(){
        this.views.outputSliderPoint(this.model.getBlocks())
    }

    private addLoadingBar(){
        this.views.outputLoadingBar(this.model.getBlocks());
    }
}
