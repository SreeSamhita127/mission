class PACK {
 constructor(x,y,width,height){
     var options ={
         'restitution':0.9,
         'friction':0.4,
         'density':2
     }

     this.body = Bodies.rectangle(x,y,width,height,options);
     this.widht = width;
     this.height = height;
     
     World.add(world, this.body);
    }
    display(){
        var Me = this.body.position;
        rectMode(CENTER);
        rect(Me.x, Me.y, this.width, this.height);
        pop();
    }
 };