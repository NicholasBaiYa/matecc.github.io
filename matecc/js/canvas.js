window.onload = function () {
    var canvas = document.getElementById("xmas");
    var ctx = canvas.getContext("2d");

    //canvas 尺寸
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //雪花 数量
    var mp = 50;
    var particles = [];
    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W + 1 >> 0,
            // x-坐标
            y: Math.random() * H + 1 >> 0,
            // y-坐标
            r: Math.random() * 5 + 2 >> 0,
            // 半径
            d: Math.random() * mp + 1 >> 0
            // 密度 影响下落速度
        });

    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }

    // 更新雪花坐标
    var angle = 0;
    function update() {
        angle += 0.01;
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            //更新X和Y坐标
            p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) / 4;
            p.x += Math.sin(angle) * 0.5;

            if (p.x > W + p.r || p.x < 0 - p.r || p.y > H + p.r) {
                if (i % 3 > 0) {
                    particles[i] = {
                        x: Math.random() * W,
                        y: -10,
                        r: p.r,
                        d: p.d
                    };
                } else {
                    //如果雪花从右边飘出
                    if (Math.sin(angle) > 0) {
                        particles[i] = {
                            x: -5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d
                        };
                    } else {
                        particles[i] = {
                            x: W + 5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d
                        };
                    }
                }
            }
        }
    }
    setInterval(draw, 15);
}