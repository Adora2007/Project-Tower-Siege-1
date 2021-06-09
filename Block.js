class Block  {
    constructor(x, y, width, height, angle) {
        var options = {
      
            'restitution': 1.2,
            'friction':1.0,
            'density':1.0
     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);

    }
  }