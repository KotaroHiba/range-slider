export default class View {
    public displayRangeSlider(obj : any, data : any){
        obj.prepend('<input type="range" class="range-slider__input">');
        for (let attribute in data) $(obj).children('.range-slider__input').attr(attribute, data[attribute]);
    }

    public displayAlert(string : string){
        alert(string);
    }
}

