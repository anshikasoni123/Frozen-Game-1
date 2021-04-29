class Star
{
    constructor(x, y, radius)
    {
        var options = {friction : 0.4, density : 1.0}

        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius;

        World.add(world, this.body);
    }

    display()
    {
        imageMode(CENTER)

        var pos = this.body.position;

        fill("yellow")
        ellipse(pos.x, pos.y, this.radius, this.radius)
    }
}