var football;
var tile;
let bg;
let net_1;
let net_1_sprite;

let btm_tile;
    
//left net
let leftnet_left_pole_img;
let leftnet_bottom_pole_img;
let leftnet_right_pole_img;
let leftnet_top_pole_img;
let leftnet_net_img;

let leftnet_left_pole
let leftnet_bottom_pole
let leftnet_top_pole
let leftnet_right_pole
let leftnet_net;

//right net
let rightnet_right_pole_img;
let rightnet_bottom_pole_img;
let rightnet_left_pole_img;
let rightnet_top_pole_img;
let rightnet_net_img;

let rightnet_right_pole;
let rightnet_bottom_pole;
let rightnet_left_pole;
let rightnet_top_pole;
let rightnet_net;



let head_sprite;
let shoe_sprite;

let ball_y;
let ball_y_speed;
let ball_gravity = 0.2;

var kick_frames;

let gameState = "start";

function resetGame () {
    gameState = "start";
    player1_score = 0;
    player2_score = 0;
}

function preload(){
    bg = loadImage('../assets/bkg.png');
    
    tile_img = loadImage('../assets/Tile.png');
    
    fb_img = loadImage('../assets/SoccerBall.png');
    
    leftnet_left_pole_img = loadImage('../assets/net/left_pole.png');
    leftnet_bottom_pole_img = loadImage('../assets/net/bottom_pole.png');
    leftnet_right_pole_img = loadImage('../assets/net/right_pole.png');
    leftnet_top_pole_img = loadImage('../assets/net/top_pole.png');
    leftnet_net_img = loadImage('../assets/net/net.png');
    
    rightnet_right_pole_img = loadImage('../assets/net/right/r_right_pole.png');
    rightnet_bottom_pole_img = loadImage('../assets/net/right/r_bottom_pole.png');
    rightnet_left_pole_img = loadImage('../assets/net/right/r_left_pole.png');
    rightnet_top_pole_img = loadImage('../assets/net/right/r_top_pole.png');
    rightnet_net_img = loadImage('../assets/net/right/right_net.png');
 
    
    kick_sprite_sheet = loadSpriteSheet('../assets/kicksprite.png', kick_frames);
    
    player_kick = loadAnimation(kick_sprite_sheet);
     
    player_stand = loadAnimation(new SpriteSheet('../assets/kicksprite.png',
    [{'name':'player_stand', 'frame':{'x':0, 'y': 0, 'width': 65, 'height': 76}} ]));
    
}




function setup() {
    
    createCanvas(windowWidth, windowHeight);
    
    
    add_make_tile();
    make_head_kick();
    net_setup();
    setup_scoreboard()
    
    
    make_football();   

}




function draw() {
    background(bg);
    
    head_kick_draw();
    draw_football()
    net_draw() 
    
    drawSprites();
    draw_scoreboard();
}




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}