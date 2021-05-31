class Launcher{
    constructor(body, anchor){
        var options={
            bodyA:body,
            pointB:anchor,
            stiffness:0.04,
            length:10
        }
        //this.bodyA = body;
        this.pointB = anchor;
        this.launcherObj = Constraint.create(options);
        World.add(world, this.launcherObj);
    }
    attach(body){
        this.launcherObj.bodyA = body;
    }
    fly(){
        this.launcherObj.bodyA = null;
    }
    display(){
        if(this.launcherObj.bodyA){
            var pointA = this.launcherObj.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(14);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}