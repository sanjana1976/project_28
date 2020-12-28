class Mango  {
    constructor(x,y){
       var options= {
isStatic:true,
restitution:0,
friction:1,
//scale= 0.2,
        }
       
        this.body= Matter.Bodies.circle(x,y,1,options)
        World.add(world, this.body);

      this.image = loadImage("pictures/mango.png");
     // size(20,200)
     this.width= 50
     this.height=40
      }
  
    display() {
         var pos =this.body.position;
        
   
     // rectMode(CENTER);
     
     
    
     //ellipse(0,0,this.width,this.height);
     
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
      World.add(world,this.body);
     
    }
   
  }  
    
  // this.image= loadImage("sprites/paper.png");
  

