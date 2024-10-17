function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(30, 30, 30);

    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let size = random(20, 100);
        fill(random(255), random(255), random(255), 150);
        ellipse(x, y, size, size);
    }
}
