class Block4{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.1,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        fill(rgb(235,200,178));
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
  }