class Box {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png")
      
      World.add(world,this.body);
      
    }
    display(){
      var pos =this.body.position;
      fill("white");
      imageMode(CENTER);
      image(this.image,1200,425);
    }
  };