class Ground{

constructor(x,y,width,height) {

var opt={
    isStatic:true
}

this.body = Bodies.rectangle(x,y,width,height,opt)
World.add(world,this.body)
this.width = width;
this.height = height;

}

display(){

    var pos = this.body.position
    push ();
    translate (pos.x,pos.y)
    fill ("brown")
    stroke ( "green")
    strokeWeight(5)
    rect (0,0, this.width,this.height )
    pop ();
  }
  
  

}