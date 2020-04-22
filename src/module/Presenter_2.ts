import Model_2 from "./Model_2";
import Views_2 from "./Views_2";

export default class Presenter_2 {
 private model_2: Model_2;
 private views_2: Views_2;

 constructor(dataSlider: any) {
  this.model_2 = new Model_2();
  this.views_2 = new Views_2();

  this.devRangeSlider(dataSlider);
 }

 public searchRangeSliderContainer(searchContainerAttribute: string) {
  return document.querySelector('.' + searchContainerAttribute);
 }
 public searchRangeSlider(searchSliderAttribute: string) {
  return document.querySelectorAll('.' + searchSliderAttribute);
 }

 public devRangeSlider(dataSlider: any) {
  this.views_2.createDisplayRangeSlider({
   locationContainer: this.searchRangeSliderContainer(dataSlider.location),
   element: this.model_2.getRangeSlider(dataSlider)
  })
 }
}