var kick_frames = [ 
    {'name':'player_kick01', 'frame':{'x':0, 'y': 0, 'width': 65, 'height': 76}},
//    {'name':'player_kick02', 'frame':{'x':81, 'y': 0, 'width': 71, 'height': 76}},
//    {'name':'player_kick03', 'frame':{'x':168, 'y': 0, 'width': 81, 'height': 76}},
//    {'name':'player_kick04', 'frame':{'x':265, 'y': 0, 'width': 91, 'height': 76}},
    {'name':'player_kick05', 'frame':{'x':372, 'y': 0, 'width': 94, 'height': 76}},
    {'name':'player_kick06', 'frame':{'x':482, 'y': 0, 'width': 92, 'height': 76}},
    {'name':'player_kick07', 'frame':{'x':372, 'y': 0, 'width': 94, 'height': 76}},
//    {'name':'player_kick08', 'frame':{'x':265, 'y': 0, 'width': 91, 'height': 76}},
//    {'name':'player_kick09', 'frame':{'x':168, 'y': 0, 'width': 81, 'height': 76}},
//    {'name':'player_kick10', 'frame':{'x':81, 'y': 0, 'width': 71, 'height': 76}},
    {'name':'player_kick11', 'frame':{'x':0, 'y': 0, 'width': 65, 'height': 76}}
];



function make_head_kick(){
        //head
    head_sprite = createSprite(100, height-120);
    head_sprite.setCollider('circle', 0, 0, 35);
    head_sprite.addAnimation('kick', player_kick);
    head_sprite.addAnimation('stand', player_stand);
    head_sprite.scale = 0.9;
    head_sprite.immovable = true;
}






function head_kick_draw(){
    
//    head_sprite.bounce(leftnet_top_pole)
//    football.touching.top(leftnet_top_pole);
    
    
    head_sprite.changeAnimation('stand');
    head_sprite.velocity.x = 0;
    
//    head_sprite.velocity.y = 0;
    head_sprite.velocity.y += 0.7;
    
if(head_sprite.collide(btm_tile)) {
    head_sprite.velocity.y = 0;
  }
    
    
    if(head_sprite.collide(leftnet_top_pole) || head_sprite.collide(rightnet_top_pole)) {
        head_sprite.velocity.y = 0;
    }
    
    if(keyWentDown('up') && head_sprite.position.y>50){
        head_sprite.velocity.y = -10;
    }
    
    
    //kick the ball
    if(keyDown('space') ) {
        head_sprite.changeAnimation('kick');
    }
    
    //player move right
    if(keyDown('right') && (head_sprite.position.x < windowWidth-30) ) {
        head_sprite.velocity.x = 7;
    }
    
    //player move left
    if(keyDown('left') && (head_sprite.position.x > 30)) {
        head_sprite.velocity.x = -7;
    }
    
}




function make_bot_head_kick(){
        //head
    bothead_sprite = createSprite(width-160, height-120);
        bothead_sprite.mirrorX(-1);
    bothead_sprite.setCollider('circle', 0, 0, 35);
    bothead_sprite.addAnimation('kick', player_kick);
    bothead_sprite.addAnimation('stand', player_stand);
    bothead_sprite.scale = 0.9;

    bothead_sprite.immovable = true;
}