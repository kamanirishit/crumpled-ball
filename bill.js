class Ball{
    constructor(){
        var option={
            restitution:0.0,
            friction: 0.7
        }
   this.body=Bodies.circle(200,350,20,option);
   World.add(world,this.body);  
   this.width=40;
   this.height=15 ;
  }
  display(){
      rectMode(CENTER);
            fill("white");
            stroke("black");
            ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,20);
  }
  
}