class Plinko {
    constructor(x, y) {
        var options = {
            isStatic: false,
            friction: 0.5,
            density: 1
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill(255);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }

}