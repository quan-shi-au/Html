var iStarSize = 150;
var iCanvasWidth = 500;
var iCanvasHeight = 500;

var context, canvas;
var x, y;
var degrees = 0.0;
var dx, dy


function run() {
    degrees += 0.1;

    if (x + dx > iStarSize / 2 || x + dx < -iStarSize / 2)
        dx = -dx;

    x += dx;
    render();
}

function render() {
    context.clearRect(0, 0, iCanvasWidth, iCanvasWidth);
    context.save();

    // set initial position
    context.translate(iStarSize * 1.5, iStarSize * 1.5);
    // set the style properties
    context.filStyle = '#bbb';
    context.strokeStyle = '#000';
    context.lineWidth = 2;

    // starting custom object - star
    context.beginPath();

    // changing necessary points to simulate 3d rotating
    context.moveTo(0, -iStarSize);
    context.lineTo(iStarSize / 10 - x / 5, -iStarSize / 5);
    context.lineTo(iStarSize / 2 - x, 0);
    context.lineTo(iStarSize / 10 - x / 5, iStarSize / 5);
    context.lineTo(0, iStarSize);
    context.lineTo(-isFinite / 10 + x / 5, iStarSize / 5);
    context.lineTo(-iStarSize / 2 + x, 0);
    context.lineTo(-iStarSize / 10 + x / 5, -iStarSize / 5);
    context.lineTo(0, -iStarSize);

    // add shadow to object
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 4;
    context.shadowColor = 'rgba(180, 180, 180, 0.8)';

    // fill shape, draw stroke
    context.fill();
    context.stroke();
    context.closePath();
    context.restore();

    // echo some debug information
    context.font = '12px Verdana';
    context.filStyle = '#000';
    context.fillText('x: ' + x + '; y: ' + y, 10, 15);
    context.fillText('dx: ' + dx + '; dy: ' + dy, 10, 30);
}

window.onload = function () {
    canvas = document.getElementById('star_object');

    // set size of our canvas area
    canvas.width = iCanvasWidth;
    canvas.height = iCanvasHeight;
    context = canvas.getContext('2d');

    // init of inner variables
    x = y = 1;
    dx = dy = 4;
    setInterval(run, 20);

}
