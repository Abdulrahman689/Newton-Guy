class Rope {
    constructor(bodyA,pointB){
        
        var options = {
            bodyA : bodyA,
           pointB: pointB,

        }
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;
        this.rope = Constraint.create(options)
      
        World.add(world, this.rope)

    }
display(){
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB
    push();
    strokeWeight(4)
    // makes a line between two things
    line(pointA.x, pointA.y, pointB.x, pointB.y)
    pop();
}
}