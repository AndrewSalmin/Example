var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

setInterval(drawTime, 100);

function drawTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();

    var hours_10 = parseInt(hours / 10);
    var hours_1 = hours % 10;

    var minutes_10 = parseInt(minutes / 10);
    var minutes_1 = minutes % 10;

    var seconds_10 = parseInt(seconds / 10);
    var seconds_1 = seconds % 10;

    var side_large = 50;
    var side_small = side_large / 2;
    var gap = 1;

    //background drawing
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 18 * side_large + 7 * side_small + 24 * gap, 5 * side_large + 4 * gap);
    ctx.fillStyle = "#00FF00";

    //hours tens drawing
    drawNumber(hours_10, side_large, gap);
    ctx.translate(4 * (side_large + gap), 0);

    //hours ones drawing
    drawNumber(hours_1, side_large, gap);
    ctx.translate(4 * (side_large + gap), 0);

    //dots drawing
    if (milliseconds <= 500) {
        for (let i = 1; i <= 3; i += 2) {
            ctx.fillRect(0, i * (side_large + gap), side_large, side_large);
        }
    }
    ctx.translate(2 * (side_large + gap), 0);

    //minutes tens drawing
    drawNumber(minutes_10, side_large, gap);
    ctx.translate(4 * (side_large + gap), 0);

    //minutes ones drawing
    drawNumber(minutes_1, side_large, gap);
    ctx.translate(4 * (side_large + gap), 5 * (side_large - side_small));

    //seconds tens drawing
    ctx.fillStyle = "#FFFF00";
    drawNumber(seconds_10, side_small, gap);
    ctx.translate(4 * (side_small + gap), 0);

    //seconds ones drawing
    drawNumber(seconds_1, side_small, gap);

    //return to starting point
    ctx.translate(- 18 * side_large - 4 * side_small - 22 * gap, - 5 * (side_large - side_small));
}

function drawNumber(number, side, gap) {
    //0
    if (number == 0) {
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(0, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i += 2) {
            if (i == 2) {
                continue;
            }
            ctx.fillRect(side + gap, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }

    //1
    if (number == 1) {
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }

    //2
    if (number == 2) {
        for (let i = 0; i <= 4; i++) {
            if (i == 1) {
                continue;
            }
            ctx.fillRect(0, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i += 2) {
            ctx.fillRect(side + gap, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i++) {
            if (i == 3) {
                continue;
            }
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }

    //3
    if (number == 3) {
        for (let i = 0; i <= 4; i++) {
            if (i == 1 || i == 3) {
                continue;
            }
            ctx.fillRect(0, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i += 2) {
            ctx.fillRect(side + gap, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }

    //4
    if (number == 4) {
        for (let i = 0; i <= 4; i++) {
            if (i == 3 || i == 4) {
                continue;
            }
            ctx.fillRect(0, i * (side + gap), side, side);
        }
        ctx.fillRect(side + gap, 2 * (side + gap), side, side);
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }

    //5
    if (number == 5) {
        for (let i = 0; i <= 4; i++) {
            if (i == 3) {
                continue;
            }
            ctx.fillRect(0, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i += 2) {
            ctx.fillRect(side + gap, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i++) {
            if (i == 1) {
                continue;
            }
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }

    //6
    if (number == 6) {
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(0, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i += 2) {
            ctx.fillRect(side + gap, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i++) {
            if (i == 1) {
                continue;
            }
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }

    //7
    if (number == 7) {
        ctx.fillRect(0, 0, side, side);
        ctx.fillRect(side + gap, 0, side, side);
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }

    //8
    if (number == 8) {
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(0, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i += 2) {
            ctx.fillRect(side + gap, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }

    //9
    if (number == 9) {
        for (let i = 0; i <= 4; i++) {
            if (i == 3) {
                continue;
            }
            ctx.fillRect(0, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i += 2) {
            ctx.fillRect(side + gap, i * (side + gap), side, side);
        }
        for (let i = 0; i <= 4; i++) {
            ctx.fillRect(2 * (side + gap), i * (side + gap), side, side);
        }
    }
}