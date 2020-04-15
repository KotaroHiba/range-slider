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
            block.onclick = () => {
                this.views.setPoint(block, model.getCoordinates(block, event), this.selectionPoint(block, this.model.getCoordinatesPoints(block)));
            }
        }
    }

    public createRangeSlider() {
        const data = this.model.getData();
        const blocks = this.model.getBlocks();
        this.views.outputRangeSlider(blocks, data);
        if(data.twoPoint) this.addPoint();
        if(data.loadingBar) {
            this.addLoadingBar();
            this.views.outputScaleOfValues(blocks, this.model.getScaleOfValues(data.minValue, data.maxValue))
        }

    }

    private addPoint(){
        this.views.outputSliderPoint(this.model.getBlocks())
    }

    private addLoadingBar(){
        this.views.outputLoadingBar(this.model.getBlocks());
    }

    private selectionPoint(block : any , coord : number[]){
        let way : number[] = [];
        if (coord.length == 1) return 'range-slider__point_one'
        for (let i = 0; i < coord.length; i++)
            way[i] = Math.abs(this.model.getCoordinates(block, event) - coord[i]);
        return way[0] < way[1] ? 'range-slider__point_one' : 'range-slider__point_two'
    }
}
