class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 120;
      this.height = 120;
      this.image= loadImage("pictures/boy.png"); 

      World.add(world, this.body);
    
       
}
display(){
  var pos =this.body.position;
  rectMode(CENTER);
 // fill("brown");
  //rect(pos.x, pos.y, this.width, this.height);
  imageMode(CENTER);
   image(this.image, 100, 655, this.width, this.height);
}
};
