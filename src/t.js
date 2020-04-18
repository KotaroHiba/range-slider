export  default function getScaleOfValues(min = 0, max= 100) {
    let step = max / 4;
    let steps = [min];
    for (let i = 0; i < 4; i++) {
        steps.push(step);
        step += max / 4
    }
    // return steps;
    return 1;
}


