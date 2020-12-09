function platform_setup() {
    
//        left net
//    leftnet_net = createSprite(width/2,100);
//    leftnet_net.addImage('net1_net', leftnet_net_img);
//    leftnet_net.immovable = true;
    
    platform_tile = new Group();

    for(var j=0; j<120; j++)
      {
        
        platform = createSprite((width-300+(j) ), 150+(j), 50, 50);
//        platform.addImage('tile', tile_img);
        platform.immovable = true;
        platform.scale = 0.4;
          platform.shapeColor = 0;
        platform_tile.add(platform);
      }
    
        for(var j=0; j<120; j++)
      {
        
        platform = createSprite((200+(j) ), 270-(j), 50, 50);
//        platform.addImage('tile', tile_img);
        platform.immovable = true;
        platform.scale = 0.4;
          platform.shapeColor = 0;
        platform_tile.add(platform);
      }
    
    

}