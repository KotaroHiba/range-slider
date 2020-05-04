export default class View {
    
    public  displayElement(element: any, container : any){
        container.appendChild(element);
    }

    public addClass(className: string, container: any) {
        container.classList.add('range-slider__' + className);
    }

    public removeClass(className: string, container: any) {
        container.classList.remove('range-slider__' + className);
    }

}

