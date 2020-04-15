// import './css/range-slider.scss'
import './css/orange.sass'

import Presenter from "./module/Presenter";
new Presenter({
    blockName: 'mem',
    minValue: 0,
    maxValue: 100,
    twoPoint: true,
    vertical: true,
    loadingBar: true,
});


