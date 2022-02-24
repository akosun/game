let colors = ["red", "blue", "yellow", "green"];
let player = [];
let computer = [];
let level = 0;
play = false;


document.querySelector(".btn").addEventListener("click", function start(){
       if (play === false){
        document.querySelector(".btn").innerHTML = "ON"
        document.querySelector("h1").innerHTML = ("Your Score is " + level * 10);
        document.querySelector(".btn").classList.add("button-on");
        setTimeout(function(){
            computerPlay();
        },400);
        play = true;
        
       }
});


function computerPlay(){
    player = [];
    let randomNumber = Math.floor(Math.random()*4);
    let randomColor = colors[randomNumber];
    computer.push(randomColor); 
    flash(randomColor);
    
    sound();
}


for (let i = 0; i<4; i++) {
document.querySelectorAll(".box")[i].addEventListener("click", function(){
    let clicked = this.id;
    player.push(clicked);
    playerFlash(clicked); 
    
    sound();
    checkAnswer(player.length-1);
    });
}
function checkAnswer(sequence){
    if (player[sequence] === computer[sequence]){
        if (player.length === computer.length){
            level++;
                setTimeout(function(){
                    computerPlay();
                }, 800);
        document.querySelector("h1").innerHTML = ("Your Score is " + level * 10);
        }
    } else{
        
        startover();
    }
}
function flash(color){
    document.querySelector("#" + color).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("#" + color).classList.remove("pressed");
    }, 200);
};

function playerFlash(color){
    document.querySelector("#" + color).classList.add("player-pressed");
    setTimeout(function(){
        document.querySelector("#" + color).classList.remove("player-pressed");
    }, 200);
};


startover = () =>{
        player = [];
        computer = [];
        
        
        document.querySelector("h1").innerHTML = ("Game over! <br> Your score is "+ level * 10 );
        document.querySelector(".btn").innerHTML = "OFF";
        document.querySelector(".btn").classList.remove("button-on");
        wrong();
        level = 0;
        setTimeout(function(){
            play = false;
        }, 500)
        
              
} 

function sound(){
   var audio = new Audio('player.mp3');
   audio.play();
}
function wrong(){
    new Audio('wrong.mp3').play();
}