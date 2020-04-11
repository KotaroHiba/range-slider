export default class Model {
    protected block: any;
    protected arrColors: any = ['red', 'green', 'white', 'pink'];
    protected controllers: any;


    constructor(idName: string, classNameControllers: string) {
        this.block = this.searchBlock(idName);
        this.controllers = this.searchControllers(classNameControllers)
    }

    protected searchBlock(idName: any) {
        return document.getElementById(idName);
    }

    protected searchControllers(className: string) {
        return document.getElementsByClassName(className)
    }

    public getControllers(){
        return this.controllers;
    }

    public getBlock() {
        return this.block
    }

    public getColors(): string {
        return this.arrColors[randomInteger(0, 4)]
    }



}

function randomInteger(min: any, max: any) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}