class Rope{
    constructor(bodyA,bodyB){
        var options={
            length:10,
            stiffness:0.04,
            bodyA:bodyA,
            bodyB:bodyB
        }
     this.chain=Constraint.create(options)
     World.add(world,this.chain);
    }

    display(){
        var pointa=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;

        line(pointa.x,pointa.y,pointB.x,pointB.y);
    }
}