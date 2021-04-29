class Box3
{
    constructor(x, y, width, height)
    {
        var options = {restitution : 0.4, friction : 0.6, density : 0.8}


        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;

        World.add(world, this.body)
    }

    display()
    {
        rectMode(CENTER)

        var pos = this.body.position;

        fill("red")
        rect(pos.x, pos.y, this.width, this.height)
    }
}