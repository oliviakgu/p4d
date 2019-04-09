class Snowflake
{
    constructor()
    {
        // Create a new snowflake with a default
        // x, y, size, and speed
        this.x = 100;
        this.y = 0;
        this.size = 10;
        this.speed = 2;
    }

    move()
    {
        // Move down based on the speed
        this.y = this.y + this.speed;
        
        // Wrap the snowflake back to the top of the canvas
        this.y %= height; // Divides y by the height and then sets y to the remainder
    }
    
    display()
    {
        push();
        // Make our snowflakes blue
        fill(0, 0, 255, 50);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
        pop();
    }
}
