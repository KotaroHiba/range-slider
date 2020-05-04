import './css/orange.sass';
import Presenter from "./app/Presenter";
import View from "./app/View";
import Model from "./app/Model";

let slider = new Presenter({});


console.log(slider.model.getData('all'));
