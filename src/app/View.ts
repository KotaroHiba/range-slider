export default class View {
    private viewOptions : any = ['twoInput', 'vertical'];
    public displayRangeSlider(obj: any, data: any) : void {
        obj.prepend('<input type="range" class="range-slider__input">');

        for (let attribute in data) {
            let viewOptions = this.viewOptions;
            if (viewOptions.includes(attribute)) {
                $(obj).addClass('range-slider_' + attribute)
            } else {
                $(obj).children('.range-slider__input').attr(attribute, data[attribute]);
            }

        }
    }

    public displayLoadingBar(obj: any, numbers: any) : void {
        obj.append('<div class="range-slider__loading-bar"></div>');
        for (let number of numbers) {
            $(obj).children('.range-slider__loading-bar').append(`<div>${number}</div>`)
        }
    }

    public displayTwoPoint(obj : any) {

    }

    public displayAlert(string: string) {
        alert(string);
    }
}

