import doc = Mocha.reporters.doc;

export default class Views {

    public outputRangeSlider(blocks: any, values: any) {
        for (let block of blocks) {
            block.innerHTML = `
            <div class="range-slider__scale">
                <div class="range-slider__point range-slider__point_one" style="left:30%"></div>
            </div>`;
        }
    }

    public outputLoadingBar(blocks: any) {
        for(let block of blocks)
            block.innerHTML += '<div class="loading-bar range-slider__loading-bar"></div>'
    }


    public outputSliderPoint(blocks: any = {}) {
        for (let block of blocks)
            block.querySelector('.range-slider__scale').innerHTML += '<div class="range-slider__point range-slider__point_two" style="left: 70%"></div>'

    }


    public setPoint(block: any, coordinates: number, namePoint: string = 'range-slider__point_one') {
        return block.querySelector('.' + namePoint).style.left = `${coordinates}%`
    }

    public  outputScaleOfValues(blocks: any, values: number[]) {
        for (let block of blocks){
            for (let item of values)
                block.querySelector('.loading-bar').innerHTML = block.querySelector('.loading-bar').innerHTML + `<div>${item}</div>`
        }

    }
}