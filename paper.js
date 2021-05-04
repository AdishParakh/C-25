class Paper{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:0.3, 
            density: 3
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius
        World.add(world,this.body);
        this.image=loadImage("paper.png")
    }

    display(){
        var pos=this.body.position
        imageMode(CENTER);
        push();
        translate(pos.x,pos.y);
        fill("yellow");
        noStroke();
        image(this.image, 0,0, 50, 50);
        pop();
       
    }

}