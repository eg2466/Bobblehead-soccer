let player1_score;
let player2_score;

function setup_scoreboard() {
    player1_score = 0;
    player2_score = 0;
}

function draw_scoreboard() {
    push();
    fill(0, 0, 0, 150);
    rectMode(CENTER);
    rect(50, 50, 60, 60, 10);
    rect(windowWidth-50, 50, 60, 60, 10);
    
    fill(255);
    textSize(32);
    text(player1_score, 42, 60);
    text(player2_score, windowWidth-58, 60);
    pop();
}