export default class Views {

    public setPoint(block : any, coordinates : number ,namePoint : string = 'range-slider__point_one')
    {
        return block.querySelector('.' + namePoint).style.left = `${coordinates}%`
    }
    // TODO перенести блок с логикой в Model
    public static outputScaleOfValues(block:any ,values:number[]){
        let step:number = values[1] / 4;
        let steps : number[] = [0];
        for (let i = 0; i < 4; i++) {
            steps.push(step);
            step += values[1] / 4
        }

        for (let item of steps)
            block.innerHTML = block.innerHTML + `<div>${item}</div>`
    }
}



Views.outputScaleOfValues(document.getElementById('test'), [0,100]);