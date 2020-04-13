export default class Views {

    public setPoint(block : any, coordinates : number ,namePoint : string = 'range-slider__point_one')
    {
        return block.querySelector('.' + namePoint).style.left = `${coordinates}%`
    }

}