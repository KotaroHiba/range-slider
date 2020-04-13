export default class Model {
    private blocks: any;


    constructor(data: any) {
        this.searchBlocks(data.blockName);
        this.searchController()
    }

    public getBlocks() {
        return this.blocks
    }


    public getCoordinates(block: any, event: any) {
        event.stopPropagation();
        let x: number = event.clientX - 15;
        alert(x)
        return this.conventPersent(block, x);
    }

    private conventPersent(block: any, value: number) {
        return value / block.offsetWidth * 100;
    }

    private searchBlocks(blockName: string) {
        this.blocks = document.getElementsByClassName(blockName);
    }

    private searchController() {
        for (let i = 0; i < this.blocks.length; i++) this.blocks[i].querySelectorAll('.range-slider__point');
    }
}

function randomInteger(min: any, max: any) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

