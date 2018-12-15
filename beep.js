var gMajorPentatonic = [98, 110, 123.47, 146.83, 164.81, 196, 220, 246.94, 293.66, 329.63, 392, 440, 493.88, 587.33, 659.25, 783.99, 880, 987.77, 1174.66, 1318.51, 1567.98];
var gMinorPentatonic = [98, 116.54, 130.81, 146.83, 174.61, 196, 233.08, 261.63, 293.66, 349.23, 392, 466.16, 523.25, 587.33, 698.46, 783.99, 932.33, 1046.5, 1174.66, 1396.91, 1567.98];

function beepOnClick(event) {
    var x = event.clientX;
    var y = event.clientY;

    var myBeep = new Pizzicato.Sound({
        source: 'wave',
        options: {
            release: 0.1,
            frequency: gMinorPentatonic[(x +y) % gMinorPentatonic.length]
        }
    });

    var pingPongDelay = new Pizzicato.Effects.PingPongDelay({
    feedback: 0.3,
    time: 0.2,
    mix: 0.68
});
    myBeep.addEffect(pingPongDelay);
    myBeep.play();
    setTimeout(function(){myBeep.stop()}, 500);
    setBGColor(x, y);
}

function setBGColor(x, y) {
    var r = normalize(x, 255);
    var g = normalize(y, 255);
    var b = normalize(x+y, 255);

    document.body.style.backgroundColor = 'rgb(' + [r,g,b].join(',') + ')';
}

function normalize(v, n) {
    return v % n; 
}

document.addEventListener("mousedown", beepOnClick);