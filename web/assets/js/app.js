let options = ['Pirmas', 'Antras', 'Trecias', 'Ketvirtas', 'Penktas', 'Sestas', 'septintas', 'astuntas'];
let colors = ['#fff', '#000', '#fff', '#000'];
let slices = options.length;
let sliceDeg = 360 / slices;
let deg = 0;
let width = canvas.width;
let ctx = canvas.getContext('2d');
let center = width / 2;
let spinDeg = 0;
let mouseClicks = 0;
let spinTime = 90;
let spinDegCalc = 890000;
const deg2rad = (deg) => deg * Math.PI / 180;
const canvasWheel = document.querySelector('canvas');

const drawSlice = (degg, color) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(center, center);
    ctx.arc(center, center, center, deg2rad(degg), deg2rad(degg + sliceDeg));
    ctx.lineTo(center, center);
    ctx.fill();
}

const drawText = (deggg, text) => {
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(deg2rad(deggg));
    ctx.textAlign = 'left';
    // ctx.fillStyle = '#fff';
    ctx.font = 'Bold 40px sans-serif';
    ctx.fillText(text, 130, 10);
    ctx.restore();
}

let drawWheel = (inpDeg) => {
    for (let i = 0; i < slices; i++) {
        if (i >= 4) {
            drawSlice(inpDeg, colors[i - 4]);
            drawText(inpDeg + sliceDeg / 2, options[i]);
            inpDeg += sliceDeg;

        } else {
            drawSlice(inpDeg, colors[i]);
            drawText(inpDeg + sliceDeg / 2, options[i]);
            inpDeg += sliceDeg;

        }
    }
}
drawWheel(deg);

const randomR = () => {

    switch (Math.floor(Math.random() * Math.floor(7))) {
        case 0:
            spinTime *= 0.7;
            spinDegCalc *= 0.7;
            break;
        case 1:
            spinTime *= 0.8;
            spinDegCalc *= 0.8;
            break;
        case 2:
            spinTime *= 0.9;
            spinDegCalc *= 0.9;
            break;
        case 3:
            spinTime *= 1.0;
            spinDegCalc *= 1.0;
            break;
        case 4:
            spinTime *= 1.1;
            spinDegCalc *= 1.1;
            break;
        case 5:
            spinTime *= 1.2;
            spinDegCalc *= 1.2;
            break;
        case 6:
            spinTime *= 1.3;
            spinDegCalc *= 1.3;
            break;
    }
}


canvasWheel.addEventListener("click", function() {

    randomR();
    spinDeg += spinDegCalc;
    spinDegCalc = 960;
    canvasWheel.style.transition = `all ${spinTime}s cubic-bezier(.17,.74,.29,1.00) 0s`;
    canvasWheel.style.transform = `rotate(${spinDeg}deg)`;
    spinTime = 4;
});