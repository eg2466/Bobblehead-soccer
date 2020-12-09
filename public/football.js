//class Football {
//    
//  constructor(name, wd, ht) {
//    this.name = name;
//    this.wd = wd;
//    this.ht = ht;
//  }
//    
//  display() {
//    createSprite(this.wd,this.ht);
//    this.addImage('football', fb_img);
//  }    
//
//  move() {
//  }
//
//
//}




function make_football() { 
    
        //football
        football = createSprite(600,100);
         football.setCollider('circle', 0, 0, 20);
        football.addImage('football', fb_img);
        football.setSpeed(10, 90);
        football.scale = 0.6;
        football.mass = 5;
    
}


function draw_football(){
//    football.bounce(btm_tile);
    football.bounce(head_sprite);
    football.bounce(bothead_sprite);
   football.bounce(platform_tile);
    
    football.bounce(leftnet_left_pole);
    football.bounce(leftnet_bottom_pole);
    football.bounce(leftnet_top_pole);
    
    football.bounce(rightnet_right_pole);
    football.bounce(rightnet_bottom_pole);
    football.bounce(rightnet_top_pole);
    
    football.velocity.y += 0.5
    
    
    if(football.collide(btm_tile)) {
      football.velocity.y = -0.8 * abs(football.velocity.y);
    }
    
    
    if(football.position.y<0) {
      football.velocity.y = abs(football.velocity.y);
    }
    
    if(football.position.x<10) {
      football.position.x = 10;
      football.velocity.x = 0.7 * abs(football.velocity.x);
    }
    
    
    
    //function to remove football and increase score
    if(football.collide(rightnet_right_pole)) {
        console.log('touch right pole')
      remove(football);
    }    
    

    if(football.position.x > windowWidth-10) {
      football.position.x = windowWidth-10;
      football.velocity.x = -0.7 * abs(football.velocity.x);
    }
    
}