// export default class Model {
//     private blocks: any;
//
//
//     constructor(data: any) {
//         this.searchBlocks(data.blockName);
//         this.searchController()
//     }
//
//     public getBlocks() {
//         return this.blocks
//     }
//
//
//     public getCoordinates(block: any, event: any) {
//         event.stopPropagation();
//         // TODO написать автоматическое вычисление длины точек и вычитать их
//         let x: number = event.clientX - 15;
//         return this.conventPersent(block, x);
//     }
//
//     public getCoordinatesPoints(block: any, arr: string[]) {
//         let elements = block.querySelectorAll('.range-slider__point');
//         // if (!elements[1]) return false
//         alert(elements[0].style.left);
//     }
//
//     // TODO функция адекватно работает только в диапазоне [0, 100]
//     public getScaleOfValues(min : number, max : number){
//         let step:number = max / 4;
//         let steps : number[] = [min];
//         for (let i = 0; i < 4; i++) {
//             steps.push(step);
//             step += max / 4
//         }
//         return steps;
//     }
//
//     private conventPersent(block: any, value: number) {
//         return value / block.offsetWidth * 100;
//     }
//
//     private searchBlocks(blockName: string) {
//         this.blocks = document.getElementsByClassName(blockName);
//     }
//
//     private searchController() {
//         for (let i = 0; i < this.blocks.length; i++) this.blocks[i].querySelectorAll('.range-slider__point');
//     }
// }
//
// function randomInteger(min: any, max: any) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
// }
//
